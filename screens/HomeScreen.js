import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'
import { watchEventsData } from '../redux/actions/data/events'
import { watchGoalsData } from '../redux/actions/data/goals'
import { watchNotificationsData } from '../redux/actions/data/notifications'
import { profilePicture, chooseColor, compareTime } from '../helpers/functions'

import Background from '../assets/backgrounds/background'
import NotificationOffIcon from '../assets/icons/notificationIcon'
import NotificationOnIcon from '../assets/icons/notificationWithBubbleIcon'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CountingStars from '../assets/others/countingStars'
import GoalIcon from '../assets/others/goal'
import QuizIcon from '../assets/settings/quizIcon.js'
import { colors } from '../helpers/style';
import { quotes } from '../helpers/quotes'
import { screenHeight } from '../helpers/utils'

let today = moment();

const mapDispatchToProps = (dispatch) => ({
    watchEventsData: (userId) => dispatch(watchEventsData(userId)),
    watchGoalsData: (userId) => dispatch(watchGoalsData(userId)),
    watchNotificationsData: (userId) => dispatch(watchNotificationsData(userId)),
});

const mapStateToProps = (state) => ({
    user: state.auth.user,
    events: state.events.eventsData,
    doneFetchingEventsData: state.events.doneFetching,
    goals: state.goals.goalsData,
    doneFetchingGoalsData: state.goals.doneFetching,
    notifications: state.notifications.notificationsData,
    doneFetchingNotificationsData: state.notifications.doneFetching,
    theme: state.theme
});

function HomeScreen({ ...props }) {

    const { user, navigation, theme, watchEventsData, events, doneFetchingEventsData, watchGoalsData, goals, doneFetchingGoalsData, watchNotificationsData, notifications, doneFetchingNotificationsData } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [profile, setProfile] = useState('')
    const [username, setUsername] = useState('')

    const [markedEventsArray, setMarkedEventsArray] = useState(events === undefined ? [] : events)
    const [todayEventsArray, setTodayEventsArray] = useState(events === undefined ? [] : events)
    const [goalsArray, setGoalsArray] = useState(goals === undefined ? [] : goals)
    const [notificationsArray, setNotificationsArray] = useState(notifications === undefined ? [] : notifications)
    const [notification, setNotification] = useState(false);
    const [nextGoal, setNextGoal] = useState("")
    const [nextGoalDueDate, setNextGoalDueDate] = useState("")
    const [quote, setQuote] = useState("")

    const dayString = moment().format("dddd, MMMM Do YYYY");

    useEffect(() => {
        if (user) {
            const userUsername = user.username
            setUsername(userUsername)
            const userProfile = user.profile
            setProfile(userProfile)

            const id = user.id
            if ((Array.isArray(events) && events.length === 0) || events === undefined) {
                watchEventsData(id)
            }
            if ((Array.isArray(goals) && goals.length === 0) || goals === undefined) {
                watchGoalsData(id)
            }
            if ((Array.isArray(notifications) && notifications.length === 0) || notifications === undefined) {
                watchNotificationsData(id)
            }
        }
        if (doneFetchingEventsData) {
            setMarkedEventsArray(events)
            setTodayEventsArray(events)
        }
        if (doneFetchingGoalsData) {
            setGoalsArray(goals)
            const filteredGoals = goals.filter(gl => gl.completed === false)
            const goal = filteredGoals[0]
            setNextGoal(goal.title)
            setNextGoalDueDate(moment(new Date(goal.date)).startOf('day').fromNow())
            const random = Math.floor(Math.random() * 11);
            const quo = quotes[random]
            setQuote(quo)
        }
        if (doneFetchingNotificationsData) {
            setNotificationsArray(notifications)
            const notificationsLength = notifications.length;
            if (notificationsLength != 0)
                setNotification(true)
        }

        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }

    }, [doneFetchingEventsData, doneFetchingGoalsData, doneFetchingNotificationsData, theme])

    const notificationIcon = (notification) => notification ? <NotificationOnIcon onPress={handleNotificationPress} /> : <NotificationOffIcon onPress={handleNotificationPress} />
    const handleNotificationPress = () => navigation.navigate("Notifications")

    const handleQuizPress = () => navigation.navigate("QuizStack")

    // const getFriendsFromFirestore = (id) => {
    //     const friendRef = firebase.firestore().collection('users').doc(id);
    //     friendRef.get()
    //         .then(doc => {
    //             const data = doc.data();
    //             const friendInfo = { id: id, profile: data.profile }
    //             return friendInfo
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     return null;
    // }

    let markedDatesArray = markedEventsArray === undefined ? [] : markedEventsArray.map(ev => ({ date: moment(new Date(ev.date)), dots: { color: chooseColor(ev.category) } }))

    let markedDatesArrayResult = Object.values(markedDatesArray.reduce((a, c) => {
        (a[c.date] || (a[c.date] = { date: c.date, dots: [] })).dots.push(c.dots);
        return a;
    }, {}));

    let todayEvents = todayEventsArray === undefined ? [] : todayEventsArray
        .filter(ev => ev.date === moment().format("YYYY-MM-DD"))
        // .filter(ev => ev.date === '2021-04-15')
        .map(ev => {
            let friendsArr = ev.friends;
            // let arr = friendsArr.map(fr => { getFriendsFromFirestore(fr, arr) })
            return ({
                title: ev.title,
                time: ev.startTime + " - " + ev.endTime,
                location: ev.location,
                friends: friendsArr
            })
        })
    let todayEventsCards = todayEvents.sort(compareTime)

    return (
        <View style={styles.container}>
            <Background width={'120%'} height={'100%'} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topDiv}>
                <View style={styles.introText}>
                    <View style={styles.introIconArange}>
                        {profilePicture(profile, 45)}
                    </View>
                    <View style={styles.introTextArange}>
                        <Text style={styles.helloText}>Hello,<Text style={{ ...styles.helloText, color: themeStyle.cardBlue }}> {username}</Text></Text>
                        <Text>{dayString}</Text>
                    </View>
                    {notificationIcon(notification)}

                </View>

                {markedDatesArray.length === 0 || markedDatesArray === undefined ?
                    null
                    :
                    <CalendarStrip
                        style={styles.calendarStrip}
                        calendarColor={themeStyle.backgroundColor}
                        calendarHeaderStyle={{ color: themeStyle.textColor, fontSize: 16, fontWeight: 'normal', paddingBottom: 4 }}
                        dateNameStyle={{ color: themeStyle.textGray, fontSize: 12 }}
                        dateNumberStyle={{ color: themeStyle.textColor, fontSize: 16, fontWeight: 'normal' }}
                        highlightDateNameStyle={{ color: themeStyle.backgroundColor, fontSize: 11 }}
                        highlightDateNumberStyle={{ color: themeStyle.backgroundColor, fontSize: 16, fontWeight: 'normal' }}
                        highlightDateContainerStyle={{ backgroundColor: themeStyle.lightViolet, borderRadius: 10, height: "100%" }}
                        iconContainer={{ flex: 0.1 }}
                        upperCaseDays={false}
                        selectedDate={today}
                        markedDates={markedDatesArrayResult}
                        onDateSelected={() => navigation.navigate("CalendarStack")}
                    />
                }
            </View>

            <View style={styles.midDiv}>

                <View style={{ flex: 1.2, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ ...styles.title, marginLeft: "5%", marginTop: screenHeight / 914 * 15, flex: 1 }}>Today's Events</Text>
                    <TouchableHighlight underlayColor={themeStyle.lightViolet} style={styles.addButton} onPress={() => navigation.navigate("CreateActivity")}><Text style={styles.plusButton}>+</Text></TouchableHighlight>
                </View>
                {todayEventsCards.length === 0 ?
                    <View style={styles.containerNoEvents}>
                        <CountingStars width={screenHeight / 100 * 21} height={screenHeight / 100 * 21} />
                        <Text style={styles.textNoActivities}>No activities{'\n'}planned for{'\n'}today.</Text>
                    </View>
                    :
                    <ScrollView
                        horizontal
                        scrollEventThrottle={1}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.containerEvents}
                    >
                        {todayEventsCards.map((info, index) => (
                            <View key={index} style={styles.paper}>
                                <Text style={styles.paperTitle}>{info.title}</Text>
                                <Text style={styles.paperTime}>{info.time}</Text>
                                <View style={{ ...styles.introIconArange, flexDirection: "row", alignItems: "center" }}>
                                    <Icon name="map-marker-alt" size={14} color={themeStyle.button} style={{ paddingRight: 5 }} />
                                    <Text>{info.location}</Text>
                                </View>
                                {info.friends.length === 0 ?
                                    null
                                    :
                                    <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: "5%", flex: 1 }}>
                                        {profilePicture(info.friends[0].profile, 26)}
                                        {/* <Image source={info.friends[1].profile} style={styles.avatar} /> */}
                                        {info.friends.length >= 2 ?
                                            <View style={{ marginLeft: -5 }}>
                                                {profilePicture(info.friends[1].profile, 26)}
                                            </View>
                                            // <Image source={info.friends[1].profile} style={{ ...styles.avatar, marginLeft: -5 }} />
                                            :
                                            info.friends.length >= 3 ?
                                                <View>
                                                    <View style={{ marginLeft: -5 }}>
                                                        {profilePicture(info.friends[1].profile, 26)}
                                                    </View>
                                                    <View style={{ marginLeft: -5 }}>
                                                        {profilePicture(info.friends[2].profile, 26)}
                                                    </View>
                                                </View>

                                                // <Image source={info.friends[2].profile} style={{ ...styles.avatar, marginLeft: -5 }} />
                                                :
                                                info.friends.length > 3 ?
                                                    <View>
                                                        <View style={{ marginLeft: -5 }}>
                                                            {profilePicture(info.friends[1].profile, 26)}
                                                        </View>
                                                        <View style={{ marginLeft: -5 }}>
                                                            {profilePicture(info.friends[2].profile, 26)}
                                                        </View>
                                                        <View style={{ ...styles.avatar, marginLeft: -5, borderWidth: 0.5, borderBottomColor: themeStyle.textGray }}>
                                                            <Text>{`${info.friends.length} +`}</Text>
                                                        </View>
                                                    </View>
                                                    :
                                                    null
                                        }
                                    </View>}
                            </View>
                        ))}
                    </ScrollView>
                }
                <View style={{ width: "100%" }}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.quizz} onPress={handleQuizPress}>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.paperTitle}>Take a quizz</Text>
                                <Text>Find out how to spend your time.</Text>
                            </View>
                            <QuizIcon style={{ marginRight: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.botDiv}>
                <Text style={styles.title}>Next Goal</Text>
                <View style={styles.goalCard}>

                    <View style={styles.viewArangeGoal}>
                        <GoalIcon width={50} height={50} style={styles.iconArangeGoal} />
                        <View style={styles.viewArangeText}>
                            <Text style={{ fontSize: 18 }}>{nextGoal}</Text>
                            <Text style={{ fontSize: 12, color: themeStyle.textGray }}>{nextGoalDueDate}</Text>
                            <Text>{quote}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>

    );
}

const styleSheetFactory = (themeStyle) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topDiv: {
        flex: 1.5,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    midDiv: {
        flex: 1.9,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',

    },
    introText: {
        flexDirection: 'row',
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: "15%",
    },
    introTextArange: {
        flexDirection: 'column',
        flex: 1
    },
    introIconArange: {
        paddingRight: 10
    },
    helloText: {
        fontSize: 24
    },
    title: {
        fontSize: 22,
    },
    paper: {
        justifyContent: 'flex-start',
        height: 160,
        width: 135,
        borderRadius: 20,
        padding: 10,
        backgroundColor: themeStyle.backgroundColor,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginRight: 10,

    },
    paperTitle: {
        fontSize: 18,
        color: themeStyle.button,
        height: '42%'
    },
    paperTime: {
        color: themeStyle.textColor,
        paddingTop: 5,
        paddingBottom: 5
    },
    containerEvents: {
        height: '90%',
        alignItems: 'center',
        paddingRight: "5%",
        paddingLeft: "5%",
    },
    containerNoEvents: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: "5%",
        marginLeft: "5%",
        marginBottom: "3%"
    },
    textNoActivities: {
        fontSize: 22,
        color: themeStyle.textColor,
        fontWeight: '200'
    },
    botDiv: {
        flex: 0.9,
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'space-around',

    },
    goalCard: {
        width: '100%',
        height: '54%',
        backgroundColor: themeStyle.backgroundColor,
        borderRadius: 20,
        marginBottom: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    viewArangeGoal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginRight: 10,
    },
    viewArangeText: {
        flex: 1,
        flexDirection: "column",
    },
    iconArangeGoal: {
        marginLeft: 10,
        marginRight: 10,
    },
    addButton: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: screenHeight / 914 * 15,
        marginRight: '5%',
    },
    plusButton: {
        fontSize: 24,
        color: themeStyle.linkBlue
    },
    calendarStrip: {
        height: "35%",
        paddingTop: 10,
        paddingBottom: 5,
        width: '100%',
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    quizz: {
        width: '90%',
        height: 85,
        alignSelf: 'center',
        backgroundColor: themeStyle.backgroundColor,
        elevation: 5,
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    avatar: {
        height: 26,
        width: 26,
        borderRadius: 13,
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
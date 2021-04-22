import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

import { watchEventsData } from '../redux/actions/data/events'

import Background from '../assets/backgrounds/background'
import ProfileFemale from '../assets/profiles/profileFemale'
import ProfileMale from '../assets/profiles/profileMale'
import NotificationOffIcon from '../assets/icons/notificationIcon'
import NotificationOnIcon from '../assets/icons/notificationWithBubbleIcon'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CountingStars from '../assets/others/countingStars'
import GoalIcon from '../assets/others/goal'
import QuizIcon from '../assets/settings/quizIcon.js'
import { colors, categories } from '../helpers/style';

const theme = colors.light;
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
let today = moment();

const mapDispatchToProps = (dispatch) => ({ watchEventsData: (userId) => dispatch(watchEventsData(userId)) });

const mapStateToProps = (state) => ({
    user: state.auth.user,
    events: state.events.eventsData,
    doneFetchingData: state.events.doneFetching,
    theme: state.theme
});

function HomeScreen({ ...props }) {

    const { user, navigation, watchEventsData, events, doneFetchingData } = props

    const [markedEventsArray, setMarkedEventsArray] = useState(events === undefined ? [] : events)
    const [todayEventsArray, setTodayEventsArray] = useState(events === undefined ? [] : events)
    const [notification, setNotification] = useState(false);

    const dayString = moment().format("dddd, MMMM Do YYYY");

    let profile = 'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'
    let username = ''

    if (user) {
        profile = user.profile
        username = user.username
    }

    const profilePicture = () => {
        if (profile === "M")
            return <ProfileMale width={45} height={45} />
        else
            if (profile === "F")
                return <ProfileFemale width={45} height={45} />
            else {
                return <Avatar.Image size={45} source={{ uri: profile }} />
            }
    }

    const notificationIcon = (notification) => notification ? <NotificationOnIcon onPress={() => setNotification(!notification)} /> : <NotificationOffIcon onPress={() => setNotification(!notification)} />

    const handleQuizPress = () => navigation.navigate("QuizStack")
    const handleNotificationPress = () => navigation.navigate("Notifications")


    const compare = (obj1, obj2) => {
        if (obj1.time < obj2.time) {
            return -1;
        }
        if (obj1.time > obj2.time) {
            return 1;
        }
        return 0;
    }

    const chooseColor = (category) => {
        switch (category) {
            case "University":
                return categories.university
            case "Work":
                return categories.work
            case "Lifestyle":
                return categories.lifestyle
            case "Sport":
                return categories.sport
            case "Shopping":
                return categories.shopping
            case "Holiday":
                return categories.holiday
        }
    }

    let markedDatesArray = markedEventsArray === undefined ? [] : markedEventsArray.map(ev => ({ date: moment(new Date(ev.date)), dots: { color: chooseColor(ev.category) } }))

    let markedDatesArrayResult = Object.values(markedDatesArray.reduce((a, c) => {
        (a[c.date] || (a[c.date] = { date: c.date, dots: [] })).dots.push(c.dots);
        return a;
    }, {}));

    let todayEvents = todayEventsArray === undefined ? [] : todayEventsArray
        .filter(ev => ev.date === moment().format("YYYY-MM-DD"))
        .map(ev => ({ title: ev.title, time: ev.startTime + " - " + ev.endTime, location: ev.location }))
    let todayEventsCards = todayEvents.sort(compare)

    useEffect(() => {
        if (user) {
            let id = user.id
            if ((Array.isArray(events) && events.length === 0) || events === undefined) {
                watchEventsData(id)
            }
        }
        if (doneFetchingData) {
            setMarkedEventsArray(events)
            setTodayEventsArray(events)
        }
    }, [doneFetchingData])

    return (
        <View style={styles.container}>
            <Background width={'120%'} height={'100%'} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topDiv}>
                <View style={styles.introText}>
                    <View style={styles.introIconArange}>
                        {profilePicture()}
                    </View>
                    <View style={styles.introTextArange}>
                        <Text style={styles.helloText}>Hello,<Text style={{ ...styles.helloText, color: theme.cardBlue }} onPress={handleNotificationPress}> {username}</Text></Text>
                        <Text>{dayString}</Text>
                    </View>
                    {notificationIcon(notification)}

                </View>

                {markedDatesArray.length === 0 ?
                    null
                    :
                    <CalendarStrip
                        style={styles.calendarStrip}
                        calendarColor={theme.backgroundColor}
                        calendarHeaderStyle={{ color: theme.textColor, fontSize: 16, fontWeight: 'normal', paddingBottom: 4 }}
                        dateNameStyle={{ color: theme.textGray, fontSize: 12 }}
                        dateNumberStyle={{ color: theme.textColor, fontSize: 16, fontWeight: 'normal' }}
                        highlightDateNameStyle={{ color: theme.backgroundColor, fontSize: 11 }}
                        highlightDateNumberStyle={{ color: theme.backgroundColor, fontSize: 16, fontWeight: 'normal' }}
                        highlightDateContainerStyle={{ backgroundColor: theme.lightViolet, borderRadius: 10, height: "100%" }}
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
                    <TouchableHighlight underlayColor={theme.lightViolet} style={styles.addButton} onPress={() => navigation.navigate("CreateActivity")}><Text style={styles.plusButton}>+</Text></TouchableHighlight>
                </View>
                {todayEventsCards === undefined ?
                    null
                    :
                    todayEventsCards.length === 0 ?
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
                                        <Icon name="map-marker-alt" size={14} color={theme.button} style={{ paddingRight: 5 }} />
                                        <Text>{info.location}</Text>
                                    </View>
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
                            <Text style={{ fontSize: 18 }}>Study for exams</Text>
                            <Text style={{ fontSize: 12, color: theme.textGray }}>3 days left</Text>
                            <Text>He who laughs most, learns best.</Text>
                        </View>
                        <Icon name="ellipsis-v" size={20} color={theme.textGray} style={styles.iconArangeGoal} />
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
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
        backgroundColor: theme.backgroundColor,
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
        color: theme.button,
        height: '42%'
    },
    paperTime: {
        color: theme.textColor,
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
        color: theme.textColor,
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
        backgroundColor: theme.backgroundColor,
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
    },
    viewArangeText: {
        flexDirection: "column",
        flex: 1
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
        color: theme.linkBlue
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
        backgroundColor: theme.backgroundColor,
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
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
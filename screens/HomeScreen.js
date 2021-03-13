import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';
import { colors } from '../helpers/style';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

import Background from '../assets/backgrounds/background'
import ProfileFemale from '../assets/profiles/profileFemale'
import ProfileMale from '../assets/profiles/profileMale'
import NotificationOffIcon from '../assets/icons/notificationIcon'
import NotificationOnIcon from '../assets/icons/notificationWithBubbleIcon'
import Icon from 'react-native-vector-icons/FontAwesome5';
import GoalIcon from '../assets/others/goal'

const theme = colors.light;
let today = moment();

let markedDatesArray = [
    {
        date: today,
        dots: [
            {
                color: "red",
            },
            {
                color: "yellow",
            },
            {
                color: "green",
            },
        ],
    },
    {
        date: "2021-02-24T13:17:09.561Z",
        dots: [
            {
                color: "blue",
            },
        ],
    },
    {
        date: "2021-03-02T13:17:09.561Z",
        dots: [
            {
                color: "blue",
            },
        ],
    }
];

let todayEventsCards = [
    {
        title: "Design Meeting",
        time: "10:00 - 11:30",
        location: "Zoom",
    },
    {
        title: "Office Team Meeting",
        time: "12:00 - 14:30",
        location: "Office room",
    },
    {
        title: "Going Out",
        time: "18:00 - 19:30",
        location: "Central Park",
    },
    {
        title: "Going In Rn Acum",
        time: "20:00 - 21:30",
        location: "Home",
    }
];

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});


function HomeScreen({ ...props }) {

    const { user } = props
    const navigation = useNavigation();

    const [profile, setProfile] = useState(user.profile)

    let profilePicture = () => {
        if (profile === "M")
            return <ProfileMale width={45} height={45} />
        else
            if (profile === "F")
                return <ProfileFemale width={45} height={45} />
            else {
                return <Avatar.Image size={45} source={{ uri: profile }} />
            }
    }

    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'orange' };
    const massage = { key: 'massage', color: 'orange', selectedDotColor: 'yellow' };
    const workout = { key: 'workout', color: 'green' };

    const [notification, setNotification] = useState(false);

    let notificationIcon = (notification) => {
        return (notification ? <NotificationOnIcon onPress={() => setNotification(!notification)} /> : <NotificationOffIcon onPress={() => setNotification(!notification)} />)
    }

    let dayString = moment().format("dddd, MMMM Do YYYY");
    return (
        <View style={styles.container}>
            <Background width={'120%'} height={'100%'} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topDiv}>
                <View style={styles.introText}>
                    <View style={styles.introIconArange}>
                        {profilePicture()}
                    </View>
                    <View style={styles.introTextArange}>
                        <Text style={styles.helloText}>Hello,<Text style={{ ...styles.helloText, color: theme.cardBlue }}> {user.username}</Text></Text>
                        <Text>{dayString}</Text>
                    </View>
                    {notificationIcon(notification)}

                </View>
                <CalendarStrip
                    style={{ height: "35%", paddingTop: 10, paddingBottom: 5, width: '100%', borderRadius: 20, elevation: 5 }}
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
                    markedDates={markedDatesArray}
                    onDateSelected={() => navigation.navigate("CalendarStack")}
                />
            </View>

            <View style={styles.midDiv}>

                <View style={{ flex: 1.6, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ ...styles.title, marginLeft: "5%", marginTop: '5%', flex: 1 }}>Today's Events</Text>
                    <TouchableHighlight underlayColor={theme.lightViolet} style={styles.addButton} onPress={() => console.log("Edi e cel mai tare")}><Text style={styles.plusButton}>+</Text></TouchableHighlight>
                </View>
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
        flex: 1.7,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    midDiv: {
        flex: 1.5,
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
        height: 155,
        width: 135,
        borderRadius: 20,
        padding: 10,
        backgroundColor: theme.backgroundColor,
        elevation: 5,
        marginRight: 10,

    },
    paperTitle: {
        fontSize: 18,
        color: theme.button,
        height: '38%'
    },
    paperTime: {
        color: theme.textColor,
        paddingTop: 5,
        paddingBottom: 5
    },
    containerEvents: {
        height: '80%',
        alignItems: 'center',
        paddingRight: "5%",
        paddingLeft: "5%",
        marginTop: '5%',
    },
    botDiv: {
        flex: 1.1,
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'space-around',

    },
    goalCard: {
        width: '100%',
        height: '54%',
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        elevation: 5,
        marginBottom: 20
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
        marginTop: '5%',
        marginRight: '5%',
    },
    plusButton: {
        fontSize: 24,
        color: theme.linkBlue
    }
});


export default connect(mapStateToProps)(HomeScreen);


{/* <Calendar
                startDay={1}
                style={{ width: 300, }}
                onDayPress={(day) => { console.log('selected day', day) }}
                markingType={'period'}
                markedDates={{
                    '2021-02-16': { startingDay: true, color: '#50cebb', textColor: 'white' },
                    '2021-02-17': { color: '#50cebb', textColor: 'white', marked: true, dotColor: 'white' },
                    '2021-02-18': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
                    '2021-02-19': { endingDay: true, color: '#50cebb', textColor: 'white' },
                }}
            /> */}
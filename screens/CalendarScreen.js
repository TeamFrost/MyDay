import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import { useActionSheet } from '@expo/react-native-action-sheet'
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'
import { chooseColor, compareStartTime } from '../helpers/functions'

import Background from '../assets/backgrounds/background'
import Space from "../assets/others/space";
import { colors } from '../helpers/style';

const theme = colors.light;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


const mapStateToProps = (state) => ({
    user: state.auth.user,
    events: state.events.eventsData,
    theme: state.theme
});

function CalendarScreen({ ...props }) {

    const { showActionSheetWithOptions } = useActionSheet();

    const { user, events, navigation } = props

    const [todayEventsArray, setTodayEventsArray] = useState(events)
    const [todayEventsCards, setTodayEventsCards] = useState([])

    const Item = ({ title, description, startTime, endTime, location, current, id }) => (
        <View style={styles.item}>
            <View style={styles.leftCardTime}>
                <Text style={styles.startTime}>{startTime}</Text>
                <Text style={styles.endTime}>{endTime}</Text>
            </View>

            <View style={{ ...styles.card, backgroundColor: current }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ ...styles.title, color: current === theme.cardBlue ? "white" : theme.textColor }}>{title}</Text>
                    <Icon name="ellipsis-v" size={20} color={current === theme.cardBlue ? "white" : theme.textGray} style={styles.iconArangeGoal} onPress={() => handleDeletePress(id)} />
                </View>
                <Text style={{ ...styles.description, color: current === theme.cardBlue ? "white" : theme.textColor }}>{description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Icon name="map-marker-alt" size={14} color={current === theme.cardBlue ? "white" : theme.button} style={{ paddingRight: 5 }} />
                    <Text style={{ ...styles.description, color: current === theme.cardBlue ? "white" : theme.textColor }}>{location}</Text>
                </View>
            </View>

        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} startTime={item.startTime} endTime={item.endTime} location={item.location} description={item.description} current={item.current} id={item.id} />
    );

    const headerFlatList = () => {
        return (
            <View style={styles.headerFlatList}>
                <View style={styles.headerTime}>
                    <Text style={{ ...styles.startTime, fontSize: 22 }}>Time</Text>
                </View>
                <View style={styles.headerActivity}>
                    <Text style={{ ...styles.startTime, fontSize: 22 }}>Activity</Text>
                </View>
            </View>)
    }

    const handleDeletePress = (id) => {
        const options = ['Yes', 'No'];
        const destructiveButtonIndex = 0;
        const title = "Are you sure you want to delete this event?"

        showActionSheetWithOptions(
            {
                title,
                options,
                destructiveButtonIndex,
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    deleteEvent(id)
                } else if (buttonIndex === 1) {
                    // cancel
                }
            },
        );
    }

    const deleteEvent = (id) => {
        firebase.firestore().collection('goals').doc(user.id).collection('sub_goals').doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    let markedDatesArray = events.map(ev => ({ date: ev.date, dots: { color: chooseColor(ev.category) } }))
    let markedDatesArrayResult = Object.values(markedDatesArray.reduce((a, c) => {
        (a[c.date] || (a[c.date] = { date: c.date, dots: [] })).dots.push(c.dots);
        return a;
    }, {}));

    var markedDatesObject = markedDatesArrayResult.reduce((a, c) => ({ ...a, [c.date]: c }), {});

    let todayEvents = todayEventsArray.filter(ev => ev.date === moment().format("YYYY-MM-DD"))
        .map(ev => ({
            id: ev.id,
            title: ev.title,
            description: ev.details,
            startTime: ev.startTime,
            endTime: ev.endTime,
            location: ev.location,
            current: ev.startTime < moment().format('HH:mm') && ev.endTime > moment().format('HH:mm') ? theme.cardBlue : theme.backgroundColor
        }));

    const setAgendaDay = (day) => {
        todayEvents = todayEventsArray
            .filter(ev => ev.date === day.dateString)
            .map(ev => ({
                id: ev.id,
                title: ev.title,
                description: ev.details,
                startTime: ev.startTime,
                endTime: ev.endTime,
                location: ev.location,
                current: theme.backgroundColor
            }));
        setTodayEventsCards(todayEvents.sort(compareStartTime))
    }

    return (
        <View style={styles.container}>
            <Background width={'120%'} height={'100%'} style={{ flex: 1, position: 'absolute' }} />
            <View style={styles.calendar}>

                <CalendarList
                    horizontal
                    pagingEnabled
                    pastScrollRange={6}
                    futureScrollRange={6}
                    showScrollIndicator
                    calendarWidth={screenWidth}
                    calendarHeight={360}
                    firstDay={1}
                    style={{ marginTop: 25 }}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    onDayPress={(day) => setAgendaDay(day)}
                    onDayLongPress={(day) => navigation.navigate("CreateActivity", { date: day })}
                    theme={{
                        textDayFontSize: 18,
                        textDayHeaderFontSize: 15,
                        textMonthFontSize: 20,
                        textMonthFontWeight: 'bold',
                        'stylesheet.day.basic': {
                            today: {
                                borderRadius: 4,
                                backgroundColor: theme.lightViolet
                            },
                            todayText: {
                                color: theme.backgroundColor,
                                fontWeight: 'bold',

                            },
                        },
                    }}
                    markedDates={markedDatesObject}
                    markingType={'multi-dot'}

                />

            </View>

            {todayEventsCards.length === 0 ?
                <View style={styles.containerNoEvents}>
                    <Space />
                    <Text style={styles.textNoEvents}>No activities for this day.</Text>
                </View>
                :
                <View style={styles.flatListDiv}>
                    <FlatList
                        ListHeaderComponent={headerFlatList()}
                        data={todayEventsCards}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                    />
                </View>
            }
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    calendar: {
        width: '100%',
        height: 385,
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
        justifyContent: 'flex-end',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    flatListDiv: {
        flex: 1,
        width: '100%',
        backgroundColor: "transparent",
    },
    item: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        height: 150
    },
    leftCardTime: {
        borderRightWidth: 2,
        borderRightColor: theme.backgroundColor,
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingRight: 10,
        width: '20%',
    },
    card: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        marginLeft: 10,
        height: 135,
        borderRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'column',
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
    },
    iconArangeGoal: {
        marginLeft: 10,
        marginRight: 10,
    },
    startTime: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.textColor
    },
    endTime: {
        fontSize: 16,
        paddingTop: 5,
        color: theme.textGrayDark
    },
    headerFlatList: {
        height: 60,
        width: '100%',
        flexDirection: 'row'
    },
    headerTime: {
        width: '20%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    headerActivity: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 22,
    },
    containerNoEvents: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNoEvents: {
        fontSize: 22,
        color: theme.textColor,
        fontWeight: '200'
    },
});

export default connect(mapStateToProps)(CalendarScreen);
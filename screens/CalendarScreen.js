import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import { connect } from 'react-redux';

import Background from '../assets/backgrounds/background'
import { colors } from '../helpers/style';

const theme = colors.light;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

let today = moment().format('YYYY-MM-DD').toString();

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'orange' };
const massage = { key: 'massage', color: 'orange', selectedDotColor: 'yellow' };
const workout = { key: 'workout', color: 'green' };


const DATA = [
    {
        title: "Design Meeting",
        description: "Short Briefing",
        startTime: "10:00",
        endTime: "11:30",
        location: "Zoom",
    },
    {
        title: "Office Team Meeting",
        description: "Present work summary",
        startTime: "12:00",
        endTime: "14:30",
        location: "Office room",
    },
    {
        title: "Going Out",
        description: "Meeting with my friends",
        startTime: "18:00",
        endTime: "19:30",
        location: "Central Park",
    },
    {
        title: "Watching Netflix",
        description: "Binging Modern Family XD",
        startTime: "20:00",
        endTime: "22:30",
        location: "Home",
    }
]

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function CalendarScreen({ ...props }) {

    const { user } = props

    const Item = ({ title, description, startTime, endTime, location }) => (
        <View style={styles.item}>
            <View style={styles.leftCardTime}>
                <Text style={styles.startTime}>{startTime}</Text>
                <Text style={styles.endTime}>{endTime}</Text>
            </View>

            <View style={styles.card}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.title}>{title}</Text>
                    <Icon name="ellipsis-v" size={20} color={theme.textGray} style={styles.iconArangeGoal} />
                </View>
                <Text style={styles.description}>{description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Icon name="map-marker-alt" size={14} color={theme.button} style={{ paddingRight: 5 }} />
                    <Text style={styles.description}>{location}</Text>
                </View>
            </View>

        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} startTime={item.startTime} endTime={item.endTime} location={item.location} description={item.description} />
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
                    onDayPress={(day) => { console.log('selected day', day) }}
                    theme={{
                        textDayFontSize: 18,
                        textDayHeaderFontSize: 16,
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
                    markedDates={{
                        '2021-03-16': { dots: [vacation, massage, workout], selectedColor: theme.violet },
                        '2021-03-17': { dots: [massage, workout] }
                    }}
                    markingType={'multi-dot'}

                />

            </View>

            <View style={styles.flatListDiv}>
                <FlatList
                    ListHeaderComponent={headerFlatList()}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
            </View>
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
        height: 360,
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
        justifyContent: 'flex-end',
        elevation: 5
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
        fontSize: 18,
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
});

export default connect(mapStateToProps)(CalendarScreen);
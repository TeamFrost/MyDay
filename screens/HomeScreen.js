import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarHeader, Agenda } from 'react-native-calendars';
import { WeekCalendar } from 'react-native-calendars'
import { colors } from '../helpers/style';

const theme = colors.light;

export default function HomeScreen() {

    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'orange' };
    const massage = { key: 'massage', color: 'orange', selectedDotColor: 'yellow' };
    const workout = { key: 'workout', color: 'green' };

    return (
        <View style={styles.container}>
            <Calendar
                style={{ width: 300, }}
                onDayPress={(day) => { console.log('selected day', day) }}
                markingType={'period'}
                markedDates={{
                    '2021-02-16': { startingDay: true, color: '#50cebb', textColor: 'white' },
                    '2021-02-17': { color: '#50cebb', textColor: 'white', marked: true, dotColor: 'white' },
                    '2021-02-18': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
                    '2021-02-19': { endingDay: true, color: '#50cebb', textColor: 'white' },
                }}
            />
            <View style={{ flex: 1, paddingTop: 50, backgroundColor: 'pink' }}>

                <WeekCalendar firstDay={1} onDayPress={(day) => { console.log('selected day', day) }} />
                <Text style={{ position: 'absolute', top: 30, flex: 1, left: '30%' }}>Asta e un weekly calendar :)</Text>
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
        justifyContent: 'center',
        paddingTop: 40,
    },
});
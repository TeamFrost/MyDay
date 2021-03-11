import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Background from '../assets/backgrounds/background'
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from '../helpers/style';

const theme = colors.light;

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
export default function CalendarScreen() {

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
                <Text>Aici o sa fie calendarul :D</Text>
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
        height: 300,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
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
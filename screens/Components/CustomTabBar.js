import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Home from '../../assets/tabIcons/home';
import Calendar from '../../assets/tabIcons/calendar';
import Goals from '../../assets/tabIcons/goals';
import User from '../../assets/tabIcons/user';
import { colors } from '../../helpers/style';

const theme = colors.light;

function point() {
    return (
        <View style={styles.point} />
    )
}

export default function CustomTabBar() {

    const [active, setActive] = useState(1);
    const navigation = useNavigation();

    const move = (active) => {
        switch (active) {
            case 1: navigation.navigate("HomeStack"); break;
            case 2: navigation.navigate("CalendarStack"); break;
            case 3: navigation.navigate("GoalsStack"); break;
            case 4: navigation.navigate("ProfileStack"); break;
        }
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(1); move(1) }}>
                <Home fill={active == 1 ? theme.red : theme.textColor} />
                {active == 1 ? point() : <View />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(2); move(2) }}>
                <Calendar fill={active == 2 ? theme.red : theme.textColor} />
                {active == 2 ? point() : <View />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(3); move(3) }}>
                <Goals fill={active == 3 ? theme.red : theme.textColor} />
                {active == 3 ? point() : <View />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(4); move(4) }}>
                <User fill={active == 4 ? theme.red : theme.textColor} />
                {active == 4 ? point() : <View />}
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '9%',
        width: '100%',
        backgroundColor: theme.backgroundColor,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Platform === 'ios' ? 10 : 0,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    point: {
        height: 5,
        width: 5,
        backgroundColor: theme.red,
        borderRadius: 20,
        marginTop: 3
    }
});
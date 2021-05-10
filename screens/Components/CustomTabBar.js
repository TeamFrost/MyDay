import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { connect } from 'react-redux';

import Home from '../../assets/tabIcons/home';
import Calendar from '../../assets/tabIcons/calendar';
import Goals from '../../assets/tabIcons/goals';
import User from '../../assets/tabIcons/user';
import { colors } from '../../helpers/style';

const mapStateToProps = (state) => ({
    theme: state.theme,
    dark: state.theme.dark
});

function CustomTabBar({ ...props }) {
    const { navigation, theme, dark } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [active, setActive] = useState(1);

    useEffect(() => {
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    const move = (active) => {
        switch (active) {
            case 1: navigation.navigate("HomeStack"); break;
            case 2: navigation.navigate("CalendarStack"); break;
            case 3: navigation.navigate("GoalsStack"); break;
            case 4: navigation.navigate("ProfileStack"); break;
        }
    }
    const point = () => <View style={styles.point} />

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(1); move(1) }}>
                <Home fill={active == 1 ? themeStyle.red : themeStyle.textColor} />
                {active == 1 ? point() : <View />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(2); move(2) }}>
                <Calendar fill={active == 2 ? themeStyle.red : themeStyle.textColor} />
                {active == 2 ? point() : <View />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(3); move(3) }}>
                <Goals fill={active == 3 ? themeStyle.red : themeStyle.textColor} />
                {active == 3 ? point() : <View />}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { setActive(4); move(4) }}>
                <User fill={active == 4 ? themeStyle.red : themeStyle.textColor} />
                {active == 4 ? point() : <View />}
            </TouchableOpacity>

        </View>
    );
}

const styleSheetFactory = (themeStyle) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '9%',
        width: '100%',
        backgroundColor: themeStyle.tabBar,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Platform === 'ios' ? 10 : 0,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
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
        backgroundColor: themeStyle.red,
        borderRadius: 20,
        marginTop: 3
    }
});

export default connect(mapStateToProps)(CustomTabBar);
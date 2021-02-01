import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Icon from '../assets/icon'

import { colors } from '../helpers/style';

const theme = colors.light;

export default function LandingScreen() {
    return (
        <View style={styles.container}>
            <Icon height="250" width="250" />
            <Text style={styles.text}>My Day</Text>
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
    },
    text: {
        fontSize: 48,
        padding: 30,
        letterSpacing: -2.5,
    }
});

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LandingScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} />
            <Text style={styles.text}>My Day</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 44,
        padding: 30,
        fontWeight: 'bold'
    }
});

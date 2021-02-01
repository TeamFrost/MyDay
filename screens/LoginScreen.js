import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Background from '../assets/loginBackground.svg';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
console.log(screenWidth)
console.log(screenHeight)

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Background style={{ flex: 1 }} width={screenWidth / 0.95} height={screenHeight / 1.37} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'pink'
    },
});
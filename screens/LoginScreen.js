import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import userIcon from '../assets/icons/userIcon';
import lockIcon from '../assets/icons/lockIcon';
import eyeIcon from '../assets/icons/eyeIcon'
import Background from '../assets/loginBackground';
import { colors } from '../helpers/style.js';

const theme = colors.light

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function LoginScreen() {

    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <Background style={styles.background} width={screenWidth / 0.95} height={screenHeight / 1.37} />
            <View style={styles.loginContainter}>
                <Text style={styles.loginText}>Login</Text>
                <TextInput
                    placeholder="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                    style={{ width: "90%", backgroundColor: theme.backgroundColor, marginTop: 30, borderRadius: 30, height: 50, paddingLeft: 10 }}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: screenHeight,
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    background: {
        flex: 1,
        position: 'absolute',
        top: 0,
    },
    loginContainter: {
        width: '90%',
        height: screenHeight / 2,
        alignSelf: 'center',
        marginTop: '20%',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: theme.backgroundColor,
    }
});
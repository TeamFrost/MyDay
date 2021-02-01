import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../helpers/style';

const theme = colors.light;

export default function ForgotPasswordScreen() {
    return (
        <View style={styles.container}>
            <Text>ForgotPassword</Text>
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
});
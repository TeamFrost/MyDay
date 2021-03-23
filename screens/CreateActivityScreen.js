import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TextInput } from 'react-native';
import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import Back from '../assets/others/back.js';
import { colors } from '../helpers/style';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

export default function CreateActivityScreen() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={screenHeight / 5} style={{ flex: 1, position: 'absolute' }} />
            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{ position: 'absolute', top: '25%', left: '5%' }}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Create a new activity</Text>
            </View>
            <View style={{ flex: 1, width: '90%', alignItems: 'flex-start' }}>
                <View style={{ borderLeftWidth: 3, paddingLeft: 10 }}>
                    <TextInput placeholder="Task Title" style={{ fontSize: 20 }}></TextInput>
                </View>
                <TextInput placeholder="Add your task details" multiline style={{ fontSize: 18, paddingLeft: 13, paddingTop: 10, color: theme.textGrayDark }}></TextInput>

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
    topText: {
        width: '100%',
        height: '26%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textTop: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold"
    },
});
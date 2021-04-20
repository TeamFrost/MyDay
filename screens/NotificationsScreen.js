import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';

import HeaderGradient from '../assets/backgrounds/headerGradientBlue';
import Back from '../assets/others/back.js';
import RightArrowIcon from '../assets/icons/rightArrowIcon'
import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

let notificationCard = (sender) => {
    return (
        <View style={styles.notificationCard}>
            <Text style={styles.inviteText}><Text style={{ fontWeight: 'bold' }}>{sender}</Text> sent you a friend request</Text>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button} onPress={() => console.log("da")}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, borderColor: theme.red }} onPress={() => console.log("nu")}>
                    <Text style={{ ...styles.buttonText, color: theme.red }}>Decline</Text>
                </TouchableOpacity>
            </View>
            <Divider style={{ height: 2 }} />
        </View>
    );
}

function NotificationsScreen({ ...props }) {
    const { user, navigation } = props
    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Notifications</Text>
            </View>

            <ScrollView contentContainterStyle={styles.notificationsView}>
                {notificationCard("Kaitlin Hulme")}
                {notificationCard("Jenny Alexander")}
                {notificationCard("Armin Twinson")}
            </ScrollView>

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
        height: screenHeight / 4.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: '25%',
        left: '5%'
    },
    textTop: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold"
    },
    notificationsView: {
        flex: 1,
        width: '100%',
        padding: '5%',
        alignItems: 'flex-start',
    },
    notificationCard: {
        width: '100%',
        marginTop: '5%',
        height: 110
    },
    inviteText: {
        fontSize: 18
    },
    buttonsView: {
        flex: 1,
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    button: {
        height: 40,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: theme.green,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.green
    }
});


export default connect(mapStateToProps)(NotificationsScreen);
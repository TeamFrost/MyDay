import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'
import { watchNotificationsData } from '../redux/actions/data/notifications'

import HeaderGradient from '../assets/backgrounds/light/headerGradientBlue';
import HeaderGradientDark from '../assets/backgrounds/dark/headerGradientBlueDark';
import Back from '../assets/others/back.js';
import NoNotificationsAstronaut from '../assets/others/noNotificationAstronaut';
import { colors } from '../helpers/style';
import { screenWidth, screenHeight } from '../helpers/utils'

const mapDispatchToProps = (dispatch) => ({ watchNotificationsData: (userId) => dispatch(watchNotificationsData(userId)) });

const mapStateToProps = (state) => ({
    user: state.auth.user,
    notifications: state.notifications.notificationsData,
    theme: state.theme,
    dark: state.theme.dark
});

function NotificationsScreen({ ...props }) {
    const { user, navigation, theme, dark, notifications, watchNotificationsData } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [notificationsArray, setNotificationsArray] = useState([])

    useEffect(() => {
        setNotificationsArray(notifications);
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    const handleAcceptPress = (id, friendId, userId) => {
        const notificationRef = firebase.firestore().collection('notifications').doc(id);
        const friendRef = firebase.firestore().collection('users').doc(friendId);
        const userRef = firebase.firestore().collection('users').doc(userId);

        friendRef.update({
            friends: firebase.firestore.FieldValue.arrayUnion(userId)
        });

        userRef.update({
            friends: firebase.firestore.FieldValue.arrayUnion(friendId)
        });

        notificationRef.delete().then(() => {
            console.log("Document successfully deleted!");
            watchNotificationsData(user.id)
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    const handleDeclinePress = (id) => {
        const notificationRef = firebase.firestore().collection('notifications').doc(id);

        notificationRef.delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    const Item = ({ username, id, friendId, userId }) => (
        <View style={styles.notificationCard}>
            <Text style={styles.inviteText}><Text style={{ fontWeight: 'bold' }}>{username}</Text> sent you a friend request</Text>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button} onPress={() => handleAcceptPress(id, friendId, userId)}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, borderColor: themeStyle.red }} onPress={() => handleDeclinePress(id)}>
                    <Text style={{ ...styles.buttonText, color: themeStyle.red }}>Decline</Text>
                </TouchableOpacity>
            </View>
            <Divider style={{ height: 2 }} />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item username={item.username} id={item.id} friendId={item.friend} userId={item.user} />
    )

    return (
        <View style={styles.container}>
            {dark ?
                <HeaderGradientDark width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
                :
                <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
            }
            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Notifications</Text>
            </View>

            {notificationsArray.length != 0 ?
                <FlatList
                    data={notificationsArray}
                    renderItem={renderItem}
                    keyExtractor={item => item.username}
                    style={styles.notificationsView}
                />
                :
                <View style={styles.containerNoEvents}>
                    <NoNotificationsAstronaut />
                    <Text style={styles.textNoActivities}>No notifications at the moment.</Text>
                </View>
            }

            <StatusBar style="auto" />
        </View>
    );
}

const styleSheetFactory = (themeStyle) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeStyle.backgroundColor,
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
        paddingTop: 0,
    },
    notificationCard: {
        width: '100%',
        marginTop: '5%',
        height: 110
    },
    inviteText: {
        color: themeStyle.textColor,
        fontSize: 18,
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
        borderColor: themeStyle.green,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themeStyle.green
    },
    containerNoEvents: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: "5%",
        marginLeft: "5%",
        marginBottom: "3%"
    },
    textNoActivities: {
        fontSize: 22,
        color: themeStyle.textColor,
        fontWeight: '200'
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);
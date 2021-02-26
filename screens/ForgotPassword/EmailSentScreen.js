import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Icon from '../../assets/forgotPassword/receiveMail';
import { colors } from '../../helpers/style';
import { useNavigation } from '@react-navigation/native';

const theme = colors.light;

export default function EmailSentScreen() {

    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate("Login");
    }
    const handleResendPress = () => {
        alert("Resend mail!")
    }


    return (
        <View style={styles.container}>

            <View style={styles.introTextDiv}>
                <Text style={styles.introText}>Email has been sent!</Text>
                <Text style={styles.subIntroText}>Please check your inbox and click on the received link to reset you password</Text>
            </View>

            <Icon />

            <View style={styles.sendView}>

                <View style={styles.inputView} />

                <View style={styles.sendTextView}>
                    <TouchableHighlight
                        onPress={handleLoginPress}
                        underlayColor="#DDDDDD"
                        style={{ width: '100%', borderRadius: 20 }}
                    >
                        <View style={styles.sendButton}>
                            <Text style={{ ...styles.sendText, fontSize: 20 }}>Login</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View >
            <View style={styles.redirectView}>
                <Text>Didn’t receive the link?  </Text>
                <Text style={{ color: theme.linkBlue }} onPress={handleResendPress}>Resend</Text>
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
        justifyContent: 'center',
    },
    introTextDiv: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    introText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subIntroText: {
        fontSize: 14,
        width: '90%',
        textAlign: 'center',
        marginTop: '2%',
        color: theme.textGray
    },
    inputView: {
        height: 54,
    },
    input: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        borderRadius: 30,
        height: 50,
        paddingLeft: 55,
    },
    leftIconInput: {
        position: "absolute",
        left: 20,
    },
    sendTextView: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    sendButton: {
        backgroundColor: theme.button,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
        elevation: 5,
    },
    sendText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: theme.backgroundColor,
    },
    sendView: {
        flex: 2,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    redirectView: {
        flexDirection: 'row',
        flex: 0.8,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        width: '100%',
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 30,
        height: 56,
        justifyContent: 'center',
    },
});
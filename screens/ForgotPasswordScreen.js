import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'

import Icon from '../assets/forgotPassword/sendMail';
import MailIcon from '../assets/icons/mailIcon';
import { colors } from '../helpers/style';

const theme = colors.light;

const mapStateToProps = (state) => ({ theme: state.theme });

function ForgotPasswordScreen({ ...props }) {

    const { navigation } = props

    const [email, setEmail] = useState('');

    const handleSendEmail = () => {
        if (email != '') {
            var auth = firebase.auth();
            var emailAddress = email;

            auth.sendPasswordResetEmail(emailAddress).then(function () {
                navigation.navigate('EmailSent')
            }).catch(function (error) {
                alert(error.message)
            });
        } else {
            alert('Please provide an email in the input field!')
        }
    }

    const handleLoginPress = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>

            <View style={styles.introTextDiv}>
                <Text style={styles.introText}>Forgot Your Password?</Text>
                <Text style={styles.subIntroText}>Enter your registerd email below to receive password reset instructions</Text>
            </View>

            <Icon />

            <View style={styles.sendView}>

                <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#E8B7E5', '#D4C3FC', '#5C8DF7']} style={styles.linearGradient}>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder="Email"
                            keyboardType={'email-address'}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={email => setEmail(email)}
                            style={styles.input}
                        />
                        <MailIcon style={styles.leftIconInput} />
                    </View>
                </LinearGradient>

                <View style={styles.sendTextView}>
                    <TouchableHighlight
                        onPress={handleSendEmail}
                        underlayColor="#DDDDDD"
                        style={{ width: '100%', borderRadius: 20 }}
                    >
                        <View style={styles.sendButton}>
                            <Text style={{ ...styles.sendText, fontSize: 20 }}>Send</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View >
            <View style={styles.redirectView}>
                <Text>Remember password?  </Text>
                <Text style={{ color: theme.linkBlue }} onPress={handleLoginPress}>Login</Text>
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
        textAlign: 'center',
        marginTop: '2%',
        color: theme.textGray
    },
    inputView: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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

export default connect(mapStateToProps)(ForgotPasswordScreen);
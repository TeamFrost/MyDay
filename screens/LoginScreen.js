import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Divider } from 'react-native-elements';

import userIcon from '../assets/icons/userIcon';
import lockIcon from '../assets/icons/lockIcon';
import eyeIcon from '../assets/icons/eyeIcon'
import Background from '../assets/backgrounds/loginBackground';
import { colors } from '../helpers/style.js';

const theme = colors.light

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function LoginScreen() {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.container}>
            <Background style={styles.background} width={screenWidth / 0.95} height={screenHeight / 1.37} />
            <View style={styles.loginContainter}>

                <View style={styles.loginTextView}>
                    <Text style={styles.loginText}>Login</Text>
                </View>

                <View style={styles.inputView}>
                    <Icon name="user" size={25} color={theme.textGray} style={styles.leftIconInput} />
                    <TextInput
                        placeholder="Email"
                        keyboardType={'email-address'}
                        value={name}
                        onChangeText={name => setName(name)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputView}>
                    <Icon name="lock" size={25} color={theme.textGray} style={styles.leftIconInput} />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        value={pass}
                        onChangeText={pass => setPass(pass)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.loginTextView}>
                    <TouchableHighlight
                        onPress={() => alert("Apasat")}
                        underlayColor="#DDDDDD"
                        style={{ width: '100%', borderRadius: 20 }}
                    >
                        <View style={styles.loginButton}>
                            <Text style={{ ...styles.loginText, fontSize: 20 }}>Login</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.forgotPassword}>
                    <Text onPress={() => alert("Pass")} style={styles.forgotPasswordText}>Forgot your password?</Text>
                </View>

            </View>

            <View style={styles.bottomViewContainer}>

                <View style={styles.dividerView}>
                    <Divider style={styles.divider} />
                    <Text style={{ padding: 15 }}>or connect with</Text>
                    <Divider style={styles.divider} />
                </View>

                <View style={{ ...styles.dividerView, justifyContent: 'space-around', width: '85%' }}>

                    <Icon.Button name="facebook" backgroundColor="#3b5998" borderRadius={30} onPress={() => alert("Facebook :|")} style={{ width: 150, justifyContent: 'center', elevation: 5 }}>
                        <Text style={{ fontSize: 15, color: theme.backgroundColor }}>
                            Facebook
                        </Text>
                    </Icon.Button>

                    <Icon.Button name="google" backgroundColor="#DB4437" borderRadius={30} onPress={() => alert("Google :|")} style={{ width: 150, justifyContent: 'center', elevation: 5, }}>
                        <Text style={{ fontSize: 15, color: theme.backgroundColor }}>
                            Google
                        </Text>
                    </Icon.Button>

                </View>

                <View style={{ ...styles.dividerView, height: '40%' }}>
                    <Text>Don’t have an account?  </Text>
                    <Text style={{ color: theme.linkBlue }} onPress={() => alert(":{")}>Sign Up</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View >
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
        flexDirection: 'column',
        width: '80%',
        height: screenHeight / 1.7,
        alignSelf: 'center',
        marginTop: '20%',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: theme.backgroundColor,
    },
    inputView: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTextView: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        borderRadius: 30,
        height: 50,
        paddingLeft: 55,
        elevation: 5
    },
    leftIconInput: {
        position: "absolute",
        left: 20,
        elevation: 6
    },
    loginButton: {
        backgroundColor: theme.button,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 20,
        elevation: 5,
    },
    forgotPassword: {
        flex: 0.8,
        justifyContent: 'flex-start',
        marginTop: -20,
    },
    forgotPasswordText: {
        color: theme.backgroundColor,
        textDecorationLine: "underline",
        fontSize: 16
    },

    bottomViewContainer: {
        // backgroundColor: theme.lightViolet,
        flex: 1,
        width: '100%',
        marginTop: '10%'
    },
    divider: {
        backgroundColor: theme.textGray,
        height: 1.5,
        width: '30%',
    },
    dividerView: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
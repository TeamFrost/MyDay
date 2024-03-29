import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { useState, useEffect } from 'react';
import * as Google from 'expo-google-app-auth';
// import * as Facebook from 'expo-facebook';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import { loginUser } from '../redux/actions/auth/auth';
import { loginUserWithGoogle } from '../redux/actions/auth/auth';
// import { loginUserWithFacebook } from '../redux/actions/auth/auth';

import MailIcon from '../assets/icons/mailIcon';
import LockIcon from '../assets/icons/lockIcon';
import EyeIcon from '../assets/icons/eyeIcon'
import Background from '../assets/backgrounds/loginBackground';
import { colors } from '../helpers/style.js';
import { screenWidth, screenHeight } from '../helpers/utils'

const theme = colors.light

const mapStateToProps = (state) => ({
    doneFetching: state.auth.doneFetching,
    isFetching: state.auth.isFetching,
    hasError: state.auth.hasError,
    errorMessage: state.auth.errorMessage,
    user: state.auth.user,
    // theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    loginUserWithGoogle: (googleUser) => dispatch(loginUserWithGoogle(googleUser)),
    // loginUserWithFacebook: (token) => dispatch(loginUserWithFacebook(token))
});

function LoginScreen({ ...props }) {

    const { user, doneFetching, navigation, loginUser, loginUserWithGoogle, loginUserWithFacebook } = props

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [invisible, setInvisible] = useState(true);

    useEffect(() => {
        if (doneFetching) {
            console.log(user)
            if (user != null) {
                navigation.navigate('HomeTabs')
            }
        }
    }, []);

    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                // androidClientId: "YOUR_CLIENT_ID_HERE",
                iosClientId: "YOUR_CLIENT_ID_HERE",
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                loginUserWithGoogle(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    // const signInWithFacebookAsync = async () => {
    //     try {
    //         await Facebook.initializeAsync({
    //             appId: '734453843941009',
    //         });
    //         const {
    //             type,
    //             token,
    //         } = await Facebook.logInWithReadPermissionsAsync({
    //             permissions: ['public_profile'],
    //         });
    //         if (type === 'success') {
    //             console.log(token)
    //             loginUserWithFacebook(token)
    //         } else {
    //             // type === 'cancel'
    //         }
    //     } catch ({ message }) {
    //         alert(`Facebook Login Error: ${message}`);
    //     }
    // }

    const handleLoginPress = () => {
        console.log("Login")
        if (email === '' || pass === '') {
            alert("Please complete all the fields!")
        } else {
            loginUser(email, pass)
        }
    }

    const handleFacebookLoginPress = () => {
        console.log("Facebook login")
        // signInWithFacebookAsync()
    }

    const handleGmailLoginPress = () => {
        console.log("Gmail login")
        signInWithGoogleAsync()
    }

    const handleSignUpPress = () => navigation.navigate("Register")

    const handleForgotLink = () => navigation.navigate("ForgotPasswordStack")


    return (
        <View style={styles.container}>
            <Background style={styles.background} width={screenWidth / 0.90} height={screenHeight / 1.37} />
            <View style={styles.loginContainter}>

                <View style={styles.loginTextView}>
                    <Text style={styles.loginText}>Login</Text>
                </View>

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

                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={invisible}
                        value={pass}
                        onChangeText={pass => setPass(pass)}
                        style={styles.input}
                    />
                    <LockIcon style={styles.leftIconInput} />
                    <EyeIcon onPress={() => setInvisible(!invisible)} style={styles.rightIconInput} />
                </View>

                <View style={styles.loginTextView}>
                    <TouchableHighlight
                        onPress={handleLoginPress}
                        underlayColor="#DDDDDD"
                        style={{ width: '100%', borderRadius: 20 }}
                    >
                        <View style={styles.loginButton}>
                            <Text style={{ ...styles.loginText, fontSize: 20 }}>Login</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.forgotPassword}>
                    <Text onPress={handleForgotLink} style={styles.forgotPasswordText}>Forgot your password?</Text>
                </View>

            </View>

            <View style={styles.bottomViewContainer}>

                <View style={styles.dividerView}>
                    <Divider style={styles.divider} />
                    <Text style={{ padding: 15 }}>or connect with</Text>
                    <Divider style={styles.divider} />
                </View>

                <View style={{ ...styles.dividerView, justifyContent: 'space-around', width: '85%' }}>

                    <Icon.Button name="facebook" backgroundColor="#3b599866" borderRadius={30} disabled="true" onPress={handleFacebookLoginPress} style={styles.socialMediaButton}>
                        <Text style={{ fontSize: 15, color: theme.backgroundColor }}>
                            Facebook
                        </Text>
                    </Icon.Button>

                    <Icon.Button name="google" backgroundColor="#DB4437" borderRadius={30} onPress={handleGmailLoginPress} style={styles.socialMediaButton}>
                        <Text style={{ fontSize: 15, color: theme.backgroundColor }}>
                            Google
                        </Text>
                    </Icon.Button>

                </View>

                <View style={{ ...styles.dividerView, height: '40%' }}>
                    <Text>Don’t have an account?  </Text>
                    <Text style={{ color: theme.linkBlue }} onPress={handleSignUpPress}>Sign Up</Text>
                </View>
            </View>
            <ExpoStatusBar style="auto" />
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
        // elevation: 5
    },
    leftIconInput: {
        position: "absolute",
        left: 20,
        // elevation: 6
    },
    rightIconInput: {
        position: "absolute",
        right: 20,
        // elevation: 6
    },
    loginButton: {
        backgroundColor: theme.button,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
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
    },
    socialMediaButton: {
        width: 150,
        justifyContent: 'center',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

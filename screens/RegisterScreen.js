import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/auth/auth';
import { loginUserWithGoogle } from '../redux/actions/auth/auth';

import UserIcon from '../assets/icons/userIcon';
import LockIcon from '../assets/icons/lockIcon';
import EyeIcon from '../assets/icons/eyeIcon';
import MailIcon from '../assets/icons/mailIcon';
import Background from '../assets/backgrounds/registerBackground';
import { colors } from '../helpers/style.js';



const theme = colors.light

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


const mapStateToProps = (state) => ({
    doneFetching: state.auth.doneFetching,
    isFetching: state.auth.isFetching,
    hasError: state.auth.hasError,
    errorMessage: state.auth.errorMessage,
    user: state.auth.user,
    // theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
    signupUser: (email, password, username, profile) => dispatch(signupUser(email, password, username, profile)),
    loginUserWithGoogle: (googleUser) => dispatch(loginUserWithGoogle(googleUser)),
    // loginUserWithFacebook: (token) => dispatch(loginUserWithFacebook(token))
});


function RegisterScreen({ ...props }) {

    const { user, doneFetching, navigation, signupUser, loginUserWithGoogle, loginUserWithFacebook } = props

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [invisible, setInvisible] = useState(true);

    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                // androidClientId: "YOUR_CLIENT_ID_HERE",
                iosClientId: '26219097559-2gq1ocfsom0tijd104od359ijsoj29t6.apps.googleusercontent.com',
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

    const handleRegisterPress = () => {
        console.log("Register")
        if (email === '' || name === '' || password === '') {
            alert("Please complete all the fields!")
        } else {
            let profile = "F"
            signupUser(email, password, name, profile)
        }
    }

    const handleGmailLoginPress = () => {
        console.log("Gmail login")
        signInWithGoogleAsync()
    }

    const handleLoginPress = () => {
        navigation.navigate("Login");
    }

    useEffect(() => {
        if (doneFetching) {
            console.log(user)
            if (user != null) {
                navigation.navigate('HomeTabs')
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <Background style={styles.background} width={screenWidth / 0.95} height={screenHeight / 1.37} />
            <View style={styles.loginContainter}>

                <View style={styles.loginTextView}>
                    <Text style={styles.loginText}>Register</Text>
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
                        placeholder="Username"
                        keyboardType={'email-address'}
                        autoCapitalize="none"
                        value={name}
                        onChangeText={name => setName(name)}
                        style={styles.input}
                    />
                    <UserIcon style={styles.leftIconInput} />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={invisible}
                        value={password}
                        onChangeText={password => setPassword(password)}
                        style={styles.input}
                    />
                    <LockIcon style={styles.leftIconInput} />
                    <EyeIcon onPress={() => setInvisible(!invisible)} style={styles.rightIconInput} />
                </View>

                <View style={styles.loginTextView}>
                    <TouchableHighlight
                        onPress={handleRegisterPress}
                        underlayColor="#DDDDDD"
                        style={{ width: '100%', borderRadius: 20 }}
                    >
                        <View style={styles.loginButton}>
                            <Text style={{ ...styles.loginText, fontSize: 20 }}>Register</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.forgotPassword}>
                    {/*SpaceGenerator*/}
                </View>

            </View>

            <View style={styles.bottomViewContainer}>

                <View style={styles.dividerView}>
                    <Divider style={styles.divider} />
                    <Text style={{ padding: 15 }}>or connect with</Text>
                    <Divider style={styles.divider} />
                </View>

                <View style={{ ...styles.dividerView, justifyContent: 'space-around', width: '85%' }}>

                    <Icon.Button name="facebook" backgroundColor="#3b5998" borderRadius={30} disabled="true" onPress={() => alert("Facebook :|")} style={{ width: 150, justifyContent: 'center', elevation: 5 }}>
                        <Text style={{ fontSize: 15, color: theme.backgroundColor }}>
                            Facebook
                        </Text>
                    </Icon.Button>

                    <Icon.Button name="google" backgroundColor="#DB4437" borderRadius={30} onPress={handleGmailLoginPress} style={{ width: 150, justifyContent: 'center', elevation: 5, }}>
                        <Text style={{ fontSize: 15, color: theme.backgroundColor }}>
                            Google
                        </Text>
                    </Icon.Button>

                </View>

                <View style={{ ...styles.dividerView, height: '40%' }}>
                    <Text>Already have an account?  </Text>
                    <Text style={{ color: theme.linkBlue }} onPress={handleLoginPress}>Login</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
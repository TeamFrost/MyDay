import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';

import { firebase } from '../../firebase/config'

import HeaderGradient from '../../assets/backgrounds/headerGradientBlue';
import Back from '../../assets/others/back.js';
import LockIcon from '../../assets/icons/lockIcon.js';
import EyeIcon from '../../assets/icons/eyeIcon.js';
import EyeClosedIcon from '../../assets/icons/eyeClosedIcon.js'
import ChangePassword from '../../assets/settings/changePassword.js';
import { colors } from '../../helpers/style';

const theme = colors.light;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function ChangePasswordScreen({ ...props }) {
    const { user, navigation } = props

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [invisible1, setInvisible1] = useState(true);
    const [invisible2, setInvisible2] = useState(true);
    const [invisible3, setInvisible3] = useState(true);

    const changePass = () => {
        const currentUser = firebase.auth().currentUser
        const credential = firebase.auth.EmailAuthProvider.credential(
            firebase.auth().currentUser.email,
            oldPass
        );

        currentUser.reauthenticateWithCredential(credential).then(function () {
            if (newPass === newPassConfirm) {
                currentUser.updatePassword(newPass).then(function () {
                    alert("Success!")
                    setOldPass('')
                    setNewPass('')
                    setNewPassConfirm('')
                }).catch(function (error) {
                    alert(error)
                });
            }
        }).catch(function (error) {
            alert(error)
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={styles.awareScrollView}>
                <HeaderGradient width={screenWidth} height={"22%"} style={{ flex: 1, position: 'absolute' }} />

                <View style={styles.topText}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <View style={styles.backButton}>
                            <Back />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.textTop}>Change Password</Text>
                </View>

                <View style={styles.content}>
                    <ChangePassword />

                    <View style={styles.passwordView}>
                        <View style={styles.passwordField}>
                            <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#E8B7E5', '#D4C3FC', '#5C8DF7']} style={styles.linearGradient}>
                                <View style={styles.inputView}>
                                    <TextInput
                                        placeholder="Curent Password"
                                        autoCapitalize="none"
                                        textContentType="password"
                                        secureTextEntry={invisible1}
                                        value={oldPass}
                                        onChangeText={input => setOldPass(input)}
                                        style={styles.input}
                                    />
                                    <LockIcon style={styles.leftIconInput} />
                                    {invisible1 ?
                                        <EyeClosedIcon onPress={() => setInvisible1(!invisible1)} style={styles.rightIconInput} /> :
                                        <EyeIcon onPress={() => setInvisible1(!invisible1)} style={styles.rightIconInput} />
                                    }
                                </View>
                            </LinearGradient>
                        </View>
                        <View style={styles.passwordField}>
                            <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#E8B7E5', '#D4C3FC', '#5C8DF7']} style={styles.linearGradient}>
                                <View style={styles.inputView}>
                                    <TextInput
                                        placeholder="New Password"
                                        autoCapitalize="none"
                                        textContentType="newPassword"
                                        secureTextEntry={invisible2}
                                        value={newPass}
                                        onChangeText={input => setNewPass(input)}
                                        style={styles.input}
                                    />
                                    <LockIcon style={styles.leftIconInput} />
                                    {invisible2 ?
                                        <EyeClosedIcon onPress={() => setInvisible2(!invisible2)} style={styles.rightIconInput} /> :
                                        <EyeIcon onPress={() => setInvisible2(!invisible2)} style={styles.rightIconInput} />
                                    }
                                </View>
                            </LinearGradient>
                        </View>
                        <View style={styles.passwordField}>
                            <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#E8B7E5', '#D4C3FC', '#5C8DF7']} style={styles.linearGradient}>
                                <View style={styles.inputView}>
                                    <TextInput
                                        placeholder="Confirm New Password"
                                        autoCapitalize="none"
                                        textContentType="password"
                                        secureTextEntry={invisible3}
                                        value={confirmNewPass}
                                        onChangeText={input => setConfirmNewPass(input)}
                                        style={styles.input}
                                    />
                                    <LockIcon style={styles.leftIconInput} />
                                    {invisible3 ?
                                        <EyeClosedIcon onPress={() => setInvisible3(!invisible3)} style={styles.rightIconInput} /> :
                                        <EyeIcon onPress={() => setInvisible3(!invisible3)} style={styles.rightIconInput} />
                                    }
                                </View>
                            </LinearGradient>
                        </View>


                    </View>

                    <View style={styles.sendTextView}>
                        <TouchableHighlight
                            underlayColor="#DDDDDD"
                            style={{ width: '100%', borderRadius: 20 }}
                            onPress={changePass}
                        >
                            <View style={styles.sendButton}>
                                <Text style={{ ...styles.sendText, fontSize: 20 }}>Confirm</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>
            </KeyboardAwareScrollView>
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
        width: '100%',
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
    content: {
        width: '90%',
        height: screenHeight / 1.55,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
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
    linearGradient: {
        width: '100%',
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 30,
        height: 56,
        justifyContent: 'center',
    },
    sendTextView: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    sendButton: {
        backgroundColor: theme.button,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
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
    awareScrollView: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        marginTop: "-3%"
    },
    rightIconInput: {
        position: "absolute",
        right: 20,
    },
    passwordView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    passwordField: {
        width: '90%', margin: 10
    }
});

export default connect(mapStateToProps)(ChangePasswordScreen);
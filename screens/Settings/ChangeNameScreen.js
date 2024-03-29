import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';

import { firebase } from '../../firebase/config'
import { restoreSession } from '../../redux/actions/auth/auth'

import HeaderGradient from '../../assets/backgrounds/light/headerGradientBlue';
import HeaderGradientDark from '../../assets/backgrounds/dark/headerGradientBlueDark';
import UserIcon from '../../assets/icons/userIcon';
import ChangeName from '../../assets/settings/changeName';
import Back from '../../assets/others/back.js';
import { colors } from '../../helpers/style';
import { screenWidth, screenHeight } from '../../helpers/utils'

const mapDispatchToProps = (dispatch) => ({ restoreSession: () => dispatch(restoreSession()) });

const mapStateToProps = (state) => ({
    user: state.auth.user,
    doneFetching: state.auth.doneFetching,
    hasError: state.auth.hasError,
    errorMessage: state.auth.errorMessage,
    theme: state.theme,
    dark: state.theme.dark
});

function ChangeNameScreen({ ...props }) {
    const { user, doneFetching, navigation, theme, dark } = props

    const [username, setUsername] = useState("")

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [newName, setNewName] = useState('')

    useEffect(() => {
        if (user) {
            const userUsername = user.username
            setUsername(userUsername)
        }

        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme, doneFetching])

    const changeName = () => {
        if (user) {
            firebase.firestore().collection('users').doc(user.id)
                .update({
                    username: newName
                })
                .then(function () {
                    restoreSession()
                    setUsername(newName)
                    setNewName('')
                })
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={styles.awareScrollView}>
                {dark ?
                    <HeaderGradientDark width={screenWidth} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
                    :
                    <HeaderGradient width={screenWidth} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
                }

                <View style={styles.topText}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <View style={styles.backButton}>
                            <Back />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.textTop}>Change Name</Text>
                </View>

                <View style={styles.content}>
                    <ChangeName />
                    <Text style={styles.nameText}>Current name: <Text style={styles.username}>{username}</Text></Text>
                    <View style={{ width: '90%' }}>
                        <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#E8B7E5', '#D4C3FC', '#5C8DF7']} style={styles.linearGradient}>
                            <View style={styles.inputView}>
                                <TextInput
                                    placeholder="New username"
                                    placeholderTextColor={themeStyle.textGray}
                                    color={themeStyle.textColor}
                                    onChangeText={name => setNewName(name)}
                                    value={newName}
                                    style={styles.input}
                                />
                                <UserIcon style={styles.leftIconInput} />
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={styles.sendTextView}>
                        <TouchableHighlight
                            underlayColor="#DDDDDD"
                            style={{ width: '100%', borderRadius: 20 }}
                            onPress={changeName}
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

const styleSheetFactory = (themeStyle) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeStyle.backgroundColor,
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
        alignSelf: 'center'
    },
    nameText: {
        fontSize: 22,
        color: themeStyle.textColor
    },
    username: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    inputView: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: themeStyle.backgroundColor,
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
        backgroundColor: themeStyle.button,
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
        color: "white",
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeNameScreen);
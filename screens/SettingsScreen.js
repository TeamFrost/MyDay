import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback, Switch, Linking } from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';

import { logoutUser } from '../redux/actions/auth/auth';
import { changeTheme } from "../redux/actions/colorTheme/colorTheme";

import HeaderGradient from '../assets/backgrounds/light/headerGradientBlue';
import HeaderGradientDark from '../assets/backgrounds/dark/headerGradientBlueDark';
import Back from '../assets/others/back.js';
import RightArrowIcon from '../assets/icons/rightArrowIcon'
import QuizIcon from "../assets/settings/quizIcon"
import LogoutIcon from "../assets/icons/logoutIcon"
import { colors } from '../helpers/style';
import { screenWidth, screenHeight } from '../helpers/utils'

const mapStateToProps = (state) => ({
    doneFetching: state.auth.doneFetching,
    isFetching: state.auth.isFetching,
    hasError: state.auth.hasError,
    errorMessage: state.auth.errorMessage,
    user: state.auth.user,
    theme: state.theme,
    dark: state.theme.dark
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
    changeTheme: (theme) => dispatch(changeTheme(theme))
});

function SettingsScreen({ ...props }) {
    const { user, navigation, theme, dark, changeTheme, doneFetching, logoutUser } = props

    const [googleUser, setGoogleUser] = useState(false)

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [darkMode, setDarkMode] = useState(dark);
    const [pushNoti, setPushNoti] = useState(false);

    useEffect(() => {
        if (user) {
            const google = user.google
            setGoogleUser(google)
        }
        if (doneFetching) {
            if (user === null) {
                navigation.navigate('LoginStack')
            }
        }
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
            setDarkMode(dark)
        }
    }, [theme]);

    const toggleSwitch = (f) => {
        f(previousState => !previousState);
    }

    const toggleSwitchDark = () => darkMode === false ? changeTheme(colors.dark) : changeTheme(colors.light)

    const handleEditProfilePress = () => navigation.navigate("EditProfilePicture")
    const handleChangeNamePress = () => navigation.navigate("ChangeName")
    const handleChangePasswordPress = () => navigation.navigate("ChangePassword")
    const handleTakeQuizPress = () => navigation.navigate("QuizStack")
    const handleCustomizeCategoryPress = () => navigation.navigate("CustomizeCategory")
    const handleAboutAppPress = () => navigation.navigate("AboutApp")
    const handlePrivacyPolicyPress = () => Linking.openURL('https://www.privacypolicies.com/live/3f433032-b9fd-4db7-913c-e90be36e6425')
    const handleTermsAndConditionsPress = () => console.log("Terms and conditions")

    const handleLogoutPress = () => logoutUser()

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
                <Text style={styles.textTop}>Settings</Text>
            </View>

            <View style={styles.categoryView}>
                <Text style={styles.categoryText}>Account Settings</Text>
                <Divider style={styles.divider} />

                <TouchableHighlight
                    onPress={handleEditProfilePress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Edit profile picture</Text>
                        <RightArrowIcon style={{ color: themeStyle.textColor }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleChangeNamePress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Change name</Text>
                        <RightArrowIcon style={{ color: themeStyle.textColor }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleChangePasswordPress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    disabled={googleUser}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={{ ...styles.text, color: googleUser ? themeStyle.textGray : themeStyle.textColor }}>Change password</Text>
                        <RightArrowIcon style={{ color: themeStyle.textColor, opacity: googleUser ? 0 : 1 }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleCustomizeCategoryPress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Customize category options</Text>
                        <RightArrowIcon style={{ color: themeStyle.textColor }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleTakeQuizPress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Take the quiz</Text>
                        <QuizIcon style={{ color: themeStyle.textColor }} />
                    </View>
                </TouchableHighlight>

                <View style={styles.switchView}>
                    <Text style={styles.text}>Push notifications</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Switch
                            value={pushNoti}
                            onValueChange={() => toggleSwitch(setPushNoti)}
                            trackColor={{ false: themeStyle.textGray, true: themeStyle.linkBlue }}
                            ios_backgroundColor={themeStyle.textGray}
                            thumbColor="#fff"
                        />
                    </View>
                </View>

                <View style={styles.switchView}>
                    <Text style={styles.text}>Dark mode</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Switch
                            value={darkMode}
                            onValueChange={() => toggleSwitchDark()}
                            trackColor={{ false: themeStyle.textGray, true: themeStyle.linkBlue }}
                            ios_backgroundColor={themeStyle.textGray}
                            thumbColor="#fff"
                        />
                    </View>
                </View>

                <TouchableHighlight
                    onPress={handleLogoutPress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={{ ...styles.text, color: themeStyle.red, fontWeight: "bold" }}>Logout</Text>
                        <LogoutIcon />
                    </View>
                </TouchableHighlight>

            </View>

            <View style={{ ...styles.categoryView, flex: 2, marginTop: '5%' }}>
                <Text style={styles.categoryText}>More</Text>
                <Divider style={styles.divider} />

                <TouchableHighlight
                    onPress={handleAboutAppPress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>About app</Text>
                        <RightArrowIcon style={{ color: themeStyle.textColor }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handlePrivacyPolicyPress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Privacy policy</Text>
                        <RightArrowIcon style={{ color: themeStyle.textColor }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleTermsAndConditionsPress}
                    underlayColor={dark ? "#323232" : "#F6F6F6"}
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Terms and conditions</Text>
                        <RightArrowIcon style={{ color: themeStyle.textColor }} />
                    </View>
                </TouchableHighlight>

            </View>

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
    categoryView: {
        flex: 4.2,
        width: "90%",
    },
    categoryText: {
        fontSize: 20,
        fontWeight: "bold",
        color: themeStyle.linkBlue
    },
    divider: {
        marginTop: "1%",
        backgroundColor: themeStyle.linkBlue,
        height: 1
    },
    touch: {
        width: '98%',
        height: 30,
        marginTop: "3%",
    },
    touchView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    switchView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        width: '105%',
        height: 30,
        marginTop: "3%",
    },
    text: {
        flex: 4.2,
        fontSize: 18,
        color: themeStyle.textColor
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
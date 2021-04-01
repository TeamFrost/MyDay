import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback, Dimensions, Switch } from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';

import { logoutUser } from '../redux/actions/auth/auth';

import HeaderGradient from '../assets/backgrounds/headerGradientBlue';
import Back from '../assets/others/back.js';
import RightArrowIcon from '../assets/icons/rightArrowIcon'
import QuizIcon from "../assets/settings/quizIcon"
import LogoutIcon from "../assets/icons/logoutIcon"
import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapStateToProps = (state) => ({
    doneFetching: state.auth.doneFetching,
    isFetching: state.auth.isFetching,
    hasError: state.auth.hasError,
    errorMessage: state.auth.errorMessage,
    user: state.auth.user,
    theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
});

function SettingsScreen({ ...props }) {
    const { user, navigation, doneFetching, logoutUser } = props
    const [darkMode, setDarkMode] = useState(false);
    const [pushNoti, setPushNoti] = useState(false);

    const toggleSwitch = (f) => {
        f(previousState => !previousState);
    }

    const handleEditProfilePress = () => navigation.navigate("EditProfilePicture")
    const handleChangeNamePress = () => navigation.navigate("ChangeName")
    const handleChangePasswordPress = () => navigation.navigate("ChangePassword")
    const handleTakeQuizPress = () => navigation.navigate("Quiz")
    const handleCustomizeCategoryPress = () => navigation.navigate("CustomizeCategory")
    const handleAboutAppPress = () => navigation.navigate("AboutApp")
    const handlePrivacyPolicyPress = () => navigation.navigate("PrivacyPolicy")
    const handleTermsAndConditionsPress = () => navigation.navigate("TermsAndConditions")

    const handleLogoutPress = () => {
        console.log("Logout")
        logoutUser()
    }

    useEffect(() => {
        if (doneFetching) {
            if (user === null) {
                navigation.navigate('LoginStack')
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />

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
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Edit profile picture</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleChangeNamePress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Change name</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleChangePasswordPress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Change password</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleCustomizeCategoryPress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Customize category options</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleTakeQuizPress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Take the quiz</Text>
                        <QuizIcon />
                    </View>
                </TouchableHighlight>

                <View style={styles.switchView}>
                    <Text style={styles.text}>Push notifications</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Switch
                            value={pushNoti}
                            onValueChange={() => toggleSwitch(setPushNoti)}
                            trackColor={{ false: theme.textGray, true: theme.linkBlue }}
                            ios_backgroundColor={theme.textGray}
                            thumbColor="#fff"
                        />
                    </View>
                </View>

                <View style={styles.switchView}>
                    <Text style={styles.text}>Dark mode</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Switch
                            value={darkMode}
                            onValueChange={() => toggleSwitch(setDarkMode)}
                            trackColor={{ false: theme.textGray, true: theme.linkBlue }}
                            ios_backgroundColor={theme.textGray}
                            thumbColor="#fff"
                        />
                    </View>
                </View>

                <TouchableHighlight
                    onPress={handleLogoutPress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={{ ...styles.text, color: theme.red, fontWeight: "bold" }}>Logout</Text>
                        <LogoutIcon />
                    </View>
                </TouchableHighlight>

            </View>

            <View style={{ ...styles.categoryView, flex: 2, marginTop: '5%' }}>
                <Text style={styles.categoryText}>More</Text>
                <Divider style={styles.divider} />

                <TouchableHighlight
                    onPress={handleAboutAppPress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>About app</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handlePrivacyPolicyPress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Privacy policy</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={handleTermsAndConditionsPress}
                    underlayColor="#F6F6F6"
                    style={styles.touch}
                >
                    <View style={styles.touchView}>
                        <Text style={styles.text}>Terms and conditions</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>

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
        color: theme.linkBlue
    },
    divider: {
        marginTop: "1%",
        backgroundColor: theme.linkBlue,
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
        fontSize: 18
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
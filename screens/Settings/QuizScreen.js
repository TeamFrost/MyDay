import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import Activity from "../../assets/quiz/activity.js";
import Workout from "../../assets/quiz/workout.js";
import HeaderGradient from '../../assets/backgrounds/headerGradientBlue';
import Back from '../../assets/others/back.js';
import { colors } from '../../helpers/style';
import { screenWidth, screenHeight } from '../../helpers/utils'

const mapStateToProps = (state) => ({ theme: state.theme });

function QuizScreen({ ...props }) {
    const { navigation, theme } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    useEffect(() => {
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Quizzes</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Workout width={screenWidth / 100 * 89} height={screenHeight / 10 * 2.27} />
                    <Text style={styles.quizTextTitle}>Find out when is the best time to workout</Text>
                    <Text style={styles.quizzRedirect} onPress={() => navigation.navigate("WorkoutQuiz")}>Take the quiz now</Text>
                </View>
                <View style={styles.card}>
                    <Activity width={screenWidth / 100 * 89} height={screenHeight / 10 * 2.27} />
                    <Text style={styles.quizTextTitle}>Don’t know what what to do? </Text>
                    <Text style={styles.quizzRedirect} onPress={() => navigation.navigate("ActivityQuiz")}>Take the quiz now</Text>
                </View>
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
        justifyContent: 'space-around',
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
    card: {
        width: "90%",
        alignSelf: 'center',
        height: '42%',
        borderColor: themeStyle.violet,
        borderWidth: 2
    },
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        width: '100%',
    },
    quizTextTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: themeStyle.linkBlue,
        textAlign: 'center',
        marginTop: 2
    },
    quizzRedirect: {
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
});

export default connect(mapStateToProps)(QuizScreen);
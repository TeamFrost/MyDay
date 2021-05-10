import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import HeaderGradient from '../../assets/backgrounds/light/headerGradientBlue';
import HeaderGradientDark from '../../assets/backgrounds/dark/headerGradientBlueDark';
import Back from '../../assets/others/back.js';
import Workout from "../../assets/quiz/workoutWithoutBackground";
import { colors } from '../../helpers/style';
import { screenWidth, screenHeight } from '../../helpers/utils'

const mapStateToProps = (state) => ({
    theme: state.theme,
    dark: state.theme.dark
});

function WorkoutResultScreen({ ...props }) {
    const { navigation, theme, dark } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [result, setResult] = useState("")

    useEffect(() => {
        const res = props.route.params.conclusion
        setResult(res)

        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    return (
        <View style={styles.container}>
            {dark ?
                <HeaderGradientDark width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
                :
                <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
            }

            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Quiz")}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Workout Result</Text>
            </View>

            <Workout width={screenWidth / 100 * 89} height={screenHeight / 10 * 2.27} />
            <Text style={styles.textResult}>{result}</Text>

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
    textResult: {
        color: themeStyle.textColor
    }
});

export default connect(mapStateToProps)(WorkoutResultScreen);
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import HeaderGradient from '../../assets/backgrounds/light/headerGradientBlue';
import HeaderGradientDark from '../../assets/backgrounds/dark/headerGradientBlueDark';
import Back from '../../assets/others/back.js';
import Activity from "../../assets/quiz/activityWithoutBackground";
import { colors } from '../../helpers/style';
import { screenWidth, screenHeight } from '../../helpers/utils'

const mapStateToProps = (state) => ({
    theme: state.theme,
    dark: state.theme.dark
});

function ActivityResultScreen({ ...props }) {
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

    const handleActivityPress = () => {
        navigation.navigate("CreateActivity")
    }
    const handleHomePress = () => {
        navigation.navigate("HomeStack")
    }

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
                <Text style={styles.textTop}>Activity Result</Text>
            </View>

            <View style={styles.result}>
                <Activity width={screenWidth / 100 * 89} height={screenHeight / 10 * 2.27} style={{ marginTop: '5%' }} />
                <Text style={styles.textResult}>{result}</Text>
                <View style={styles.infoTextDiv}>
                    <Text style={styles.infoText}>This is just a suggestion based on your answers.</Text>
                    <Text style={styles.infoText}>You can add this activity by pressing the "Go to Activities" button</Text>
                </View>
            </View>

            <View style={{ ...styles.sendTextView, paddingTop: 25 }}>
                <TouchableHighlight
                    underlayColor="#DDDDDD"
                    style={{ width: '100%', borderRadius: 20 }}
                    onPress={handleHomePress}
                >
                    <View style={{ ...styles.sendButton, backgroundColor: themeStyle.textGrayDark }}>
                        <Text style={styles.sendText}>Home</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.sendTextView}>
                <TouchableHighlight
                    underlayColor="#DDDDDD"
                    style={{ width: '100%', borderRadius: 20 }}
                    onPress={handleActivityPress}
                >
                    <View style={styles.sendButton}>
                        <Text style={styles.sendText}>Go to Activities</Text>
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
        color: themeStyle.textColor,
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: '5%',
    },
    result: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    infoTextDiv: {
        width: '90%',
        marginTop: '5%'
    },
    infoText: {
        color: themeStyle.textColor,
        textAlign: 'center'
    },
    sendTextView: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
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
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
    },
});
export default connect(mapStateToProps)(ActivityResultScreen);
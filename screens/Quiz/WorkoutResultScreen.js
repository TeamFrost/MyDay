import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import HeaderGradient from '../../assets/backgrounds/headerGradientBlue';
import Back from '../../assets/others/back.js';
import Workout from "../../assets/quiz/workoutWithoutBackground";
import { colors } from '../../helpers/style';

const theme = colors.light;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const mapStateToProps = (state) => ({ theme: state.theme });

function WorkoutResultScreen({ ...props }) {
    const { navigation } = props
    const [result, setResult] = useState("")

    useEffect(() => {
        const res = props.route.params.conclusion
        setResult(res)
    }, [])

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Quiz")}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Workout Result</Text>
            </View>

            <Workout width={screenWidth / 100 * 89} height={screenHeight / 10 * 2.27} />
            <Text>{result}</Text>

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
});

export default connect(mapStateToProps)(WorkoutResultScreen);
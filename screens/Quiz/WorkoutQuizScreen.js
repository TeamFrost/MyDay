import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { forwardChain } from '../../helpers/data/forwardChain'

import RadioButtonActivity from '../../screens/Components/RadioButtonActivity'
import HeaderGradient from '../../assets/backgrounds/headerGradientBlue';
import Back from '../../assets/others/back.js';
import { colors } from '../../helpers/style';

const theme = colors.light;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const mapStateToProps = (state) => ({ theme: state.theme });

function WorkoutQuizScreen({ ...props }) {
    const { user, navigation } = props

    const [occurrence, setOccurrence] = useState("");
    const [noTime, setNoTime] = useState("");
    const [reason, setReason] = useState("");
    const [duration, setDuration] = useState("");

    let premises = [
        { attribute: 'category', value: 'sport' },
        { attribute: 'occurrence', value: occurrence },
        { attribute: 'no_time', value: noTime },
        { attribute: 'reason', value: reason },
        { attribute: 'duration', value: duration }
    ];

    const handleSubmitPress = () => {
        const res = forwardChain(premises)
        navigation.navigate("WorkoutResult", { conclusion: res })
    }

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Workout Quiz</Text>
            </View>

            <View style={styles.quizView}>

                <Text style={styles.question}>1. How many times a week do you want to workout?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setOccurrence("1-2")}>
                        <RadioButtonActivity selected={occurrence === "1-2" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>1-2</Text>

                    <TouchableOpacity onPress={() => setOccurrence("3-4")}>
                        <RadioButtonActivity selected={occurrence === "3-4" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>3-4</Text>

                    <TouchableOpacity onPress={() => setOccurrence("5+")}>
                        <RadioButtonActivity selected={occurrence === "5+" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>5+</Text>
                </View>

                <Text style={styles.question}>2. When is the worst time for you for sport activities?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setNoTime("morning")}>
                        <RadioButtonActivity selected={noTime === "morning" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>morning</Text>

                    <TouchableOpacity onPress={() => setNoTime("afternoon")}>
                        <RadioButtonActivity selected={noTime === "afternoon" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>afternoon</Text>

                    <TouchableOpacity onPress={() => setNoTime("evening")}>
                        <RadioButtonActivity selected={noTime === "evening" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>evening</Text>
                </View>

                <Text style={styles.question}>3. Why do you want to work out?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setReason("training")}>
                        <RadioButtonActivity selected={reason === "training" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>training</Text>

                    <TouchableOpacity onPress={() => setReason("enjoy")}>
                        <RadioButtonActivity selected={reason === "enjoy" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>enjoyment</Text>

                    <TouchableOpacity onPress={() => setReason("sleep better")}>
                        <RadioButtonActivity selected={reason === "sleep better" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>sleep better</Text>
                </View>

                <Text style={styles.question}>4. How much time would want to spend?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setDuration("short")}>
                        <RadioButtonActivity selected={duration === "short" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>short</Text>

                    <TouchableOpacity onPress={() => setDuration("medium")}>
                        <RadioButtonActivity selected={duration === "medium" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>medium</Text>

                    <TouchableOpacity onPress={() => setDuration("long")}>
                        <RadioButtonActivity selected={duration === "long" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>long</Text>
                </View>

                <View style={styles.sendTextView}>
                    <TouchableHighlight
                        underlayColor="#DDDDDD"
                        style={{ width: '100%', borderRadius: 20 }}
                        onPress={handleSubmitPress}
                    >
                        <View style={styles.sendButton}>
                            <Text style={styles.sendText}>Submit</Text>
                        </View>
                    </TouchableHighlight>
                </View>
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
    quizView: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-evenly'
    },
    question: {
        fontSize: 20,
    },
    radioButtonDiv: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        width: '100%',
    },
    textRadioButton: {
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: "-2%",
    },
    sendTextView: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
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
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.backgroundColor,
    },
    sendView: {
        flex: 2,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default connect(mapStateToProps)(WorkoutQuizScreen);
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { forwardChain } from '../../helpers/data/forwardChain'

import RadioButtonActivity from '../../screens/Components/RadioButtonActivity'
import HeaderGradient from '../../assets/backgrounds/headerGradientBlue';
import Back from '../../assets/others/back.js';
import { colors } from '../../helpers/style';
import { screenWidth, screenHeight } from '../../helpers/utils'

const mapStateToProps = (state) => ({ theme: state.theme });

function ActivityQuizScreen({ ...props }) {
    const { navigation, theme } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [alone, setAlone] = useState("");
    const [relaxing, setRelaxing] = useState("");
    const [inside, setInside] = useState("");
    const [equipment, setEquipment] = useState("");

    let premises = [
        { attribute: 'category', value: 'lifestyle' },
        { attribute: 'alone', value: alone },
        { attribute: 'relaxing', value: relaxing },
        { attribute: 'inside', value: inside },
        { attribute: 'equipment', value: equipment }
    ];

    useEffect(() => {
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    const handleSubmitPress = () => {
        const res = forwardChain(premises)
        navigation.navigate("ActivityResult", { conclusion: res })
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
                <Text style={styles.textTop}>Activity Quiz</Text>
            </View>

            <View style={styles.quizView}>

                <Text style={styles.question}>1. Do you want to do something alone?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setAlone("yes")}>
                        <RadioButtonActivity selected={alone === "yes" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>yes</Text>

                    <TouchableOpacity onPress={() => setAlone("no")}>
                        <RadioButtonActivity selected={alone === "no" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>no</Text>

                </View>

                <Text style={styles.question}>2. The activity should be a relaxing one?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setRelaxing("yes")}>
                        <RadioButtonActivity selected={relaxing === "yes" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>yes</Text>

                    <TouchableOpacity onPress={() => setRelaxing("no")}>
                        <RadioButtonActivity selected={relaxing === "no" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>no</Text>
                </View>

                <Text style={styles.question}>3. Do you want to do something indoors?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setInside("yes")}>
                        <RadioButtonActivity selected={inside === "yes" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>yes</Text>

                    <TouchableOpacity onPress={() => setInside("no")}>
                        <RadioButtonActivity selected={inside === "no" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>no</Text>
                </View>

                <Text style={styles.question}>4. Should it require special equipment?</Text>
                <View style={styles.radioButtonDiv}>
                    <TouchableOpacity onPress={() => setEquipment("yes")}>
                        <RadioButtonActivity selected={equipment === "yes" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>yes</Text>

                    <TouchableOpacity onPress={() => setEquipment("no")}>
                        <RadioButtonActivity selected={equipment === "no" ? true : false} />
                    </TouchableOpacity>
                    <Text style={styles.textRadioButton}>no</Text>
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
        color: themeStyle.backgroundColor,
    },
    sendView: {
        flex: 2,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default connect(mapStateToProps)(ActivityQuizScreen);
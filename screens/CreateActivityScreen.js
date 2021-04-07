import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';

import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import Back from '../assets/others/back.js';
import AddPerson from '../assets/others/addPerson.js';
import FormClock from '../assets/others/formClock.js';
import FormMap from '../assets/others/formMap.js';
import RadioButtonActivity from '../screens/Components/RadioButtonActivity'

import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function CreateActivityScreen({ ...props }) {

    const { user, navigation } = props

    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [category, setCategory] = useState("");
    const [optionSelect, setOptionSelect] = useState(1);
    const [optionVisibility, setOptionVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    console.log(selectedDate)

    const handleCategoryChange = (category, option1, option2, option3, option4) => {
        setOptionVisibility(true);
        setCategory(category);
        setOption1(option1);
        setOption2(option2);
        setOption3(option3);
        setOption4(option4);
        setOptionSelect(1);
        console.log(category)
    }

    const handleCategoryPress = () => (
        <View style={{ height: screenHeight / 7, width: "90%", alignSelf: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Options</Text>

            <View style={{ ...styles.radioButtonsView, marginTop: 10, }}>
                <View style={{ ...styles.radioButtonsView, paddingLeft: 10 }}>
                    <TouchableOpacity onPress={() => setOptionSelect(1)}>
                        <RadioButtonActivity selected={optionSelect == 1 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option1}</Text>
                </View>
                <View style={styles.radioButtonsView}>
                    <TouchableOpacity onPress={() => setOptionSelect(2)}>
                        <RadioButtonActivity selected={optionSelect == 2 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option2}</Text>
                </View>
            </View>
            <View style={styles.radioButtonsView}>
                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
                    <TouchableOpacity onPress={() => setOptionSelect(3)}>
                        <RadioButtonActivity selected={optionSelect == 3 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option3}</Text>
                </View>
                <View style={styles.radioButtonsView}>
                    <TouchableOpacity onPress={() => setOptionSelect(4)}>
                        <RadioButtonActivity selected={optionSelect == 4 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option4}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Create a new activity</Text>
            </View>
            <KeyboardAwareScrollView style={styles.awareScrollView}>

                <DatePicker
                    onSelectedChange={date => setSelectedDate(date)}
                />
                <View style={styles.taskTitleDiv}>
                    <View style={styles.dividerTaskTitle}>
                        <TextInput placeholder="Task Title" placeholderTextColor={theme.textColor} style={{ fontSize: 22 }}></TextInput>
                    </View>
                    <TextInput placeholder="Add your task details here" multiline style={styles.detailsText}></TextInput>

                </View>
                <View style={{ ...styles.taskTitleDiv, height: screenHeight / 3.5, justifyContent: 'flex-start', }}>

                    <View style={styles.card}>
                        <View style={styles.cardIcon}>
                            <FormClock />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.linkBlue }} onPress={() => alert("da")}>Today</Text>
                            <Text style={{ fontSize: 16 }}>10:00 - 11:30</Text>
                            <Text style={{ fontSize: 12 }}>Just Once</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.card, backgroundColor: theme.cardLightBlue }}>
                        <View style={styles.cardIcon}>
                            <FormMap />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.linkBlue }} onPress={() => alert("da")}>Location</Text>
                            <Text style={{ fontSize: 16 }}>Str. 1 Decembrie, nr. 18</Text>
                        </View>
                    </View>

                </View>

                <View style={{ ...styles.taskTitleDiv, justifyContent: 'space-around', height: screenHeight / 8.5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingRight: 10 }}>Add People</Text>
                        <TouchableHighlight onPress={() => alert("da")} underlayColor={theme.textGray}>
                            <AddPerson />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.avatar} />
                        <View style={{ ...styles.avatar, backgroundColor: 'red', marginLeft: -10 }} />
                        <View style={{ ...styles.avatar, backgroundColor: 'pink', marginLeft: -10 }} />
                    </View>
                </View>

                <View style={{ ...styles.taskTitleDiv, justifyContent: 'flex-start', height: screenHeight / 6, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Category</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-around', width: '100%' }}>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'University' ? theme.linkBlue : theme.cardLightViolet }} underlayColor={theme.linkBlue} onPress={() => handleCategoryChange("University", "Lecture", "Exam", "Laboratory", "Test")}><Text style={{ ...styles.textCategoryButton, color: category === 'University' ? theme.backgroundColor : theme.textColor }}>University</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Work' ? theme.linkBlue : theme.cardLightViolet }} underlayColor={theme.linkBlue} onPress={() => handleCategoryChange("Work", "Meeting", "Deadline", "Interview", "Other")}><Text style={{ ...styles.textCategoryButton, color: category === 'Work' ? theme.backgroundColor : theme.textColor }}>Work</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Lifestyle' ? theme.linkBlue : theme.cardLightViolet }} underlayColor={theme.linkBlue} onPress={() => handleCategoryChange("Lifestyle", "Birthday", "Date", "Freetime", "Other")}><Text style={{ ...styles.textCategoryButton, color: category === 'Lifestyle' ? theme.backgroundColor : theme.textColor }}>Lifestyle</Text></TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-around', width: '100%' }}>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Sport' ? theme.linkBlue : theme.cardLightViolet }} underlayColor={theme.linkBlue} onPress={() => handleCategoryChange("Sport", "1", "2", "3", "4")}><Text style={{ ...styles.textCategoryButton, color: category === 'Sport' ? theme.backgroundColor : theme.textColor }}>Sport</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Shopping' ? theme.linkBlue : theme.cardLightViolet }} underlayColor={theme.linkBlue} onPress={() => handleCategoryChange("Shopping", "1", "2", "3", "4")}><Text style={{ ...styles.textCategoryButton, color: category === 'Shopping' ? theme.backgroundColor : theme.textColor }}>Shopping</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Holiday' ? theme.linkBlue : theme.cardLightViolet }} underlayColor={theme.linkBlue} onPress={() => handleCategoryChange("Holiday", "1", "2", "3", "4")}><Text style={{ ...styles.textCategoryButton, color: category === 'Holiday' ? theme.backgroundColor : theme.textColor }}>Holiday</Text></TouchableHighlight>
                    </View>
                </View>
                {optionVisibility ? handleCategoryPress() : null}
                <View style={{ padding: 20 }}>
                    <TouchableHighlight style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Create new activity</Text>
                    </TouchableHighlight>
                </View>
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    awareScrollView: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        marginTop: "-3%",
    },
    topText: {
        width: '100%',
        height: screenHeight / 4.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTop: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold"
    },
    backButton: {
        position: 'absolute',
        top: '25%',
        left: '5%'
    },
    taskTitleDiv: {
        flex: 1,
        width: '90%',
        alignItems: 'flex-start',
        height: screenHeight / 9,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    dividerTaskTitle: {
        borderLeftWidth: 3,
        paddingLeft: 10
    },
    detailsText: {
        fontSize: 18,
        paddingLeft: 13,
        paddingTop: 10,
        color: theme.textGrayDark
    },
    card: {
        width: '100%',
        height: 100,
        borderRadius: 20,
        backgroundColor: theme.cardLightViolet,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%'
    },
    cardIcon: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12,
        marginLeft: '5%',
        marginRight: '5%'
    },
    avatar: {
        height: 40,
        width: 40,
        backgroundColor: 'orange',
        borderRadius: 20
    },
    categoryButton: {
        padding: 8,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10
    },
    textCategoryButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    radioButtonsView: {
        flexDirection: 'row',
        flex: 1
    },
    submitButton: {
        alignSelf: 'center',
        width: '90%',
        height: 50,
        backgroundColor: theme.button,
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.backgroundColor
    }
});

export default connect(mapStateToProps)(CreateActivityScreen);
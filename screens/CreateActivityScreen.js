import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';

import { watchEventsData } from '../redux/actions/data/events'
import { firebase } from '../firebase/config'

import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import Back from '../assets/others/back.js';
import AddPerson from '../assets/others/addPerson.js';
import FormClock from '../assets/others/formClock.js';
import FormMap from '../assets/others/formMap.js';
import ExpandLessIcon from '../assets/icons/expandLessIcon.js';
import ExpandMoreIcon from '../assets/icons/expandMoreIcon.js';
import RadioButtonActivity from '../screens/Components/RadioButtonActivity'

import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapDispatchToProps = (dispatch) => ({ watchEventsData: (userId) => dispatch(watchEventsData(userId)) });

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function CreateActivityScreen({ ...props }) {

    const { user, navigation } = props

    const today = moment().format('YYYY-MM-DD');
    const fancyToday = moment().format("dddd, DD MMMM");
    const timeNow = moment().format('HH:mm');
    const timeAfterOneHour = moment().add(1, 'hours').format('HH:mm');

    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [location, setLocation] = useState("")
    const [friends, setFriends] = useState([])

    const [datePicker, setDatePicker] = useState(false);
    const [startTimePicker, setStartTimePicker] = useState(false);
    const [endTimePicker, setEndTimePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(today);
    const [showDate, setShowDate] = useState(fancyToday)
    const [startTime, setStartTime] = useState(timeNow);
    const [endTime, setEndTime] = useState(timeAfterOneHour);

    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [category, setCategory] = useState("");
    const [option, setOption] = useState("")
    const [optionSelect, setOptionSelect] = useState(1);
    const [optionVisibility, setOptionVisibility] = useState(false);

    const handleCategoryChange = (category, option1, option2, option3, option4) => {
        setOptionVisibility(true);
        setCategory(category);
        setOption1(option1);
        setOption2(option2);
        setOption3(option3);
        setOption4(option4);
        setOptionSelect(1);
    }

    const handleCategoryPress = () => (
        <View style={{ height: screenHeight / 7, width: "90%", alignSelf: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Options</Text>

            <View style={{ ...styles.radioButtonsView, marginTop: 10, }}>
                <View style={{ ...styles.radioButtonsView, paddingLeft: 10 }}>
                    <TouchableOpacity onPress={() => {
                        setOptionSelect(1)
                        setOption(option1)
                    }}>
                        <RadioButtonActivity selected={optionSelect == 1 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option1}</Text>
                </View>
                <View style={styles.radioButtonsView}>
                    <TouchableOpacity onPress={() => {
                        setOptionSelect(2)
                        setOption(option2)
                    }}>
                        <RadioButtonActivity selected={optionSelect == 2 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option2}</Text>
                </View>
            </View>
            <View style={styles.radioButtonsView}>
                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
                    <TouchableOpacity onPress={() => {
                        setOptionSelect(3)
                        setOption(option3)
                    }}>
                        <RadioButtonActivity selected={optionSelect == 3 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option3}</Text>
                </View>
                <View style={styles.radioButtonsView}>
                    <TouchableOpacity onPress={() => {
                        setOptionSelect(4)
                        setOption(option4)
                    }}>
                        <RadioButtonActivity selected={optionSelect == 4 ? true : false} />
                    </TouchableOpacity>
                    <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>{option4}</Text>
                </View>
            </View>
        </View>
    );

    const handleDatePickerPress = () => setDatePicker((value) => !value);
    const handleStartTimePickerPress = () => setStartTimePicker((value) => !value);
    const handleEndTimePickerPress = () => setEndTimePicker((value) => !value);

    const showPicker = () => {
        return (
            <View style={{ width: '100%', height: screenHeight / 5 * 2.1 }}>
                <DatePicker
                    mode='calendar'
                    minimumDate={today}
                    current={today}
                    options={{ mainColor: theme.violet }}
                    onSelectedChange={date => {
                        setSelectedDate(date)
                        setShowDate(moment(new Date(date)).format("dddd, DD MMMM"))
                    }}
                />
            </View>
        )
    }

    const showStartTimePicker = () => {
        return (
            <View style={{ width: '100%', height: screenHeight / 5 * 2.1 }}>
                <DatePicker
                    mode='time'
                    options={{ mainColor: theme.violet }}
                    onTimeChange={selectedTime => {
                        setStartTime(selectedTime)
                        setStartTimePicker()
                    }}
                />
            </View>
        )

    }

    const showEndTimePicker = () => {
        return (
            <View style={{ width: '100%', height: screenHeight / 5 * 2.1 }}>
                <DatePicker
                    mode='time'
                    options={{ mainColor: theme.violet }}
                    onTimeChange={selectedTime => {
                        setEndTime(selectedTime)
                        setEndTimePicker()
                    }}
                />
            </View>
        )
    }

    let check = true;

    const handleCreateNewActivityPress = () => {
        if ((title === '') || (details === '') || (category === '') || (option === '') || (selectedDate === "") || (startTime === '') || (endTime === '') || (location === '')) {
            check = false
            alert("Toate câmpurile trebuie completate!")
        }

        let date = moment(new Date(selectedDate)).format("YYYY-MM-DD")

        if (check === true) {

            const data = {
                title: title,
                details: details,
                date: date,
                startTime: startTime,
                endTime: endTime,
                location: location,
                friends: friends,
                category: category,
                option: option
            }

            const reportRef = firebase.firestore().collection('events').doc(user.id).collection('sub_events');
            reportRef.add(data)
                .then(() => {
                    watchEventsData(user.id)
                    navigation.goBack()
                }
                )
                .catch(function (error) {
                    alert(error)
                });

        }
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
                <Text style={styles.textTop}>Create a new activity</Text>
            </View>
            <KeyboardAwareScrollView style={styles.awareScrollView}>

                <View style={styles.taskTitleDiv}>
                    <View style={styles.dividerTaskTitle}>
                        <TextInput
                            placeholder="Task Title"
                            placeholderTextColor={theme.textColor}
                            style={{ fontSize: 22 }}
                            onChangeText={text => setTitle(text)}
                            value={title}
                        />
                    </View>
                    <TextInput
                        placeholder="Add your task details here"
                        multiline
                        style={styles.detailsText}
                        onChangeText={text => setDetails(text)}
                        value={details}
                    />
                </View>
                <View style={{ ...styles.taskTitleDiv, height: datePicker || startTimePicker || endTimePicker ? screenHeight / 1.35 : screenHeight / 3.5, justifyContent: 'flex-start', }}>

                    <View style={styles.card}>
                        <View style={styles.cardIcon}>
                            <FormClock />
                        </View>
                        <View style={{ flexDirection: 'column', width: '60%' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.linkBlue }}>{showDate}</Text>
                            <Text style={{ fontSize: 18 }} onPress={handleStartTimePickerPress}>{startTime}</Text>
                            <Text style={{ fontSize: 16, color: theme.textGrayDark }} onPress={handleEndTimePickerPress}>{endTime}</Text>
                        </View>
                        <TouchableOpacity onPress={handleDatePickerPress}>
                            {datePicker ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </TouchableOpacity>
                    </View>

                    {datePicker ? showPicker() : null}
                    {startTimePicker ? showStartTimePicker() : null}
                    {endTimePicker ? showEndTimePicker() : null}

                    <View style={{ ...styles.card, backgroundColor: theme.cardLightBlue }}>
                        <View style={styles.cardIcon}>
                            <FormMap />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: theme.linkBlue }} onPress={() => alert("da")}>Location</Text>
                            <TextInput
                                placeholder="Location"
                                placeholderTextColor={theme.textColor}
                                style={{ fontSize: 16 }}
                                onChangeText={text => setLocation(text)}
                                value={location}
                            />
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
                    <TouchableHighlight style={styles.submitButton} onPress={handleCreateNewActivityPress}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivityScreen);
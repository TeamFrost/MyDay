import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'
import { watchGoalsData } from '../redux/actions/data/goals'

import HeaderGradient from '../assets/backgrounds/light/headerGradientPink';
import HeaderGradientDark from '../assets/backgrounds/dark/headerGradientPinkDark';
import Back from '../assets/others/back.js';
import FormClock from '../assets/others/formClock.js';
import RadioButtonActivity from '../screens/Components/RadioButtonActivity'

import ExpandLessIcon from '../assets/icons/expandLessIcon.js';
import ExpandMoreIcon from '../assets/icons/expandMoreIcon.js';
import { colors } from '../helpers/style';
import { screenWidth, screenHeight } from '../helpers/utils'

const mapDispatchToProps = (dispatch) => ({ watchGoalsData: (userId) => dispatch(watchGoalsData(userId)) });

const mapStateToProps = (state) => ({
    user: state.auth.user,
    doneFetchinGoals: state.goals.doneFetching,
    theme: state.theme,
    dark: state.theme.dark
});

function AddGoalScreen({ ...props }) {

    const { user, navigation, theme, dark, watchGoalsData, doneFetchinGoals } = props

    const today = moment().format('YYYY-MM-DD');
    const fancyToday = moment().format("dddd, DD MMMM");
    const timeNow = moment().format('HH:mm');

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("");
    const [option, setOption] = useState("");
    const [datePicker, setDatePicker] = useState(false);
    const [time, setTime] = useState(timeNow);
    const [selectedDate, setSelectedDate] = useState(today);
    const [showDate, setShowDate] = useState(fancyToday)

    useEffect(() => {
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    const handleDatePickerPress = () => setDatePicker((value) => !value);

    const showPicker = () => {
        return (
            <View style={{ width: '100%', height: screenHeight / 5 * 2.3 }}>
                <DatePicker
                    minimumDate={today}
                    selected={selectedDate}
                    options={{
                        backgroundColor: themeStyle.backgroundColor,
                        textHeaderColor: themeStyle.linkBlue,
                        textDefaultColor: themeStyle.textColor,
                        mainColor: themeStyle.violet,
                        textSecondaryColor: themeStyle.textGray,
                    }}
                    onSelectedChange={date => {
                        setSelectedDate(date)
                        setShowDate(moment(new Date(date)).format("dddd, DD MMMM"))
                    }}
                    onTimeChange={selectedTime => setTime(selectedTime)}
                />
            </View>
        )
    }

    let check = true;

    const handleAddGoalPress = () => {
        if ((title === '') || (category === '') || (option === '') || (selectedDate === "") || (time === '')) {
            check = false
            alert("Please complete all fields!")
        }

        if (check === true) {
            const data = {
                title: title,
                date: selectedDate,
                time: time,
                category: category,
                priority: option,
                completed: false
            }
            const subGoalsRef = firebase.firestore().collection('goals').doc(user.id).collection('sub_goals');
            subGoalsRef.add(data)
                .then(() => {
                    watchGoalsData(user.id)
                    if (doneFetchinGoals)
                        navigation.goBack()
                })
                .catch(function (error) {
                    alert(error)
                });
        }
    }

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
                <Text style={styles.textTop}>Add a new goal</Text>
            </View>

            <KeyboardAwareScrollView style={styles.awareScrollView}>

                <View style={styles.taskTitleDiv}>
                    <View style={styles.dividerTaskTitle}>
                        <TextInput
                            placeholder="Goal Title"
                            placeholderTextColor={themeStyle.textColor}
                            color={themeStyle.textColor}
                            style={{ fontSize: 22 }}
                            onChangeText={text => setTitle(text)}
                            value={title}
                        />
                    </View>
                </View>

                <View style={{ ...styles.taskTitleDiv, height: screenHeight / 6, justifyContent: 'flex-start', }}>
                    <View style={styles.card}>
                        <View style={styles.cardIcon}>
                            <FormClock />
                        </View>
                        <View style={{ flexDirection: 'column', width: '60%' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: themeStyle.linkBlue }}>{showDate}</Text>
                            <Text style={{ fontSize: 16, marginTop: 5, color: themeStyle.textColor }}>{time}</Text>
                        </View>
                        <TouchableOpacity onPress={handleDatePickerPress}>
                            {datePicker ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </TouchableOpacity>
                    </View>
                </View>

                {datePicker ? showPicker() : null}

                <View style={{ ...styles.taskTitleDiv, justifyContent: 'flex-start', height: screenHeight / 5.5, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: themeStyle.textColor }}>Category</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-around', width: '100%' }}>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'University' ? themeStyle.linkBlue : themeStyle.cardLightViolet }} underlayColor={themeStyle.linkBlue} onPress={() => setCategory("University")}><Text style={{ ...styles.textCategoryButton, color: category === 'University' ? themeStyle.backgroundColor : themeStyle.textColor }}>University</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Work' ? themeStyle.linkBlue : themeStyle.cardLightViolet }} underlayColor={themeStyle.linkBlue} onPress={() => setCategory("Work")}><Text style={{ ...styles.textCategoryButton, color: category === 'Work' ? themeStyle.backgroundColor : themeStyle.textColor }}>Work</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Lifestyle' ? themeStyle.linkBlue : themeStyle.cardLightViolet }} underlayColor={themeStyle.linkBlue} onPress={() => setCategory("Lifestyle")}><Text style={{ ...styles.textCategoryButton, color: category === 'Lifestyle' ? themeStyle.backgroundColor : themeStyle.textColor }}>Lifestyle</Text></TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-around', width: '100%' }}>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Sport' ? themeStyle.linkBlue : themeStyle.cardLightViolet }} underlayColor={themeStyle.linkBlue} onPress={() => setCategory("Sport")}><Text style={{ ...styles.textCategoryButton, color: category === 'Sport' ? themeStyle.backgroundColor : themeStyle.textColor }}>Sport</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Shopping' ? themeStyle.linkBlue : themeStyle.cardLightViolet }} underlayColor={themeStyle.linkBlue} onPress={() => setCategory("Shopping")}><Text style={{ ...styles.textCategoryButton, color: category === 'Shopping' ? themeStyle.backgroundColor : themeStyle.textColor }}>Shopping</Text></TouchableHighlight>
                        <TouchableHighlight style={{ ...styles.categoryButton, backgroundColor: category === 'Holiday' ? themeStyle.linkBlue : themeStyle.cardLightViolet }} underlayColor={themeStyle.linkBlue} onPress={() => setCategory("Holiday")}><Text style={{ ...styles.textCategoryButton, color: category === 'Holiday' ? themeStyle.backgroundColor : themeStyle.textColor }}>Holiday</Text></TouchableHighlight>
                    </View>
                </View>

                <View style={{ height: screenHeight / 8, width: "90%", alignSelf: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: themeStyle.textColor }}>Options</Text>

                    <View style={{ ...styles.radioButtonsView, marginTop: 10, }}>
                        <View style={{ ...styles.radioButtonsView, paddingLeft: 10 }}>
                            <TouchableOpacity onPress={() => setOption("High")}>
                                <RadioButtonActivity selected={option == "High" ? true : false} />
                            </TouchableOpacity>
                            <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>High</Text>
                        </View>
                        <View style={styles.radioButtonsView}>
                            <TouchableOpacity onPress={() => setOption("Medium")}>
                                <RadioButtonActivity selected={option == "Medium" ? true : false} />
                            </TouchableOpacity>
                            <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>Medium</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
                            <TouchableOpacity onPress={() => setOption("Low")}>
                                <RadioButtonActivity selected={option == "Low" ? true : false} />
                            </TouchableOpacity>
                            <Text style={{ ...styles.textCategoryButton, paddingLeft: 10 }}>Low</Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 5 }}>
                    <TouchableHighlight style={styles.submitButton} onPress={handleAddGoalPress}>
                        <Text style={styles.submitButtonText}>Add new goal</Text>
                    </TouchableHighlight>
                </View>
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        </View >
    );
}

const styleSheetFactory = (themeStyle) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeStyle.backgroundColor,
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
        borderColor: themeStyle.textColor,
        paddingLeft: 10
    },
    detailsText: {
        fontSize: 18,
        paddingLeft: 13,
        paddingTop: 10,
        color: themeStyle.textGrayDark
    },
    card: {
        width: '100%',
        height: 100,
        borderRadius: 20,
        backgroundColor: themeStyle.cardLightViolet,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%'
    },
    cardIcon: {
        backgroundColor: themeStyle.backgroundColor,
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
        color: themeStyle.textColor
    },
    radioButtonsView: {
        flexDirection: 'row',
        flex: 1
    },
    submitButton: {
        alignSelf: 'center',
        width: '90%',
        height: 50,
        backgroundColor: themeStyle.button,
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGoalScreen);
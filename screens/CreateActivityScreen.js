import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TextInput, TouchableHighlight } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';

import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import Back from '../assets/others/back.js';
import AddPerson from '../assets/others/addPerson.js';
import FormClock from '../assets/others/formClock.js';
import FormMap from '../assets/others/formMap.js';
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

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={styles.awareScrollView}>
                <HeaderGradient width={screenWidth} height={screenHeight * 17 / 100} style={{ flex: 1, position: 'absolute' }} />
                <View style={styles.topText}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <View style={styles.backButton}>
                            <Back />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.textTop}>Create a new activity</Text>
                </View>

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
                        <TouchableHighlight style={styles.categoryButton} underlayColor={theme.lightViolet} onPress={() => alert("da")}><Text style={styles.textCategoryButton}>University</Text></TouchableHighlight>
                        <TouchableHighlight style={styles.categoryButton} underlayColor={theme.lightViolet} onPress={() => alert("da")}><Text style={styles.textCategoryButton}>Work</Text></TouchableHighlight>
                        <TouchableHighlight style={styles.categoryButton} underlayColor={theme.lightViolet} onPress={() => alert("da")}><Text style={styles.textCategoryButton}>Lifestyle</Text></TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-around', width: '100%' }}>
                        <TouchableHighlight style={styles.categoryButton} underlayColor={theme.lightViolet} onPress={() => alert("da")}><Text style={styles.textCategoryButton}>Sport</Text></TouchableHighlight>
                        <TouchableHighlight style={styles.categoryButton} underlayColor={theme.lightViolet} onPress={() => alert("da")}><Text style={styles.textCategoryButton}>Shopping</Text></TouchableHighlight>
                        <TouchableHighlight style={styles.categoryButton} underlayColor={theme.lightViolet} onPress={() => alert("da")}><Text style={styles.textCategoryButton}>Holiday</Text></TouchableHighlight>
                    </View>
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
        height: screenHeight
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
        backgroundColor: theme.cardLightViolet,
        borderRadius: 10
    },
    textCategoryButton: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default connect(mapStateToProps)(CreateActivityScreen);
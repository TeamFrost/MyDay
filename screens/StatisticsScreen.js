import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';

import HeaderGradient from '../assets/backgrounds/headerGradientBlue';
import Back from '../assets/others/back.js';
import ActivitiesIcon from "../assets/statistics/statisticsActivities";
import GoalsIcon from "../assets/statistics/statisticsGoals";
import AchievemntsIcon from "../assets/statistics/statisticsAchievements";
import FriendsIcon from "../assets/statistics/statisticsFriends";
import Star from "../assets/statistics/star";
import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function StatisticsScreen({ ...props }) {

    const { user, navigation } = props

    const [activitiesNumber, setActivitiesNumber] = useState(1052)
    const [activity, setActivity] = useState("University")
    const [goalsNumber, setGoalsNumber] = useState(640)
    const [goal, setGoal] = useState("Run 2k")
    const [achievemnetsNumber, setAchievemnetsNumber] = useState(45)
    const [achievement, setAchievement] = useState("Planner")
    const [friendsNumber, setFriendsNumber] = useState(154)
    const [friend, setFriend] = useState("Julie")

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />

            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Statistics</Text>
            </View>
            <KeyboardAwareScrollView style={styles.awareScrollView}>

                <View style={styles.cardsView}>

                    <View style={styles.stat}>
                        <View style={styles.card}>

                            <ActivitiesIcon />
                            <Text style={styles.cardText}>Activities</Text>

                            <Text style={{ ...styles.cardText, flex: 1 }}>{activitiesNumber}</Text>
                        </View>
                        <View style={styles.belowView}>
                            <Star />
                            <Text style={styles.belowText}>Most popular activity: <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{activity}</Text></Text>
                        </View>
                    </View>

                    <View style={styles.stat}>
                        <View style={styles.card}>
                            <GoalsIcon />
                            <Text style={styles.cardText}>Goals</Text>
                            <Text style={{ ...styles.cardText, flex: 1 }}>{goalsNumber}</Text>
                        </View>
                        <View style={styles.belowView}>
                            <Star />
                            <Text style={styles.belowText}>Most recent goal: <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{goal}</Text></Text>
                        </View>
                    </View>

                    <View style={styles.stat}>
                        <View style={styles.card}>

                            <AchievemntsIcon />
                            <Text style={styles.cardText}>Achievements</Text>

                            <Text style={{ ...styles.cardText, flex: 1 }}>{achievemnetsNumber}</Text>
                        </View>
                        <View style={styles.belowView}>
                            <Star />
                            <Text style={styles.belowText}>Last achievement received <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{achievement}</Text></Text>
                        </View>
                    </View>

                    <View style={styles.stat}>
                        <View style={styles.card}>
                            <FriendsIcon />
                            <Text style={styles.cardText}>Friends</Text>
                            <Text style={{ ...styles.cardText, flex: 1 }}>{friendsNumber}</Text>
                        </View>
                        <View style={styles.belowView}>
                            <Star />
                            <Text style={styles.belowText}>Last added friend: <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{friend}</Text></Text>
                        </View>
                    </View>

                </View>

                <View style={styles.lineChart}>

                </View>

                <View style={styles.pieChart}>

                </View>
            </KeyboardAwareScrollView>
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
    awareScrollView: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        // marginTop: "-1%",
    },
    cardsView: {
        height: screenHeight / 1.8,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: "center",
        marginTop: "5%",
    },
    stat: {
        width: "100%",
        marginTop: "5%"
    },
    card: {
        alignItems: 'center',
        flexDirection: "row",
        height: 65,
        width: "100%",
        borderRadius: 20,
        padding: '4%',
        backgroundColor: theme.lightBlue,
    },
    cardText: {
        flex: 4,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10
    },
    belowView: {
        alignItems: 'center',
        flexDirection: "row",
        width: "100%",
        marginTop: "2%"
    },
    belowText: {
        fontSize: 16,
        color: theme.textColor,
        marginLeft: "2%"
    },
    lineChart: {
        height: screenHeight / 3.5,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
    },
    pieChart: {
        height: screenHeight / 3.5,
        width: "90%",
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
    }

});

export default connect(mapStateToProps)(StatisticsScreen);
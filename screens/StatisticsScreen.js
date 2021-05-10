import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, LogBox } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryScatter, VictoryPie, VictoryContainer } from "victory-native";
import { connect } from 'react-redux';
import moment from 'moment';

import { firebase } from "../firebase/config";
import { occuarnce, compareTime, compareProgress } from '../helpers/functions'

import HeaderGradient from '../assets/backgrounds/light/headerGradientBlue';
import HeaderGradientDark from '../assets/backgrounds/dark/headerGradientBlueDark';
import Back from '../assets/others/back.js';
import ActivitiesIcon from "../assets/statistics/statisticsActivities";
import GoalsIcon from "../assets/statistics/statisticsGoals";
import AchievemntsIcon from "../assets/statistics/statisticsAchievements";
import FriendsIcon from "../assets/statistics/statisticsFriends";
import Star from "../assets/statistics/star";
import { colors } from '../helpers/style';
import { screenWidth, screenHeight } from '../helpers/utils'

const mapStateToProps = (state) => ({
    user: state.auth.user,
    events: state.events.eventsData,
    goals: state.goals.goalsData,
    theme: state.theme,
    dark: state.theme.dark
});

function StatisticsScreen({ ...props }) {

    const { user, navigation, theme, dark, events, goals } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [activitiesNumber, setActivitiesNumber] = useState(0)
    const [activity, setActivity] = useState("")
    const [goalsNumber, setGoalsNumber] = useState(0)
    const [goal, setGoal] = useState("")
    const [achievemnetsNumber, setAchievemnetsNumber] = useState(0)
    const [achievement, setAchievement] = useState("")
    const [friendsNumber, setFriendsNumber] = useState(0)
    const [friend, setFriend] = useState("")
    const [pieChartData, setPieChartData] = useState([])
    const [lineChartData, setLineChartData] = useState([])

    const sixDaysAgo = moment().subtract(6, 'days').format("DD/MM")
    const fiveDaysAgo = moment().subtract(5, 'days').format("DD/MM")
    const fourDaysAgo = moment().subtract(4, 'days').format("DD/MM")
    const threeDaysAgo = moment().subtract(3, 'days').format("DD/MM")
    const twoDaysAgo = moment().subtract(2, 'days').format("DD/MM")
    const oneDayAgo = moment().subtract(1, 'days').format("DD/MM")
    const today = moment().format("DD/MM")

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

        const eventsLength = events.length;
        setActivitiesNumber(eventsLength)
        if (eventsLength === 0) {
            setActivity("Insufficient data")
        } else {
            const eventsCategoryArray = events.map(ev => ev.category)
            const mostPopularActivity = occuarnce(eventsCategoryArray)
            setActivity(mostPopularActivity)
        }

        const goalsLength = goals.length;
        setGoalsNumber(goalsLength)
        if (goalsLength === 0) {
            setGoal("Insufficient data")
        } else {
            const completedGoals = goals.filter(gl => gl.completed === true)
            const sortedGoals = completedGoals.sort(compareTime)
            const sortedGoalsLength = sortedGoals.length
            const goal = sortedGoals[sortedGoalsLength - 1];
            setGoal(goal.title)
        }


        const achievements = props.route.params
        const completedAchievements = achievements.filter(ach => ach.progress === 100)
        const completedLengthAchievements = completedAchievements.length
        setAchievemnetsNumber(completedLengthAchievements)
        const sortedAchievements = achievements.sort(compareProgress);
        const progressedAchievement = sortedAchievements[sortedAchievements.length - 2].achievement
        setAchievement(progressedAchievement)

        const friendsLength = user.friends.length
        setFriendsNumber(friendsLength)
        if (friendsLength === 0) {
            setFriend("Insufficient data")
        } else {
            const friendsArray = events.map(ev => ev.friends)
            const flattenFriendsArray = friendsArray.flat()
            const friend = occuarnce(flattenFriendsArray)
            const userRef = firebase.firestore().collection('users').doc(friend)
            userRef.get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    setFriend(user.username)
                })
                .catch(error => {
                    console.log(error)
                });
        }

        const uniEvents = events.filter(ev => ev.category === "University")
        const uniEventsLength = uniEvents.length;
        const workEvents = events.filter(ev => ev.category === "Work")
        const workEventsLength = workEvents.length;
        const lifestyleEvents = events.filter(ev => ev.category === "Lifestyle")
        const lifestyleEventsLength = lifestyleEvents.length;
        const sportEvents = events.filter(ev => ev.category === "Sport")
        const sportEventsLength = sportEvents.length;
        const shoppingEvents = events.filter(ev => ev.category === "Shopping")
        const shoppingEventsLength = shoppingEvents.length;
        const holidayEvents = events.filter(ev => ev.category === "Holiday")
        const holidayEventsLength = holidayEvents.length;

        const pieChart = [
            { x: "University", y: uniEventsLength, color: "#6B75CE" },
            { x: "Work", y: workEventsLength, color: "#564B93" },
            { x: "Lifestyle", y: lifestyleEventsLength, color: "#9B8CF8" },
            { x: "Sport", y: sportEventsLength, color: "#D4C3FC" },
            { x: "Shopping", y: shoppingEventsLength, color: "#A5C5FC" },
            { x: "Holiday", y: holidayEventsLength, color: "#5C8DF7" },
        ]

        setPieChartData(pieChart)

        const activitiesSixDaysAgo = events.filter(ev => moment(new Date(ev.date)).format("DD/MM") === sixDaysAgo)
        const activitiesSixDaysAgoLength = activitiesSixDaysAgo.length;
        const activitiesFiveDaysAgo = events.filter(ev => moment(new Date(ev.date)).format("DD/MM") === fiveDaysAgo)
        const activitiesFiveDaysAgoLength = activitiesFiveDaysAgo.length;
        const activitiesFourDaysAgo = events.filter(ev => moment(new Date(ev.date)).format("DD/MM") === fourDaysAgo)
        const activitiesFourDaysAgoLength = activitiesFourDaysAgo.length;
        const activitiesThreeDaysAgo = events.filter(ev => moment(new Date(ev.date)).format("DD/MM") === threeDaysAgo)
        const activitiesThreeDaysAgoLength = activitiesThreeDaysAgo.length;
        const activitiesTwoDaysAgo = events.filter(ev => moment(new Date(ev.date)).format("DD/MM") === twoDaysAgo)
        const activitiesTwoDaysAgoLength = activitiesTwoDaysAgo.length;
        const activitiesOneDayAgo = events.filter(ev => moment(new Date(ev.date)).format("DD/MM") === oneDayAgo)
        const activitiesOneDayAgoLength = activitiesOneDayAgo.length;
        const activitiesToday = events.filter(ev => moment(new Date(ev.date)).format("DD/MM") === today)
        const activitiesTodayLength = activitiesToday.length;

        const lineChart = [
            { x: sixDaysAgo, y: activitiesSixDaysAgoLength },
            { x: fiveDaysAgo, y: activitiesFiveDaysAgoLength },
            { x: fourDaysAgo, y: activitiesFourDaysAgoLength },
            { x: threeDaysAgo, y: activitiesThreeDaysAgoLength },
            { x: twoDaysAgo, y: activitiesTwoDaysAgoLength },
            { x: oneDayAgo, y: activitiesOneDayAgoLength },
            { x: today, y: activitiesTodayLength },
        ];

        setLineChartData(lineChart)

        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    const ItemLegend = ({ color, title }) => (
        <View style={{ height: 40, alignItems: 'center', ...styles.flatListItem }}>
            <View
                style={{ width: 22, height: 22, borderRadius: 20, backgroundColor: color }}
            />
            <View style={{ width: '70%', justifyContent: 'flex-start' }}>
                <Text style={styles.textLegend}>{title}</Text>
            </View>
        </View>
    );

    const renderItemLegend = ({ item }) => (
        <ItemLegend
            color={item.color}
            title={item.x}
        />
    );

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
                            <Text style={styles.belowText}>Most popular category: <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{activity}</Text></Text>
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
                            <Text style={styles.belowText}>Last completed goal: <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{goal}</Text></Text>
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
                            <Text style={styles.belowText}>Most progress towards: <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{achievement}</Text></Text>
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
                            <Text style={styles.belowText}>Best friend: <Text style={{ ...styles.belowText, fontWeight: "bold" }}>{friend}</Text></Text>
                        </View>
                    </View>
                </View>

                <View style={styles.lineChart}>
                    <Text style={{ ...styles.subtitleText, marginTop: "10%" }}>Number of activities in the last days</Text>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        height={300}
                        domainPadding={{ x: [10, 10], y: 20 }}
                        padding={{ top: 40, bottom: 50, right: 50, left: 50 }}
                    >
                        <VictoryLine
                            style={{
                                data: { stroke: themeStyle.violet },
                                parent: { border: "1px solid #ccc" }
                            }}
                            labels={({ datum }) => datum.y}
                            interpolation="monotoneX"
                            data={lineChartData}
                        />
                        <VictoryScatter
                            data={lineChartData}
                            style={{ data: { fill: themeStyle.red } }}
                        />
                    </VictoryChart>
                </View>

                <View style={styles.pieChart}>
                    <Text style={styles.subtitleText}>Types of activities</Text>
                    <View style={styles.defaultView}>
                        <VictoryPie
                            theme={VictoryTheme.material}
                            colorScale={["#6B75CE", "#564B93", "#9B8CF8", "#D4C3FC", "#A5C5FC", "#5C8DF7"]}
                            height={300}
                            padding={{ bottom: 50 }}
                            data={pieChartData}
                            containerComponent={<VictoryContainer height={300} style={{ flex: 1 }} />}
                            origin={{ x: screenWidth / 3.4 }}
                            radius={screenWidth / 4}
                            labels={() => null}
                        />
                        <View style={styles.statisticsLegend}>
                            <FlatList
                                data={pieChartData}
                                renderItem={renderItemLegend}
                                keyExtractor={(item) => item.x}
                                style={{ alignSelf: 'flex-end' }}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
        height: screenHeight
    },
    cardsView: {
        height: screenHeight / 1.8,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: "center",
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
        backgroundColor: themeStyle.lightBlue,
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
        color: themeStyle.textColor,
        marginLeft: "2%"
    },
    lineChart: {
        flex: 1,
        height: screenHeight / 2.8,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",

    },
    pieChart: {
        flex: 1,
        height: screenHeight / 3.3,
        width: "90%",
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: '5%',
    },
    subtitleText: {
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: 'flex-start',
        color: themeStyle.textColor
    },
    statisticsLegend: {
        flex: 0.7,
        alignItems: "center",
    },
    textLegend: {
        color: themeStyle.textColor,
        fontSize: 14,
        fontWeight: "bold"
    },
    flatListItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    defaultView: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    }

});

export default connect(mapStateToProps)(StatisticsScreen);
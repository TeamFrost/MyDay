import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, FlatList, LogBox } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryScatter, VictoryPie, VictoryContainer } from "victory-native";
import { connect } from 'react-redux';
import moment from 'moment';

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

let DATA = [
    { x: moment().subtract(6, 'days').format("DD/MM"), y: 2 },
    { x: moment().subtract(5, 'days').format("DD/MM"), y: 3 },
    { x: moment().subtract(4, 'days').format("DD/MM"), y: 7 },
    { x: moment().subtract(3, 'days').format("DD/MM"), y: 5 },
    { x: moment().subtract(2, 'days').format("DD/MM"), y: 6 },
    { x: moment().subtract(1, 'days').format("DD/MM"), y: 11 },
    { x: moment().format("DD/MM"), y: 8 },
];

const pieChartData = [
    { x: "University", y: 21, color: "#6B75CE" },
    { x: "Work", y: 29, color: "#564B93" },
    { x: "Lifestyle", y: 18, color: "#9B8CF8" },
    { x: "Sport", y: 25, color: "#D4C3FC" },
    { x: "Shopping", y: 5, color: "#A5C5FC" },
    { x: "Holiday", y: 8, color: "#5C8DF7" },
];

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

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

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
                    <Text style={styles.subtitleText}>Number of activities in the last days</Text>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        height={300}
                        domainPadding={{ x: [10, 10], y: 20 }}
                        padding={{ top: 40, bottom: 50, right: 50, left: 50 }}
                    >
                        <VictoryLine
                            style={{
                                data: { stroke: theme.violet },
                                parent: { border: "1px solid #ccc" }
                            }}
                            labels={({ datum }) => datum.y}
                            interpolation="monotoneX"
                            data={DATA}
                        />
                        <VictoryScatter
                            data={DATA}
                            style={{ data: { fill: theme.red } }}
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
        flex: 1,
        height: screenHeight / 3,
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
        alignSelf: 'flex-start'
    },
    statisticsLegend: {
        flex: 0.7,
        alignItems: "center",
    },
    textLegend: {
        color: colors.textColor,
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
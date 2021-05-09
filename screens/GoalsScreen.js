import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { useActionSheet } from '@expo/react-native-action-sheet'
import moment from 'moment';
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'

import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import LowGoalIcon from '../assets/goalsVariation/lowPriority';
import MediumGoalIcon from '../assets/goalsVariation/mediumPriority';
import HighGoalIcon from '../assets/goalsVariation/highPriority';
import Rocket from "../assets/others/rocket";
import { colors } from '../helpers/style';
import { screenWidth } from '../helpers/utils'

const mapStateToProps = (state) => ({
    user: state.auth.user,
    goals: state.goals.goalsData,
    theme: state.theme
});

function GoalsScreen({ ...props }) {

    const { showActionSheetWithOptions } = useActionSheet();

    const { user, navigation, theme, goals } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [goalsArray, setGoalsArray] = useState(goals)

    useEffect(() => {
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    const Item = ({ title, time, index, priority, id, completed }) => {
        const inputRange = [-1, 0, 100 * (index), 100 * (index + 2)]
        const opacityInputRange = [-1, 0, 100 * index, 100 * (index + 1)]
        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
        })
        const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0]
        })
        if (!completed)
            return (
                <Animated.View style={{ transform: [{ scale }], opacity }} >
                    <LinearGradient colors={['#F8D7F67F', '#D4C3FC7F', '#BBD4FF7F']} style={styles.card} start={[0, 0]} end={[1, 0]}>
                        {priority === "Low" ?
                            <LowGoalIcon height={40} width={40} />
                            :
                            priority === "Medium" ?
                                <MediumGoalIcon height={40} width={40} />
                                :
                                <HighGoalIcon height={40} width={40} />
                        }
                        <View style={{ flex: 1, paddingLeft: 15 }}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={{ color: time.includes("ago") ? themeStyle.red : themeStyle.text }}>{time}</Text>
                        </View>
                        <Icon name="ellipsis-v" size={20} color={themeStyle.textGray} style={styles.iconArangeGoal} onPress={() => handleGoalOptionPress(id)} />
                    </LinearGradient>

                </Animated.View>
            );
        else
            return null;
    }

    const renderItem = ({ item, index }) => (
        <Item title={item.title} time={item.time} priority={item.priority} id={item.key} completed={item.completed} index={index} />
    );

    const scrollY = React.useRef(new Animated.Value(0)).current;

    const handleAddGoalPress = () => navigation.navigate("AddGoal");

    const handleGoalOptionPress = (id) => {

        const options = ['Yes', 'No'];
        const destructiveButtonIndex = 0;
        const title = "Do you wish to mark this goal as completed?"

        showActionSheetWithOptions(
            {
                title,
                options,
                destructiveButtonIndex,
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    markGoal(id)
                } else if (buttonIndex === 1) {
                    //cancel
                }
            },
        );
    }

    const markGoal = (id) => {
        firebase.firestore().collection('goals').doc(user.id).collection('sub_goals').doc(id).update({
            "completed": true,
        })
            .then(() => {
                console.log("Document successfully updated!");
            });
    }

    const goalsArrayList = goalsArray.map(goal => ({ key: goal.id, title: goal.title, time: moment(new Date(goal.date)).startOf('hour').fromNow(), priority: goal.priority, completed: goal.completed }))

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
            <View style={styles.topText}>
                <Text style={styles.textTop}>Goals</Text>
                <Text style={styles.subtextTop} onPress={handleAddGoalPress}>Add a new goal +</Text>
            </View>

            {goalsArrayList.length === 0 ?
                <View style={styles.containerNoGoals}>
                    <Rocket />
                    <Text style={styles.textNoGoals}>No goals to show.</Text>
                </View>
                :
                <View style={styles.flatListDiv}>
                    <Animated.FlatList
                        data={goalsArrayList}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: true }
                        )}
                        contentContainerStyle={{ padding: '5%' }}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />
                </View>
            }

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
        height: '22%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTop: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold"
    },
    subtextTop: {
        textDecorationLine: 'underline',
        fontSize: 18,
        color: "white"
    },
    flatListDiv: {
        flex: 1,
        width: '100%'
    },
    card: {
        flex: 1,
        marginTop: 15,
        height: 80,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconArangeGoal: {
        marginLeft: 10,
        marginRight: 10,
    },
    containerNoGoals: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNoGoals: {
        fontSize: 22,
        color: themeStyle.textColor,
        fontWeight: '200'
    },
});


export default connect(mapStateToProps)(GoalsScreen);
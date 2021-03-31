import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle'
import { connect } from 'react-redux';

import HeaderGradient from '../assets/backgrounds/profileGradient';
import ProfileFemale from '../assets/profiles/profileFemale'
import ProfileMale from '../assets/profiles/profileMale'
import SettingsIcon from '../assets/settings/settings'
import StatisticsIcon from '../assets/icons/statisticsIcon'
import FriendsIcon from '../assets/icons/friendsIcon'
import PlannerIcon from '../assets/achievements/achivementPlanner'
import EducatedIcon from '../assets/achievements/achivementEducated'
import GoalsIcon from '../assets/achievements/achivementGoals'
import SocialIcon from '../assets/achievements/achivementSocial'
import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function ProfileScreen({ ...props }) {
    const { user, navigation } = props

    const [profile, setProfile] = useState("https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg")
    const [username, setUsername] = useState("User")

    const profilePicture = () => {
        if (profile === "M")
            return <ProfileMale width={125} height={125} />
        else
            if (profile === "F")
                return <ProfileFemale width={125} height={125} />
            else {
                return <Avatar.Image size={125} source={{ uri: profile }} />
            }
    }

    const handleSettingsPress = () => navigation.navigate("SettingsStack")
    const handleStatisticsPress = () => navigation.navigate("Statistics")
    const handleFriendsPress = () => navigation.navigate("Friends")

    useEffect(() => {
        if (user) {
            setProfile(user.profile)
            setUsername(user.username)
        }
    }, [])

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.3} height={screenHeight / 2.2} style={{ flex: 1, position: 'absolute' }} />
            <SettingsIcon onPress={handleSettingsPress} style={{ position: 'absolute', top: "8%", right: "8%" }} />
            <View style={styles.profile}>
                {profilePicture()}
            </View>
            <Text style={styles.username}>{user.username}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="map-marker-alt" size={14} color={"white"} style={{ paddingRight: 5 }} />
                <Text style={styles.location}>Timisoara, Romania</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableHighlight
                    onPress={handleStatisticsPress}
                    underlayColor="#DDDDDD"
                    style={styles.buttonTouch}
                >
                    <View style={styles.button}>
                        <StatisticsIcon style={{ marginRight: "2%" }} />
                        <Text style={styles.buttonText}>Statistics</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={handleFriendsPress}
                    underlayColor="#DDDDDD"
                    style={styles.buttonTouch}
                >
                    <View style={styles.button}>
                        <FriendsIcon style={{ marginRight: "2%" }} />
                        <Text style={styles.buttonText}>Friends</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.achivementView}>
                <Text style={styles.achivementText}>Achievements</Text>

                <View style={styles.achivementCard}>
                    <ProgressCircle
                        percent={15}
                        radius={30}
                        borderWidth={5}
                        color="#9B8CF8"
                        shadowColor={theme.textGray}
                        bgColor={theme.backgroundColor}
                    >
                        <PlannerIcon />
                    </ProgressCircle>
                    <View style={styles.textAlignCard}>
                        <Text style={styles.achivementCardTitle}>Planner</Text>
                        <Text style={styles.achivementCardSubtitle1}>Added 100 activities</Text>
                        <Text style={styles.achivementCardSubtitle2}>Current: 15 out of 100</Text>
                    </View>
                </View>

                <View style={styles.achivementCard}>
                    <ProgressCircle
                        percent={58}
                        radius={30}
                        borderWidth={5}
                        color="#5C8DF7"
                        shadowColor={theme.textGray}
                        bgColor={theme.backgroundColor}
                    >
                        <EducatedIcon />
                    </ProgressCircle>
                    <View style={styles.textAlignCard}>
                        <Text style={styles.achivementCardTitle}>Educated</Text>
                        <Text style={styles.achivementCardSubtitle1}>Have 50 university activities added</Text>
                        <Text style={styles.achivementCardSubtitle2}>Current: 27 out of 50</Text>
                    </View>
                </View>

                <View style={styles.achivementCard}>
                    <ProgressCircle
                        percent={70}
                        radius={30}
                        borderWidth={5}
                        color="#564B93"
                        shadowColor={theme.textGray}
                        bgColor={theme.backgroundColor}
                    >
                        <GoalsIcon />
                    </ProgressCircle>
                    <View style={styles.textAlignCard}>
                        <Text style={styles.achivementCardTitle}>All about the goals</Text>
                        <Text style={styles.achivementCardSubtitle1}>Completed 100 goals in a row</Text>
                        <Text style={styles.achivementCardSubtitle2}>Current: 70 out of 100</Text>
                    </View>
                </View>

                <View style={styles.achivementCard}>
                    <ProgressCircle
                        percent={90}
                        radius={30}
                        borderWidth={5}
                        color="#D4C3FC"
                        shadowColor={theme.textGray}
                        bgColor={theme.backgroundColor}
                    >
                        <SocialIcon />
                    </ProgressCircle>
                    <View style={styles.textAlignCard}>
                        <Text style={styles.achivementCardTitle}>Social</Text>
                        <Text style={styles.achivementCardSubtitle1}>Have 10 friends</Text>
                        <Text style={styles.achivementCardSubtitle2}>Current: 9 out of 10</Text>
                    </View>
                </View>
            </View>

            <StatusBar style="auto" />
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
    profile: {
        paddingTop: "15%"
    },
    username: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        marginTop: "4%"
    },
    location: {
        color: "white",
        fontSize: 16,
    },
    buttonView: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTouch: {
        backgroundColor: theme.button,
        width: '40%',
        height: 45,
        borderRadius: 20,
        margin: "4%",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    achivementView: {
        flex: 1,
        width: "90%",
        alignSelf: 'center',
        marginTop: "8%",
        // backgroundColor: 'red',
    },
    achivementText: {
        fontSize: 22,
        fontWeight: "bold",
        color: theme.textColor
    },
    achivementCard: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: '4%'
    },
    achivementCardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: theme.textColor
    },
    achivementCardSubtitle1: {
        fontSize: 14,
        color: theme.textColor
    },
    achivementCardSubtitle2: {
        fontSize: 14,
        color: theme.textGray
    },
    textAlignCard: {
        flexDirection: "column",
        marginLeft: '3%'
    }
});

export default connect(mapStateToProps)(ProfileScreen);
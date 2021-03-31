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
            <HeaderGradient width={screenWidth * 1.3} height={screenHeight / 2} style={{ flex: 1, position: 'absolute' }} />
            <SettingsIcon onPress={handleSettingsPress} style={{ position: 'absolute', top: "8%", right: "8%" }} />
            <View style={styles.profile}>
                {profilePicture()}
            </View>
            <Text style={styles.username}>{username}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
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
            <ProgressCircle
                percent={30}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
                <PlannerIcon />
            </ProgressCircle>

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
        paddingTop: "20%"
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
        fontSize: 20
    }
});

export default connect(mapStateToProps)(ProfileScreen);
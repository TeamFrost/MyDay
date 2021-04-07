import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

import ProfileFemale from '../../assets/profiles/profileFemale'
import ProfileMale from '../../assets/profiles/profileMale'
import HeaderGradient from '../../assets/backgrounds/headerGradientBlue';
import Back from '../../assets/others/back.js';
import AddPhoto from '../../assets/others/addPhoto.js';
import { colors } from '../../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function EditProfilePictureScreen({ ...props }) {
    const { user, navigation } = props
    const [profile, setProfile] = useState("https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg")

    const profilePicture = () => {
        if (profile === "M")
            return <ProfileMale width={200} height={200} />
        else
            if (profile === "F")
                return <ProfileFemale width={200} height={200} />
            else {
                return <Avatar.Image size={200} source={{ uri: profile }} />
            }
    }

    const updateProfile = () => {
        alert("da")
    }

    useEffect(() => {
        if (user) {
            setProfile(user.profile)
        }
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
                <Text style={styles.textTop}>Edit Profile Picture</Text>
            </View>

            <View style={styles.upload}>
                <View style={styles.profile}>
                    {profilePicture()}
                </View>
                <View style={styles.profile}>
                    <Text style={styles.profileText} onPress={() => updateProfile()}>Upload a new picture</Text>
                    <AddPhoto />
                </View>
            </View>

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
    upload: {
        flex: 1,
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profile: {
        flexDirection: 'row',
        marginTop: screenHeight / 20,
    },
    profileText: {
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingRight: 5
    }
});

export default connect(mapStateToProps)(EditProfilePictureScreen);
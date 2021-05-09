import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet'
import * as ImagePicker from 'expo-image-picker';
import moment from 'moment';
import { connect } from 'react-redux';

import { firebase } from '../../firebase/config'
import { restoreSession } from '../../redux/actions/auth/auth'
import { profilePicture } from '../../helpers/functions'

import HeaderGradient from '../../assets/backgrounds/headerGradientBlue';
import Back from '../../assets/others/back.js';
import AddPhoto from '../../assets/others/addPhoto.js';
import { colors } from '../../helpers/style';
import { screenWidth, screenHeight } from '../../helpers/utils'

const mapDispatchToProps = (dispatch) => ({ restoreSession: () => dispatch(restoreSession()) });

const mapStateToProps = (state) => ({
    user: state.auth.user,
    doneFetching: state.auth.doneFetching,
    hasError: state.auth.hasError,
    errorMessage: state.auth.errorMessage,
    theme: state.theme,
});

function EditProfilePictureScreen({ ...props }) {

    const { showActionSheetWithOptions } = useActionSheet();

    const { user, doneFetching, navigation, theme } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    let profile = 'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'
    let userId = ''

    if (user) {
        // profile = user.profile
        userId = user.id
    }

    if (doneFetching) {
        if (user) {
            profile = user.profile
        }
    }

    const [image, setImage] = useState(null);
    const [imageRef, setImageRef] = useState("");

    useEffect(() => {
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])


    const updateProfile = () => {

        const options = ['Take Photo...', 'Choose from gallery...', 'Cancel'];
        const cancelButtonIndex = 2;

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    takePicture()
                } else if (buttonIndex === 1) {
                    pickImage()
                } else if (buttonIndex === 2) {
                    //cancel
                }
            },
        );
    }

    const takePicture = async () => {
        // (async () => {
        //     if (Platform.OS !== 'web') {
        //         const { status } = await ImagePicker.requestCameraPermissionsAsync();
        //         if (status !== 'granted') {
        //             alert('Sorry, we need camera roll permissions to make this work!');
        //         }
        //     }
        // })();

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            let image = result.uri;
            setImage(image);
            let imageName = moment(Date.parse(new Date())).format().toString() + '-' + userId;
            uploadImage(image, imageName)
        }
    }

    const pickImage = async () => {

        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            let image = result.uri;
            setImage(image);
            let imageName = moment(Date.parse(new Date())).format().toString() + '-' + userId;
            uploadImage(image, imageName)
        }
    }

    const uploadImage = async (uri, imageName) => {
        let oldRef = ''
        if (profile.includes("firebasestorage")) {
            console.log("The photo exists in firebase storage!")
            oldRef = firebase.storage().refFromURL(profile)
        }
        const response = await fetch(uri);
        const blob = await response.blob();
        let imageURL = '';
        const ref = firebase.storage().ref().child(`images/users/${imageName}`);
        setImageRef(ref)
        ref.put(blob)
            .then(function () {
                ref.getDownloadURL()
                    .then(function (url) {
                        imageURL = url;
                        firebase.firestore().collection('users').doc(userId)
                            .update({ profile: imageURL })
                            .then(function () {
                                if (oldRef != '') {
                                    console.log("Delete old ref")
                                    oldRef.delete().then(function () {
                                        restoreSession()
                                        alert("Success!")
                                    }).catch(function (error) {
                                        alert(error)
                                    });
                                }
                                else {
                                    restoreSession()
                                    alert("Success!")
                                }
                            })
                            .catch(function (error) {
                                alert(error)
                            });
                    })
                    .catch(function (error) {
                        alert(error)
                    })
            })
            .catch(function (error) {
                alert(error)
            })
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
                <Text style={styles.textTop}>Edit Profile Picture</Text>
            </View>

            <View style={styles.upload}>
                <View style={styles.profile}>
                    {profilePicture(profile, 200)}
                </View>
                <View style={styles.profile}>
                    <Text style={styles.profileText} onPress={updateProfile}>Upload a new picture</Text>
                    <AddPhoto />
                </View>
            </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePictureScreen);
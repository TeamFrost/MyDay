import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Searchbar, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'
import { profilePicture } from '../helpers/functions'

import HeaderGradient from '../assets/backgrounds/light/headerGradientBlue';
import HeaderGradientDark from '../assets/backgrounds/dark/headerGradientBlueDark';
import Back from '../assets/others/back.js';
import Planet from '../assets/icon'
import AddFriend from '../assets/icons/addFriend'
import { colors } from '../helpers/style';
import { screenWidth, screenHeight } from '../helpers/utils'

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme,
    dark: state.theme.dark

});

function FriendsScreen({ ...props }) {
    const { user, navigation, theme, dark } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState('')
    const [resultName, setResultName] = useState('')
    const [friendsArray, setFriendsArray] = useState([])

    useEffect(() => {
        if (user) {
            let arr = []
            const friendsArr = user.friends
            friendsArr.map(fr => { getFriendsFromFirestore(fr, arr) })
        }
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    const userRef = firebase.firestore().collection("users");
    const notifiactionRef = firebase.firestore().collection("notifications");

    const handleSearch = (queryText) => {
        setSearchQuery(queryText)
        userRef.where("username", "==", queryText)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let res = doc.data();
                    setResult(res)
                    let resId = res.id
                    let resUsername = res.username
                    console.log(friendsArray)
                    if ((friendsArray.indexOf(resId) === -1)) {
                        setResultName(resUsername)
                    }
                });
                if (resultName === '')
                    setResultName("No result")
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    };

    const sendNotificationToAddFriend = (id) => {
        notifiactionRef.doc().set({
            user: user.id,
            username: user.username,
            friend: id,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    const Item = ({ title, profile }) => (
        <View style={styles.item}>
            {profilePicture(profile, 50)}
            <Text style={styles.title}>{title}</Text>
            <Icon name="ellipsis-v" size={20} color={themeStyle.textGray} style={styles.iconArangeGoal} onPress={() => alert("geru")} />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} profile={item.profile} />
    );

    const getFriendsFromFirestore = (id, arr) => {
        const friendRef = firebase.firestore().collection('users').doc(id);
        friendRef.get()
            .then(doc => {
                const data = doc.data();
                const friendInfo = { id: id, title: data.username, profile: data.profile }
                arr.push(friendInfo)
                setFriendsArray(arr)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            {dark ?
                <HeaderGradientDark width={screenWidth * 1.2} height={screenHeight / 100 * 19} style={{ flex: 1, position: 'absolute' }} />
                :
                <HeaderGradient width={screenWidth * 1.2} height={screenHeight / 100 * 19} style={{ flex: 1, position: 'absolute' }} />
            }
            <View style={styles.topText}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={styles.backButton}>
                        <Back />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textTop}>Friends</Text>
            </View>

            <View style={styles.bodyView}>
                <Searchbar
                    placeholder="Search for users"
                    placeholderTextColor={themeStyle.textGray}
                    color={themeStyle.textColor}
                    onChangeText={queryText => setSearchQuery(queryText)}
                    value={searchQuery}
                    onSubmitEditing={() => handleSearch(searchQuery)}
                    style={styles.searchBar}
                    iconColor={themeStyle.linkBlue}
                />
                {resultName === 'No result' && searchQuery != '' ?
                    <Text style={styles.noResultText}>No result.</Text>
                    :
                    resultName != '' && resultName != 'No result' ?
                        <View style={{ ...styles.item, marginTop: 10 }}>
                            {profilePicture(result.profile)}
                            <Text style={styles.title}>{resultName}</Text>
                            <AddFriend onPress={() => sendNotificationToAddFriend(result.id)} />
                        </View>
                        :
                        null
                }
                <View>
                    {friendsArray.length === 0 ?
                        <View style={styles.planetView}>
                            <Text style={{ ...styles.headerText, alignSelf: 'flex-start', marginTop: 20, marginBottom: '5%' }}>My Friends</Text>
                            <Text style={styles.noFriendsText}>Add friends so you can see them here.</Text>
                            <Planet height={250} width={250} />
                        </View>
                        :

                        <FlatList
                            ListHeaderComponent={<Text style={styles.headerText}>My Friends</Text>}
                            ListHeaderComponentStyle={{ marginBottom: 10 }}
                            data={friendsArray}
                            renderItem={renderItem}
                            keyExtractor={item => item.title}
                            ItemSeparatorComponent={() => (<Divider style={styles.divider} />)}
                            style={{ marginTop: 20 }}
                        />}
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
    searchBar: {
        backgroundColor: themeStyle.tabBar,
        height: 45,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: themeStyle.button,
        elevation: 0,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        flex: 15,
        fontSize: 18,
        paddingLeft: 10,
        color: themeStyle.textColor
    },
    divider: {
        marginTop: "1%",
        backgroundColor: themeStyle.textGray,
        height: 1,
        width: '90%',
        alignSelf: 'center'
    },
    iconArangeGoal: {
        flex: 1,
    },
    bodyView: {
        flex: 1,
        width: '90%'
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: themeStyle.textColor
    },
    noResultText: {
        alignSelf: 'center',
        marginTop: "5%",
        fontSize: 18,
        color: themeStyle.textColor,
    },
    planetView: {
        alignItems: 'center'
    },
    noFriendsText: {
        marginBottom: "25%",
        fontStyle: 'italic',
        fontSize: 16,
        color: themeStyle.textColor,
    }
});

export default connect(mapStateToProps)(FriendsScreen);
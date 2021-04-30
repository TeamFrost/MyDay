import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, FlatList } from 'react-native';
import { Searchbar, Divider, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { firebase } from '../firebase/config'
import { profilePicture } from '../helpers/functions'

import HeaderGradient from '../assets/backgrounds/headerGradientBlue';
import Back from '../assets/others/back.js';
import ProfileMale from '../assets/profiles/profileMale'
import AddFriend from '../assets/icons/addFriend'
import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const theme = colors.light;

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

const DATA = [
    {
        title: 'Brooklyn Williamson',
    },
    {
        title: 'Julie Watson',
    },
    {
        title: 'Jenny Alexander',
    },
];

function FriendsScreen({ ...props }) {
    const { user, navigation } = props

    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState('')
    const [resultName, setResultName] = useState('')

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
                    setResultName(res.username)
                });
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

    const Item = ({ title }) => (
        <View style={styles.item}>
            <ProfileMale width={50} height={50} />
            <Text style={styles.title}>{title}</Text>
            <Icon name="ellipsis-v" size={20} color={theme.textGray} style={styles.iconArangeGoal} onPress={() => alert("geru")} />
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={screenHeight / 100 * 19} style={{ flex: 1, position: 'absolute' }} />

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
                    onChangeText={queryText => setSearchQuery(queryText)}
                    value={searchQuery}
                    onSubmitEditing={() => handleSearch(searchQuery)}
                    style={styles.searchBar}
                    iconColor={theme.linkBlue}
                />
                {resultName != '' ?
                    <View style={{ ...styles.item, marginTop: 10 }}>
                        {profilePicture(result.profile)}
                        <Text style={styles.title}>{resultName}</Text>
                        <AddFriend onPress={() => sendNotificationToAddFriend(result.id)} />
                    </View>
                    :
                    null
                }
                <View>
                    <FlatList
                        ListHeaderComponent={<Text style={styles.headerText}>My Friends</Text>}
                        ListHeaderComponentStyle={{ marginBottom: 10 }}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                        ItemSeparatorComponent={() => (<Divider style={styles.divider} />)}
                        style={{ marginTop: 20 }}
                    />
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
    searchBar: {
        height: 45,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: theme.button,
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
    },
    divider: {
        marginTop: "1%",
        backgroundColor: theme.textGray,
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
        color: theme.textColor
    },
});

export default connect(mapStateToProps)(FriendsScreen);
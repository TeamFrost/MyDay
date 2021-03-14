import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import GoalIcon from '../assets/others/goal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';



import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const theme = colors.light;

const DATA = [
    {
        title: 'Study for Test',
        time: '3 days left',
    },
    {
        title: 'Learn Spanish',
        time: '5 days left',
    },
    {
        title: 'Finish Project',
        time: '8 days left',
    },
    {
        title: 'Submit Work',
        time: '9 days left',
    },
    {
        title: 'Submit Work1',
        time: '9 days left',
    },
    {
        title: 'Submit Work2',
        time: '9 days left',
    },
    {
        title: 'Submit Work3',
        time: '9 days left',
    },
    {
        title: 'Submit Work4',
        time: '9 days left',
    },
    {
        title: 'Submit Work5',
        time: '9 days left',
    },
    {
        title: 'Submit Work6',
        time: '9 days left',
    },

]

export default function GoalsScreen() {

    const Item = ({ title, time }) => (
        <View>
            <LinearGradient colors={['#F8D7F67F', '#D4C3FC7F', '#BBD4FF7F']} style={styles.card} start={[0, 0]} end={[1, 0]}>
                <GoalIcon height={40} width={40} />
                <View style={{ flex: 1, paddingLeft: 15 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{time}</Text>
                </View>
                <Icon name="ellipsis-v" size={20} color={theme.textGray} style={styles.iconArangeGoal} />
            </LinearGradient>

        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} time={item.time} />
    );

    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
            <View style={styles.topText}>
                <Text style={styles.textTop}>Goals</Text>
                <Text style={styles.subtextTop} onPress={() => { console.log('goal new') }}>Add a new goal +</Text>
            </View>

            <View style={styles.flatListDiv}>
                <FlatList
                    data={DATA}
                    contentContainerStyle={{ padding: '5%' }}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                />
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
});
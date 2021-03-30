import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';
import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import GoalIcon from '../assets/others/goal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';

import HeaderGradient from '../assets/backgrounds/headerGradientPink';
import GoalIcon from '../assets/others/goal';
import { colors } from '../helpers/style';

const screenWidth = Dimensions.get('screen').width;
const theme = colors.light;

const DATA = [
    {
        key: 1,
        title: 'Study for Test',
        time: '3 days left',
    },
    {
        key: 2,
        title: 'Learn Spanish',
        time: '5 days left',
    },
    {
        key: 3,
        title: 'Finish Project',
        time: '8 days left',
    },
    {
        key: 4,
        title: 'Submit Work',
        time: '9 days left',
    },
    {
        key: 5,
        title: 'Submit Work1',
        time: '9 days left',
    },
    {
        key: 6,
        title: 'Submit Work2',
        time: '9 days left',
    },
    {
        key: 7,
        title: 'Submit Work3',
        time: '9 days left',
    },
    {
        key: 8,
        title: 'Submit Work4',
        time: '9 days left',
    },
    {
        key: 9,
        title: 'Submit Work5',
        time: '9 days left',
    },
    {
        key: 10,
        title: 'Submit Work6',
        time: '9 days left',
    },

]

const mapStateToProps = (state) => ({
    user: state.auth.user,
    theme: state.theme
});

function GoalsScreen({ ...props }) {

    const { user, navigation } = props

    const Item = ({ title, time, index }) => {
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
        return (
            <Animated.View style={{ transform: [{ scale }], opacity }} >
                <LinearGradient colors={['#F8D7F67F', '#D4C3FC7F', '#BBD4FF7F']} style={styles.card} start={[0, 0]} end={[1, 0]}>
                    <GoalIcon height={40} width={40} />
                    <View style={{ flex: 1, paddingLeft: 15 }}>
                        <Text style={styles.title}>{title}</Text>
                        <Text>{time}</Text>
                    </View>
                    <Icon name="ellipsis-v" size={20} color={theme.textGray} style={styles.iconArangeGoal} />
                </LinearGradient>

            </Animated.View>
        );
    }

    const renderItem = ({ item, index }) => (
        <Item title={item.title} time={item.time} index={index} />
    );

    const scrollY = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <HeaderGradient width={screenWidth * 1.2} height={"22%"} style={{ flex: 1, position: 'absolute' }} />
            <View style={styles.topText}>
                <Text style={styles.textTop}>Goals</Text>
                <Text style={styles.subtextTop} onPress={() => { console.log('goal new') }}>Add a new goal +</Text>
            </View>

            <View style={styles.flatListDiv}>
                <Animated.FlatList
                    data={DATA}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
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


export default connect(mapStateToProps)(GoalsScreen);
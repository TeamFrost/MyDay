import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../helpers/style';

const theme = colors.light;

const mapStateToProps = (state) => ({ theme: state.theme });

function WorkoutQuizScreen({ ...props }) {
    const { user, navigation } = props

    return (
        <View style={styles.container}>
            <Text>Workout Quiz</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(mapStateToProps)(WorkoutQuizScreen);
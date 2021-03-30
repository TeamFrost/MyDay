import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from '../redux/actions/auth/auth';

import { colors } from '../helpers/style';

const theme = colors.light;

const mapStateToProps = (state) => ({
    doneFetching: state.auth.doneFetching,
    isFetching: state.auth.isFetching,
    hasError: state.auth.hasError,
    errorMessage: state.auth.errorMessage,
    user: state.auth.user,
    theme: state.theme
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
});

function SettingsScreen({ ...props }) {
    const { user, navigation, doneFetching, logoutUser } = props

    const handleLogoutPress = () => {
        console.log("Logout")
        logoutUser()
    }

    useEffect(() => {
        if (doneFetching) {
            if (user === null) {
                navigation.navigate('LoginStack')
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <TouchableHighlight
                onPress={handleLogoutPress}
                style={{
                    backgroundColor: theme.lightViolet,
                    width: '40%',
                    height: 45,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>Logout</Text>
            </TouchableHighlight>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
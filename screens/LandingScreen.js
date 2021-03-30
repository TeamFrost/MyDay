import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { getData } from "../helpers/storage"
import { restoreSession } from '../redux/actions/auth/auth';

import Icon from '../assets/icon'
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
    restoreSession: () => dispatch(restoreSession()),
    changeTheme: (theme) => dispatch(changeTheme(theme))
});

function LandingScreen({ ...props }) {

    const { user, doneFetching, navigation, restoreSession, changeTheme } = props;

    useEffect(() => {
        getData('@reportm-theme')
            .then((theme) => {
                if (theme) {
                    changeTheme(theme);
                }
                restoreSession()
            })
            .catch((error) => {
                console.log(error)
            });

    }, []);

    if (doneFetching) {
        setTimeout(() => {
            if (user != null) {
                navigation.navigate('HomeTabs')
            }
            else {
                navigation.navigate('LoginStack')
            }
        }, 2000);
    }

    return (
        <View style={styles.container}>
            <Icon height="250" width="250" />
            <Text style={styles.text}>My Day</Text>
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
    text: {
        fontSize: 48,
        padding: 30,
        letterSpacing: -2.5,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);

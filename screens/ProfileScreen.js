import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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

function ProfileScreen({ ...props }) {
    const { user, doneFetching, navigation, logoutUser } = props


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
            <Text>Profile</Text>
            <Button
                onPress={handleLogoutPress}
                title="Logout"
                color="#841584"
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
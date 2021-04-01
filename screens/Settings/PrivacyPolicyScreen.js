import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../helpers/style';

const theme = colors.light;

const mapStateToProps = (state) => ({ theme: state.theme });

function PrivacyPolicyScreen({ ...props }) {
    const { user, navigation } = props

    return (
        <View style={styles.container}>
            <Text onPress={() => Linking.openURL('https://www.privacypolicies.com/live/3f433032-b9fd-4db7-913c-e90be36e6425')}>Privacy Policy</Text>
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

export default connect(mapStateToProps)(PrivacyPolicyScreen);
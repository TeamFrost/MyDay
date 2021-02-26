import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Icon from '../../assets/settings/changePassword';
import LockIcon from '../../assets/icons/lockIcon';
import EyeIcon from '../../assets/icons/eyeIcon';

import { colors } from '../../helpers/style';
import { useNavigation } from '@react-navigation/native';

const theme = colors.light;

export default function CreateNewPasswordScreen() {

    const navigation = useNavigation();
    const [pass, setPass] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [invisible, setInvisible] = useState(true);
    const [invisibleRepeat, setInvisibleRepeat] = useState(true);

    const handleLoginPress = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>

            <View style={styles.introTextDiv}>
                <Text style={styles.introText}>Create new password</Text>
                <Text style={styles.subIntroText}>Your new password must be different from previously used passwords</Text>
            </View>

            <Icon />

            <View style={styles.sendView}>

                <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#E8B7E5', '#D4C3FC', '#5C8DF7']} style={styles.linearGradient}>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={invisible}
                            value={pass}
                            onChangeText={pass => setPass(pass)}
                            style={styles.input}
                        />
                        <LockIcon style={styles.leftIconInput} />
                        <EyeIcon onPress={() => setInvisible(!invisible)} style={styles.rightIconInput} />
                    </View>
                </LinearGradient>

                <LinearGradient start={[0, 0]} end={[1, 1]} colors={['#E8B7E5', '#D4C3FC', '#5C8DF7']} style={styles.linearGradient}>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder="Confirm Password"
                            secureTextEntry={invisibleRepeat}
                            value={passRepeat}
                            onChangeText={passRepeat => setPassRepeat(passRepeat)}
                            style={styles.input}
                        />
                        <LockIcon style={styles.leftIconInput} />
                        <EyeIcon onPress={() => setInvisibleRepeat(!invisibleRepeat)} style={styles.rightIconInput} />
                    </View>
                </LinearGradient>

                <View style={styles.sendTextView}>
                    <TouchableHighlight
                        onPress={handleLoginPress}
                        underlayColor="#DDDDDD"
                        style={{ width: '100%', borderRadius: 20 }}
                    >
                        <View style={styles.sendButton}>
                            <Text style={{ ...styles.sendText, fontSize: 20 }}>Confirm</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View >
            <View style={styles.redirectView} />
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
    introTextDiv: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    introText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subIntroText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: '2%',
        color: theme.textGray
    },
    inputView: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        borderRadius: 30,
        height: 50,
        paddingLeft: 55,
    },
    leftIconInput: {
        position: "absolute",
        left: 20,
    },
    rightIconInput: {
        position: "absolute",
        right: 20,
    },
    sendTextView: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    sendButton: {
        backgroundColor: theme.button,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
        elevation: 5,
    },
    sendText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: theme.backgroundColor,
    },
    sendView: {
        flex: 2,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    redirectView: {
        flex: 0.4,
    },
    linearGradient: {
        width: '100%',
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 30,
        height: 56,
        justifyContent: 'center',
    },
});
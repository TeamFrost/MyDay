import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../helpers/style';
import { screenWidth, screenHeight } from '../../helpers/utils'

const mapStateToProps = (state) => ({ theme: state.theme });

function CustomizeCategoryScreen({ ...props }) {
    const { navigation, theme } = props

    const [styles, setStyles] = useState(styleSheetFactory(colors.light))
    const [themeStyle, setThemeStyle] = useState(colors.light)

    useEffect(() => {
        if (theme) {
            setThemeStyle(theme.theme)
            setStyles(styleSheetFactory(theme.theme))
        }
    }, [theme])

    return (
        <View style={styles.container}>
            <Text>Customize Category</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styleSheetFactory = (themeStyle) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeStyle.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(mapStateToProps)(CustomizeCategoryScreen);
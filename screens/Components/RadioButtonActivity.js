import React from 'react';
import { View } from 'react-native';
import { colors } from '../../helpers/style';

const theme = colors.light;

export default function RadioButtonActivity(props) {
    return (
        <View style={[{
            height: 26,
            width: 26,
            borderRadius: 13,
            borderWidth: 2,
            borderColor: theme.linkBlue,
            alignItems: 'center',
            justifyContent: 'center',
        }, props.style]}>
            {
                props.selected ?
                    <View style={{
                        height: 13,
                        width: 13,
                        borderRadius: 6,
                        backgroundColor: theme.linkBlue,
                    }} />
                    : null
            }
        </View>
    );
}
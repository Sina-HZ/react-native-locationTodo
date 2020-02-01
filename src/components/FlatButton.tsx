import React, { FunctionComponent, useState } from 'react';
import { TouchableOpacity, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { Text } from 'native-base';

interface IFLatButtonProps {
    style?: object;
    text: string;
    children?: any;
    customOnPress: () => any;
    textStyle?: object;
    disabled?: boolean;
}

const FlatButton: FunctionComponent<IFLatButtonProps> = ({ disabled, style, text, customOnPress, children, textStyle }) => {
    return (
        <TouchableOpacity
            style={style ? (disabled ? [style, { backgroundColor: '#ccc' }] : style) : (disabled ? [{ backgroundColor: '#ccc' }, styles.submitBtn] : {...styles.submitBtn, backgroundColor: '#42a7ff'})}
            onPress={customOnPress}
            disabled={disabled}
        >
            {children ? children : <Text style={textStyle ? textStyle : styles.btnText}>{text}</Text>}
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnText: {
        color: '#000',
        fontSize: 20,
        width: '100%',
        textAlign: 'center'
    },
    submitBtn: {
        borderRadius: 15,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 40,
        marginTop: 20,
        paddingVertical: 10,
    },
    disabled: {
        backgroundColor: 'red'
    }
})
export default FlatButton;
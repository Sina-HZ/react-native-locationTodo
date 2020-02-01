import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, CheckBox } from 'native-base';
interface ICustomCheckBox {
    title: string;
    rowStyle?: object;
    checked: boolean;
    handlePress: () => void;
}
const CustomCheckBox: FunctionComponent<ICustomCheckBox> = ({ title, rowStyle, checked, handlePress }) => {
    return (
        <TouchableOpacity style={rowStyle ? [rowStyle, styles.optionRow] : styles.optionRow} onPress={handlePress}>
            <CheckBox checked={checked} onPress={handlePress} />
            <Text style={styles.titleOption}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom : 5
    },
    titleOption: {
        fontSize: 14,
        marginLeft: 15
    },
});
export default CustomCheckBox;
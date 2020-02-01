import React, { FunctionComponent } from "react";
import { View, Text, Icon } from "native-base";
import { TouchableOpacity } from "react-native";

interface IHeaderBackButton {
    title: string;
    onPressBackButton?: () => any;
    onPressInfo?: () => any;
}

const HeaderBackButton: FunctionComponent<IHeaderBackButton> = ({ title, onPressBackButton, onPressInfo }) => {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, width: '100%', paddingVertical: 8 }}>
            {onPressBackButton ? <TouchableOpacity style={{ width: '20%', marginRight: 'auto' }} onPress={() => onPressBackButton()}>
                <Icon name="arrow-round-back" style={{ color: '#42a7ff' }} />
            </TouchableOpacity> : <View style={{ width: '20%', marginRight: 'auto' }}></View>}
            <Text style={{ flex: 1, fontSize: 15, textAlign: 'center' }} >{title}</Text>
            {onPressInfo ? <TouchableOpacity style={{ width: '20%', marginLeft: 'auto' }} >
                <Icon name="information-circle-outline" style={{ color: '#42a7ff', textAlign: 'right' }} />
            </TouchableOpacity> : <View style={{ width: '20%', marginLeft: 'auto' }}></View>}
        </View>
    );
}
export default HeaderBackButton;
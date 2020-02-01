import React, { useContext, useEffect, useState } from 'react';
import { TaskStateContext } from '../../context/taskProvider';
import { Item, Label, Input, Textarea, Form } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import CustomCheckBox from '../../components/CheckBox';


const StepOne = (props : any) => {
    const {handleInput, inputVal} = props;

    return (
        <View style={styles.container}>
            <Form>
                <Item regular style={styles.textBoxWrap}>
                    <Input
                        onChangeText={(text) => handleInput(text,'name')}
                        value={inputVal.name}
                        placeholder="Name"
                    />
                </Item>
                <View style={styles.textBoxWrap}>
                    <Textarea
                        rowSpan={5}
                        bordered
                        value={inputVal.description}
                        placeholder="Description"
                        placeholderTextColor='#828282'
                        onChangeText={(text) => handleInput(text,'description')}
                        underline 
                        style={styles.textBox}
                    />
                </View>
            </Form>
            <View style={{flex : 1}}>
                <Text>Task Status</Text>
                <View style={styles.checkBoxWrap} >
                    <CustomCheckBox title='Done' checked={inputVal.status === 'Done' ? true : false} handlePress={() => handleInput('Done','status')} />
                    <CustomCheckBox title='Doing' checked={inputVal.status === 'Doing' ? true : false} handlePress={() => handleInput('Doing','status')} />
                    <CustomCheckBox title='Todo' checked={inputVal.status === 'Todo' ? true : false} handlePress={() => handleInput('Todo','status')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
        marginTop : 20
    },
    checkBoxWrap: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    textBoxWrap : {
        borderWidth : 1,
        borderColor : '#333',
        marginVertical : 10,
        borderRadius : 4
    },
    textBox: {
        borderColor: 'transparent',
        textAlign: 'left',
        direction: 'ltr',
    },
})

export default StepOne;
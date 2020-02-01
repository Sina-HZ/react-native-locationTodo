import React, { useContext } from 'react';
import MainLayout from '../components/MainLayout';
import FlatButton from '../components/FlatButton';
import { View } from 'native-base';
import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TaskStateContext } from '../context/taskProvider';


const Home = (props: any) => {
    const {state , dispatch} = useContext(TaskStateContext)
    const {navigate} = props.navigation;

    const handleAddBtn = () => {
        navigate('AddTask')
    }


    return (
        <MainLayout headerTitle='Home' main="View">
            {state!.length === 0 && <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <FlatButton customOnPress={() => handleAddBtn()} text="Add New Task" />
            </View>}
            {state!.length > 0 && <React.Fragment>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                    {state!.map((item: { name: string, status: string ,description : string}, index: number) => (
                        <View key={index} style={styles.card}>
                            <View >
                                <Text style={styles.cardTitle}>{item.name}</Text>
                                {item.status === 'Done' && <Text style={{ color: '#17e37d' }}>{item.status}</Text>}
                                {item.status === 'Doing' && <Text style={{ color: '#f7bd0f' }}>{item.status}</Text>}
                                {item.status === 'Todo' && <Text style={{ color: '#cbcbcb' }}>{item.status}</Text>}
                            </View>
                            <View >
                                <TouchableOpacity style={[{ backgroundColor: 'red' }, styles.cardBtn]} onPress={()=> dispatch!({type: 'removeTask',payload : index})}>
                                    <Text>Remove</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[{ backgroundColor: '#ffe100' }, styles.cardBtn]} onPress={()=>navigate('AddTask',{item,index})}>
                                    <Text>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.floatBtn} onPress={()=>handleAddBtn()}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </React.Fragment>
            }
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        paddingLeft: 10,
        paddingVertical: 10
    },
    cardTitle: {
        fontSize: 24
    },
    cardBtn: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center'
    },
    floatBtn: {
        backgroundColor: '#e0102c',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        position: 'absolute',
        bottom: 15,
        right: 15
    }
})

export default Home;
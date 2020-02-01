import React, { useState, useContext, useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import FlatButton from '../../components/FlatButton';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import { ScrollView } from 'react-native';
import HeaderBackButton from '../../components/HeaderBackButton';
import { TaskStateContext } from '../../context/taskProvider';


const AddTask = (props: any) => {
    const { state, dispatch } = useContext(TaskStateContext)
    const [step, setStep] = useState<number>(1)
    const { navigate } = props.navigation;

    const [inputVal, setInputVal] = useState({
        name: '',
        description: '',
        status: ''
    })
    const [region, setRegion] = useState({
        latitude: 35.745273,
        longitude: 51.388378,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    });
    const [marker, setMarker] = useState<any>(undefined);

    const handleInput = (value: string, name: string) => {
        setInputVal({ ...inputVal, [name]: value })
    }

    const handleRegion = (reg: any) => {
        setRegion({ ...region, ...reg })
    };

    const onMapPress = (e: any) => {
        setMarker({ coordinate: e.nativeEvent.coordinate })
    }

    const handleBack = () => {
        if (step === 1) {
            navigate("Home")
        } else {
            setStep(1)
        }
    }

    const handleSubmit = () => {
        if (props.navigation.getParam('item')) {
            const id = props.navigation.getParam('index')
            dispatch!({ type: 'editTask', payload: { ...inputVal, region, coordinate: marker.coordinate, id } })
            props.navigation.navigate('Home')
        } else {
            dispatch!({ type: 'addTask', payload: { ...inputVal, region, coordinate: marker.coordinate } })
            props.navigation.navigate('Home')
        }

    }

    useEffect(() => {
        if (props.navigation.getParam('item')) {
            const editItem = props.navigation.getParam('item')
            setInputVal({ name: editItem.name, description: editItem.description, status: editItem.status })
            setRegion(editItem.region)
            setMarker({ coordinate: editItem.coordinate })
        }
    }, [])

    return (
        <MainLayout main='View' headerView={<HeaderBackButton title="Add new Task" onPressBackButton={() => handleBack()} />} >
            <ScrollView >
                {step === 1 && <StepOne handleInput={handleInput} inputVal={inputVal} />}
                {step === 2 && <StepTwo handleRegion={handleRegion} onMapPress={onMapPress} region={region} marker={marker} />}
            </ScrollView>
            <FlatButton text="Next Step" customOnPress={() => { step === 1 ? setStep(2) : handleSubmit() }} />
        </MainLayout>
    )
}

export default AddTask;
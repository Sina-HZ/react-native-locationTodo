import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const StepTwo = (props:any) => {

    const {handleRegion, onMapPress, region, marker} = props;


    return (
        <React.Fragment>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={region}
                    onRegionChangeComplete={(region)=> handleRegion(region)}
                    onPress={(e)=>onMapPress(e)}
                >
                        {marker && <Marker 
                        coordinate={marker.coordinate}
                        pinColor='red' />}
                </MapView>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default StepTwo;
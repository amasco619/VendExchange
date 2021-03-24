/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

const MapMarker = (props) => {
    const { coordinate, price, onPress, isSelected } = props;

    return (
        <Marker coordinate={coordinate} onPress={onPress} pinColor='#54a0d6'>
            <Callout>
                <View style={{
                    backgroundColor: 'white',
                    padding: 5,
                }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>N{price}</Text>
                </View>
            </Callout>
        </Marker>
    );
};

export default MapMarker;

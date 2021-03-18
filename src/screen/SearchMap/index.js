/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapMarker from '../../components/MapMarker';
import places from '../../../assests/data/feed';


//https://www.npmjs.com/package/react-native-maps
const SearchMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}>
                {places.map((place, key) => (
                    <MapMarker key={key}
                        isSelected={place.id === selectedPlaceId}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>
        </View>
    );
};

export default SearchMap;

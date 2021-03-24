import React, { useEffect, useRef, useState } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapMarker from '../../components/MapMarker';
import PostCarousel from '../../components/PostCarousel'
import places from '../../../assests/data/feed';

//https://www.npmjs.com/package/react-native-maps
const SearchMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const width = useWindowDimensions().width

    const scrollList = useRef()
    const mapAnime = useRef()

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })
    const onViewChange = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !scrollList) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        scrollList.current.scrollToIndex({ index })

        const selectedPlace = places[index]
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.09,
        }
        mapAnime.current.animateToRegion(region)
    }, [selectedPlaceId])

    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={mapAnime}
                provider={PROVIDER_GOOGLE}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 6.480322196311053,
                    longitude: 3.382580923907712,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.09,
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

            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    ref={scrollList}
                    data={places}
                    renderItem={({ item }) => <PostCarousel post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChange.current}
                />
            </View>
        </View>
    );
};

export default SearchMap;

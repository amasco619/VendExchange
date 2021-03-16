import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import Search from '../../../assests/data/Search'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationRow from './LocationRow'

const SearchList = () => {

    const navigation = useNavigation()

// React Native Google Place - yarn add react-native-google-places-autocomplete
//https://www.npmjs.com/package/react-native-google-places-autocomplete
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Choose a location'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Home', {
                        screen: 'Search',
                        params: {
                            screen: 'SearchResults'
                        }
                    })
                }}
                fetchDetails
                styles={{textInput: styles.textInput}}
                query={{
                    key: 'AIzaSyA9WAn2l5GbzkUsKvtaM6jsOlIsBvZWd0I',
                    language: 'en',
                    components: 'country:ng',
                    types: '(cities)',
                }}
                suppressDefaultStyles
                renderRow={(item) => <LocationRow item={item} />}
            />
            
            {/* Search result List of Locations */}
            <FlatList 
                data={Search}
                renderItem={({item}) => (
                    <Pressable 
                        onPress={() => navigation.navigate('Home', {
                            screen: 'Search',
                            params: {
                                screen: 'SearchResults'
                            }
                        })}
                        style={styles.row} >
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )} />
        </View>
    )
}

export default SearchList

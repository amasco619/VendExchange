import React, { useState } from 'react'
import { View, TextInput, Text, FlatList, Pressable } from 'react-native'
import Search from '../../../assests/data/Search'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

const SearchList = () => {

    const navigation = useNavigation()
    const [input, setInput] = useState("")

    return (
        <View style={styles.container}>
            {/* Input component */}
            <TextInput 
                style={styles.textInput}
                placeholder="What do you seek?"
                value={input}
                onChangeText={setInput}/>
            
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

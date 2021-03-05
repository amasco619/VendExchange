import React, { useState } from 'react'
import { View, TextInput, Text, FlatList } from 'react-native'
import Search from '../../../assests/data/Search'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

const SearchList = () => {

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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )} />
        </View>
    )
}

export default SearchList

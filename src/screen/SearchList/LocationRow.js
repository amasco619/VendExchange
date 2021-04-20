import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

const LocationRow = ({ item }) => (
    <View style={styles.row} >
        <View style={styles.iconContainer}>
            <Entypo name={"location-pin"} size={30} />
        </View>
        <Text style={styles.locationText}>{item.state}</Text>
    </View>
)

export default LocationRow

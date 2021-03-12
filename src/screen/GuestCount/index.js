import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { StyleSheet, Dimensions } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const GuestCount = () => {
    const navigation = useNavigation()
    const [adults, setAdults] = useState(0)

    return (
        <View>
            <Pressable
                style={{
                    backgroundColor: '#fff',
                    height: 50,
                    width: Dimensions.get('screen').width - 20,
                    borderRadius: 25,
                    marginHorizontal: 10,
                    marginBottom: 25,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 20,
                }}
                onPress={() => navigation.navigate('Location Search')}
            >
                <Fontisto name="search" size={25} color={"#3161bd"} />
                <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>  What do you seek?</Text>
            </Pressable>
            {/* Row 1: Adults */}
            <View style={styles.row}>
                <View>
                    <Text style={styles.aText}>Adults</Text>
                    <Text style={styles.cText}>Ages 13 or Above</Text>
                </View>
                {/* Buttons with values */}
                <View style={styles.buttonDesign}>
                    <Pressable 
                        onPress={() => setAdults(Math.max(0, adults - 1))}
                        style={styles.button}
                    >
                        <Text style={styles.sign}>-</Text>
                    </Pressable>

                    <Text style={styles.count}>{adults}</Text>

                    <Pressable 
                        onPress={() => setAdults (adults + 1)}
                        style={styles.button}
                    >
                        <Text style={styles.sign}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default GuestCount

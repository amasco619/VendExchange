import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const GuestCount = () => {
    const [adults, setAdults] = useState(0)

    return (
        <View>
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

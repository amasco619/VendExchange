import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const Request = (props) => {

    const reqItem = props.reqItem

    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.aText} numberOfLines={2}>{reqItem.description}</Text>
                    <Text style={styles.aText}>{reqItem.name}</Text>
                </View>
                {/* Buttons with values */}
                <View>
                    <Pressable
                        onPress={() => console.warn('Pressed')}
                        style={styles.button}
                    >
                        <Text style={styles.sign}>iGet</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Request

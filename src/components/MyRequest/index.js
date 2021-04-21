import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const MyRequest = (props) => {

    const reqItem = props.reqItem

    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.nameText}>{reqItem.name}</Text>
                    <Text style={styles.descriptionText} numberOfLines={2}>{reqItem.description}</Text>
                </View>
                {/* Buttons with values */}
                <View>
                    <Pressable
                        onPress={() => console.warn('Request is deleted')}
                        style={styles.button}
                    >
                        <Text style={styles.sign}>Delete</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default MyRequest

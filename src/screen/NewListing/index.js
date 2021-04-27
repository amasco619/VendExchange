import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

const NewListing = () => {

    const [inputText, setInputText] = useState('')

    return (
        <View style={{ paddingLeft: 10, }}>
            <Text>Here we Upload the new listing</Text>
            <TextInput
                style={styles.title}
                placeholder='title'
                value={inputText}
                onChange={setInputText}
            />
        </View>
    )
}

export default NewListing

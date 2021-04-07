import React from 'react'
import { View, Text, FlatList } from 'react-native'
import require from '../../../assests/data/require'
import Request from '../../components/Request'

const RequestScreen = () => {

    return (
        <View>
            <FlatList
                data={require}
                renderItem={({ item }) => <Request reqItem={item} />} />
        </View>
    )
}

export default RequestScreen

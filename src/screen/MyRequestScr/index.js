import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ItemReq from '../../../assests/data/ItemReq'
import MyRequest from '../../components/MyRequest'

const MyRequestScr = () => {

    return (
        <View>
            <FlatList
                data={ItemReq}
                renderItem={({ item }) => <MyRequest reqItem={item} />} />
        </View>
    )
}

export default MyRequestScr

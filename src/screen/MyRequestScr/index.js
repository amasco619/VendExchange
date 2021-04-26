import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import ItemReq from '../../../assests/data/ItemReq'
import MyRequest from '../../components/MyRequest'

const MyRequestScr = () => {

    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
            <View>
                <FlatList
                    data={ItemReq}
                    renderItem={({ item }) => <MyRequest reqItem={item} />} />
            </View>

            <Pressable
                style={{
                    backgroundColor: '#378be6',
                    bottom: 30,
                    right: 15,
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                }}
                onPress={() => console.warn('Request Button Pressed')}>
                <Text style={{
                    fontSize: 35,
                    color: 'white',
                }}>
                    +</Text>
            </Pressable>
        </View>

    )
}

export default MyRequestScr

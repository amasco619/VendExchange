import React from 'react'
import { View, FlatList, Pressable, Text } from 'react-native'
import ListItem from '../../../assests/data/ListItem'
import MyListing from '../../components/MyListing'


const Listing = () => {
    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
            <View>
                <FlatList
                    data={ListItem}
                    renderItem={({ item }) => <MyListing post={item} />} />
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
                onPress={() => console.warn('Listing Button Pressed')}>
                <Text style={{
                    fontSize: 35,
                    color: 'white',
                }}>
                    +</Text>
            </Pressable>
        </View>

    )
}

export default Listing

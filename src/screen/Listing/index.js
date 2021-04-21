import React from 'react'
import { View, FlatList } from 'react-native'
import ListItem from '../../../assests/data/ListItem'
import MyListing from '../../components/MyListing'


const Listing = () => {
    return (
        <View>
            <FlatList
                data={ListItem}
                renderItem={({ item }) => <MyListing post={item} />} />
        </View>
    )
}

export default Listing

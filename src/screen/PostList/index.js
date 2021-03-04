import React from 'react'
import { View, FlatList } from 'react-native'
import feed from '../../../assests/data/feed'
import Post from '../../components/Post'

const PostList = () => {
    return (
        <View>
            <FlatList 
                data={feed}
                renderItem={({item}) => <Post post={item}/>}/>
        </View>
    )
}

export default PostList

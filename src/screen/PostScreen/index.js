import React from 'react'
import { View, Text } from 'react-native'
import DetailedPost from '../../components/DetailedPost'
import feed from '../../../assests/data/feed'
import { useRoute } from '@react-navigation/native'


const PostScreen = () => {
    const route = useRoute()

    item = feed.find(place => place.id === route.params.postId)

    return (
        <View>
            <DetailedPost post={item} />
        </View>
    )
}

export default PostScreen

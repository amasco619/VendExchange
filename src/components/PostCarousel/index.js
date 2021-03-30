import React from "react"
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native"
import styles from "./styles"
import { useNavigation } from '@react-navigation/native'

const Post = (props) => {

    const post = props.post
    const width = useWindowDimensions().width

    const navigation = useNavigation()

    const goToPage = () => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <Pressable onPress={goToPage} style={[styles.container, { width: width - 60 }]}>
            <View style={styles.innerContainer}>
                {/* image */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}
                />

                <View style={{ flex: 1, marginHorizontal: 7 }}>
                    {/* owner & product */}
                    <Text style={styles.name}>{post.name}: {post.location}</Text>

                    {/* Type and Description */}
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}</Text>

                    {/* Price */}
                    <Text style={styles.price}>
                        <Text style={styles.newPrice}>N{post.newPrice}</Text>
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Post;
import React from "react"
import { View, Text, Image, Pressable } from "react-native"
import styles from "./styles"
import { useNavigation } from '@react-navigation/native'

const Post = (props) => {

    const post = props.post

    const navigation = useNavigation()

    const goToPage = () => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <Pressable onPress={goToPage} style={styles.container}>
            {/* image */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            />
            {/* owner & product */}
            <Text style={styles.name}>{post.name}: {post.location}</Text>

            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}</Text>

            {/* Price */}
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>N{post.oldPrice}</Text>
                <Text style={styles.newPrice}>  N{post.newPrice}</Text>
            </Text>

            {/* number */}
            {/* <Text style={styles.number}>{post.number}</Text> */}
        </Pressable>
    )
}

export default Post;
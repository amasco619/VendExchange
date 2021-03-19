import React from "react"
import { View, Text, Image, useWindowDimensions } from "react-native"
import styles from "./styles"

const Post = (props) => {

    const post = props.post
    const width = useWindowDimensions().width

    return (
        <View style={[styles.container, { width: width - 60 }]}>
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
        </View>
    )
}

export default Post;
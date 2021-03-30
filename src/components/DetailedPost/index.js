import React from "react"
import { View, Text, Image, ScrollView } from "react-native"
import styles from "./styles"

const DetailedPost = (props) => {

    const post = props.post

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* image */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}
                />
                {/* owner & product */}
                <Text style={styles.name}>{post.name}: {post.location}</Text>

                {/* Type and Description */}
                <Text style={styles.description}>
                    {post.type}. {post.title}</Text>

                {/* Price */}
                <Text style={styles.price}>
                    <Text style={styles.newPrice}>N{post.newPrice}</Text>
                </Text>

                {/* number */}
                {/* <Text style={styles.number}>{post.number}</Text> */}
            </View>
        </ScrollView>
    )
}

export default DetailedPost;
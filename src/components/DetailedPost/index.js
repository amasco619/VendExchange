import React from "react"
import { View, Text, Image, ScrollView, Pressable } from "react-native"
import styles from "./styles"

const DetailedPost = (props) => {

    const post = props.post

    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
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

            <Pressable
                onPress={() => console.warn('Notify the Seller')}
                style={{
                    marginBottom: 20,
                    backgroundColor: '#378be6',
                    alignItems: 'center',
                    justifyContent: "center",
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,

                }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Contact Owner</Text>
            </Pressable>
        </View>
    )
}

export default DetailedPost;
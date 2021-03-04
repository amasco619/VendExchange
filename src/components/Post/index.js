import React from "react"
import {View, Text, Image } from "react-native"
import styles from "./styles"

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* image */}
            <Image 
                style={styles.image} 
                source={{uri: props.post.image}}
            />
            {/* owner & product */}
            <Text style={styles.name}>{props.post.name}: {props.post.type}</Text>
            
            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>{props.post.title}</Text>

            {/* Price */}
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>N{props.post.oldPrice}</Text>
                <Text style={styles.newPrice}>  N{props.post.newPrice}</Text>
            </Text>
            
            {/* number */}
            <Text style={styles.number}>{props.post.number}</Text>
        </View>
    )
}

export default Post;
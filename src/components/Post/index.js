import React from "react"
import {View, Text, Image } from "react-native"
import styles from "./styles"

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* image */}
            <Image 
                style={styles.image} 
                source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
            />
            {/* owner & product */}
            <Text style={styles.name}>Piero: Laptop</Text>
            
            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>I have a Laptop for sale at a very cheap rate. Come and patronize me and you won't regret it. I will also give you waranty.</Text>

            {/* Price */}
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>N140,000</Text>
                <Text style={styles.newPrice}>  N110,000</Text>
            </Text>
            
            {/* number */}
            <Text style={styles.number}>08012458899</Text>
        </View>
    )
}

export default Post;
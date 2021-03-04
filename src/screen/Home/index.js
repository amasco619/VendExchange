import React from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomePage = (props) => {
    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn('Search Button pressed')}
            >
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchButtonText}>What do you seek?</Text>
            </Pressable>

            <ImageBackground
                source={require('../../../assests/images/wallpaper.jpg')}
                style={styles.image}>

                <Text style={styles.title}>We Sell It</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Button pressed')}>
                    <Text style={styles.buttonText}>Explore more items</Text>
                </Pressable>
            </ImageBackground>
        </View >
    );
};

export default HomePage;

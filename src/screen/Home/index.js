import React from 'react';
import { View, ImageBackground, Text, useWindowDimensions, Pressable, FlatList } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
import places from '../../../assests/data/feed'
import PostCarousel from '../../components/PostCarousel'

const HomePage = (props) => {
    const navigation = useNavigation()

    const width = useWindowDimensions().width

    return (
        <View>
            <View style={{ justifyContent: 'space-between', height: '82%', backgroundColor: '#fff' }}>
                <Pressable
                    style={styles.searchButton}
                    onPress={() => navigation.navigate('Location Search')}
                >
                    <Fontisto name="search" size={25} color={"#3161bd"} />
                    <Text style={styles.searchButtonText}>  What do you seek?</Text>
                </Pressable>

                <ImageBackground
                    source={require('../../../assests/images/design.png')}
                    style={styles.image}>

                    <Text style={styles.title}>We Sell It</Text>

                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate('Requests')}>
                        <Text style={styles.buttonText}>Explore requests</Text>
                    </Pressable>
                </ImageBackground>
            </View>

            <View>
                <FlatList
                    data={places}
                    renderItem={({ item }) => <PostCarousel post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment="center"
                    decelerationRate="fast"
                />
            </View>
        </View >
    );
};

export default HomePage;

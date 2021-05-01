import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const NewListing = () => {

    const [inputText, setInputText] = useState('')

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <ImageBackground
                                source={require('../../../assests/images/wallpaper.jpg')}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <Icon name='camera' size={35} color='#fff' styles={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                    }} />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <Icon name='format-title' size={20} />
                    <TextInput
                        placeholder='Title'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <MaterialIcons name='description' size={20} />
                    <TextInput
                        placeholder='Description'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Entypo name='price-tag' size={20} />
                    <TextInput
                        placeholder='Price'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <Feather name='phone' size={20} />
                    <TextInput
                        placeholder='Phone'
                        keyboardType='number-pad'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewListing

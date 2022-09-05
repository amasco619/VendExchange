import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const NewListing = () => {

    const [inputText, setInputText] = useState('')

    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Image</Text>
                <Text style={styles.panelSubtitle}>Choose your listing image</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => bottonSheet.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )

    const bottonSheet = React.createRef()
    const animeDrag = new Animated.Value(1)

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottonSheet}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={animeDrag}
                enabledGestureInteraction={true}
            />

            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.1, Animated.multiply(animeDrag, 1.0))
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => bottonSheet.current.snapTo(0)}>
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
            </Animated.View>
        </View>
    )
}

export default NewListing

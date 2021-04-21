import React, { useState } from 'react'
import { View, Text, TextInput, Image, Pressable } from 'react-native'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'

const ProfilePage = () => {

    const navigation = useNavigation()

    const [inputText, setInputText] = useState('')
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.profilePic}
                    source={require('../../../assests/images/marker.jpg')}
                />
                <Text style={styles.profileName}>NAME or email@email.com</Text>
                {/* <TextInput
                    placeholder='title'
                    value={inputText}
                    onChange={setInputText}
                /> */}
            </View>
            <View>
                <Pressable
                    onPress={() => navigation.navigate('Listing')}
                    style={styles.buttons1}
                >
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>My Listing</Text>
                    <Text>View items posted</Text>
                </Pressable>
                <Pressable
                    style={styles.buttons2}
                    onPress={() => navigation.navigate('My Requests')}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>My Requests</Text>
                    <Text>View requests posted</Text>
                </Pressable>
            </View>
            <Pressable
                style={styles.LogOutButton}
                onPress={() => console.warn('LOG OUT')}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Log Out</Text>
            </Pressable>
        </View>
    )
}

export default ProfilePage

import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomePage from '../screen/Home'
import SearchList from '../screen/SearchList';
import GuestCount from '../screen/GuestCount'

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostList from '../screen/PostList';


// https://github.com/oblador/react-native-vector-icons#bundled-icon-sets
//For the Navigation Icons
// https://oblador.github.io/react-native-vector-icons/
const Tab = createBottomTabNavigator()

const HomeNav = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#f15454'
        }}>
            <Tab.Screen 
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="home" size={25} color={color} />
                    )
                }}/>
                
                <Tab.Screen 
                name="Search"
                component={SearchList}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="search" size={25} color={color} />
                    )
                }}/>

                <Tab.Screen 
                name="message"
                component={PostList}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="message-square" size={25} color={color} />
                    )
                }}/>

                <Tab.Screen 
                name="Profile"
                component={GuestCount}
                options={{
                    tabBarIcon: ({color}) => (
                        <EvilIcons name="user" size={25} color={color} />
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default HomeNav

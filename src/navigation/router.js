import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchList from '../screen/SearchList'
import HomeNav from './HomeNav';
import PostList from '../screen/PostList';
import PostScreen from '../screen/PostScreen';
import Listing from '../screen/Listing';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeNav}
                    options={{
                        headerShown: false
                    }} />

                <Stack.Screen
                    name="Location Search"
                    component={SearchList}
                    options={{
                        title: 'Pick a location'
                    }} />

                <Stack.Screen
                    name="Item Search"
                    component={PostList}
                    options={{
                        title: 'Search for items'
                    }} />

                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={{
                        headerShown: false
                    }} />

                <Stack.Screen
                    name="Listing"
                    component={Listing}
                    options={{
                        title: 'My Listing'
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

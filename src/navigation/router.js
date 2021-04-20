import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchList from '../screen/SearchList'
import HomeNav from './HomeNav';
import PostList from '../screen/PostList';
import PostScreen from '../screen/PostScreen';

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

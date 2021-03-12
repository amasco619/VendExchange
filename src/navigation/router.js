import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchList from '../screen/SearchList'
import HomeNav from './HomeNav';
import PostList from '../screen/PostList';

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
                    }}/>

                <Stack.Screen 
                    name="Location Search"
                    component={SearchList}
                    options={{
                        title: 'Search location'
                    }}/>

                <Stack.Screen 
                    name="Item Search"
                    component={PostList}
                    options={{
                        title: 'Search for items'
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

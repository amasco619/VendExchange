import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomePage from '../screen/Home'
import PostList from '../screen/PostList'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={HomePage}
                options={{
                    headerShown: false,
                }} />
        
            <Stack.Screen 
                name="SearchResults"
                component={PostList}
                options={{
                    title: 'Search for items'
                }}/>
        </Stack.Navigator>
    )
}

export default Router

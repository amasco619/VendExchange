import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PostSearchResultTab from './PostSearchResultTab'
import HomePage from '../screen/Home'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='ItemSearch'
                component={HomePage}
                options={{
                    headerShown: false,
                }} />

            <Stack.Screen
                name="SearchResults"
                component={PostSearchResultTab}
                options={{
                    title: 'Available listings'
                }} />
        </Stack.Navigator>
    )
}

export default Router

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomePage from '../screen/Home'
import PostList from '../screen/PostList'
import GuestCount from '../screen/GuestCount'
import PostSearchResultTab from './PostSearchResultTab'


const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='ItemSearch'
                component={GuestCount}
                options={{
                    title: 'All items available',
                }} />
        
            <Stack.Screen 
                name="SearchResults"
                component={PostSearchResultTab}
                options={{
                    title: 'Search for items'
                }}/>
        </Stack.Navigator>
    )
}

export default Router
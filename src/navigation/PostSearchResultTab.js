import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PostList from '../screen/PostList'
import SearchMap from '../screen/SearchMap'

const Tab = createMaterialTopTabNavigator()

const PostSearchResultTab = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#0025c9',
            indicatorStyle: {
                backgroundColor: '#0025c9'
            }
        }}>
            <Tab.Screen name={"list"} component={PostList} />
            <Tab.Screen name={"map"} component={SearchMap} />
        </Tab.Navigator>
    )
}

export default PostSearchResultTab

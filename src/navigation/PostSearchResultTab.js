import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PostList from '../screen/PostList'

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
            <Tab.Screen name={"map"} component={PostList} />
        </Tab.Navigator>
    )
}

export default PostSearchResultTab

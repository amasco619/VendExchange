import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchList from '../screen/SearchList'
import HomeNav from './HomeNav';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Home"}
                    component={HomeNav}
                    options={{
                        headerShown: false
                    }}/>

                <Stack.Screen 
                    name={"Location Search"}
                    component={SearchList}
                    options={{
                        title: 'Search Places'
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

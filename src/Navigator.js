import React, { useEffect, useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useStateValue } from './StateProvider';

import Login from './screens/LoginScreen/Login'
import PickSong from './screens/PickSong/PickSong';
import InfoScreen from './screens/InfoScreen/InfoScreen'

const Stack = createStackNavigator();

function Navigator(props) {

    const [state, dispatch] = useStateValue()
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    state?.userToken === null ? (
                        <Stack.Screen name='Login' component={Login} />
                    ) : (
                            <>
                                <Stack.Screen name='Home' component={PickSong} />
                                <Stack.Screen name='Infomation' component={InfoScreen} />
                            </>
                        )
                }


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
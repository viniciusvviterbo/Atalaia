import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Asteroids from './pages/Asteroids';
import Detail from './pages/Detail';
import Info from './pages/Info';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions = {{  headerShown: false }}>
                <AppStack.Screen name= "Asteroids" component = { Asteroids } />
                <AppStack.Screen name= "Detail" component = { Detail } />
                <AppStack.Screen name= "Info" component = { Info } />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
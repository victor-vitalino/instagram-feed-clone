import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from './pages/Feed';
import New from './pages/New';

const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Feed">
                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    options={Feed.navigationOptions}
                />
                <Stack.Screen
                    name="New"
                    component={New}
                    options={New.navigationOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;

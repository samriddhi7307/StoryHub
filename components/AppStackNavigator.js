import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import WriteStoryScreen from '../screens/WriteStoryScreen';

export const AppDrawerNavigator = createStackNavigator({
   WriteStory:{
        screen:WriteStoryScreen
    },
}, 
    {
        initialRouteName:'WriteStory'
});
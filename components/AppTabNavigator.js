import React from 'react';
import WriteStoryScreen from '../screens/WriteStoryScreen';
import ReadStoryScreen from '../screens/ReadStoryScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppStackNavigator} from '../components/AppStackNavigator';

export const AppTabNavigator  = createBottomTabNavigator({
    WriteStory:{
 screen:WriteStoryScreen
    },
    ReadStory:{
        screen:ReadStoryScreen
    }
})


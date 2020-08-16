import {createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home';
import Review from '../Screens/Review';
import React from 'react'
import Header from '../shared/header';
//stack for navigation, top or first object is shown on screen
//turn navigation option to a function and send 'navigation' as prop to 'Header' component
const screens = {
    Home : {
        screen : Home,
        navigationOptions: ({navigation})=>{
            return  {
                headerTitle: ()=><Header navigation={navigation} title='GameZone'/>
            }
        }
    },
    Review : {
        screen : Review
    },
}

//create a new navigation stack, also provides a cool header
const HomeStack = createStackNavigator(screens);

//wrap that around a container
export default HomeStack;
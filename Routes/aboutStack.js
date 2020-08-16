import {createStackNavigator } from 'react-navigation-stack';
import About from '../Screens/About';
import React from 'react';
import Header from '../shared/header';
//stack for navigation, top or first object is shown on screen

const screens = {
    About : {
        screen : About,
        navigationOptions: ({navigation})=>{
            return  {
                headerTitle: ()=><Header navigation={navigation} title='About'/>
            }
        }
    }
}

//create a new navigation stack, also provides a cool header
const AboutStack = createStackNavigator(screens);

//wrap that around a container
export default AboutStack;
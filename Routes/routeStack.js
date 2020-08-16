import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

//stack for navigation, top or first object is shown on screen

const screens = {
    Home : {
        screen : HomeStack
    },
    About : {
        screen : AboutStack
    },
}

const RootDrawerNavigator  = createDrawerNavigator(screens);

export const Navigator = createAppContainer(RootDrawerNavigator);
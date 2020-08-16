import React,{useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import {Navigator} from './Routes/routeStack';

// async func to load fonts
const getFonts = () =>{
  return Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf'),
  });
}

export default function App() {
  
  //since the fonts aren't loaded when app starts
  const [fontsLoaded,setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator/>
    );
  }else{
    return(
      // startAsync take a func. to load
      //onFinish sets the value for fontsLoaded
      <AppLoading
        startAsync = {getFonts}
        onFinish={()=>setFontsLoaded(true)}
      />
    )
  }

}


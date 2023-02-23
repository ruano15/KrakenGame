import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kraken from "../views/KrakenGame.js";
import WoheverShip from "../views/WoheverShip";


const Tab = createBottomTabNavigator()

export default function App(){

  return(
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen options={{headerTitle: "", headerTransparent: true, headerShown: true, headerLeft: null}} name="Home" component={Kraken} />
        <Tab.Screen options={{headerTitle: "", headerTransparent: true, headerShown: true, headerLeft: null}} name="Settings" component={WoheverShip} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
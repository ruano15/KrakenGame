import React from "react";
import RouteTabGame from "./src/routes/RouteTabGame"
import KrakenRules from "./src/views/KrakenRules";
import InitialPage from "./src/views/InicialPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SystemNavigationBar from "react-native-system-navigation-bar";

export default function App(){

  const Stack = createStackNavigator()
  SystemNavigationBar.stickyImmersive()

  return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ title: "", headerTransparent: true, headerShown: true}} name="InitialPage" component={InitialPage}/>
            <Stack.Screen options={{ title: "", headerTransparent: true, headerShown: true, headerLeft: null}} name="RouteTabGame" component={RouteTabGame}/>
            <Stack.Screen options={{ title: "", headerTransparent: true, headerShown: true, headerLeft: null}} name="KrakenRules" component={KrakenRules}/>
          </Stack.Navigator>
        </NavigationContainer>
  )
}

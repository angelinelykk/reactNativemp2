// App.js is the entry point of our application.
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./screens/MovieListScreen/MovieListScreen.main";
import MovieDetailScreen from "./screens/MovieDetailScreen/MovieDetailScreen.main";
import MovieFilterScreen from "./screens/MovieFilterScreen/MovieFilterScreen.main";
import { Button } from "react-native-elements";

/* TODO: 

  This app has three screens:
    (1) MovieListScreen
    (2) MovieDetailScreen
    (3) MovieFilterScreen

  Screens (1) and (2) are on the same navigation stack.
  Screen (3) is presented modally.

  This setup is identical to the setup in the React Navigation documentation.
  Read the example carefully to set up this app's screen heirarchy in a similar manner.

  https://reactnavigation.org/docs/modal */

  /*Create Stack Navigator for Screens*/
const Stack = createStackNavigator();
const StackOptions = { headerTitleStyle: { fontFamily: "Avenir" } };
const withButton = {
  headerTitleStyle: { fontFamily: "Avenir" },
  headerRight:()=>(
    <Button title = "count"
    onPress={()=>{alert("Hello")}}
    />
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            options={StackOptions}
            name="Movie List Screen"
            component={MovieListScreen}
          />
          <Stack.Screen
            options={StackOptions}
            name="Movie Detail Screen"
            component={MovieDetailScreen}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            options={StackOptions}
            name="Movie Filter Screen"
            component={MovieFilterScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

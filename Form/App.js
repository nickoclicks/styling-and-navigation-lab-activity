import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Form/src/homescreen";
import LoginScreen from "./src/login";
import SignupScreen from "./src/signup";
import RecoveryScreen from "./src/recovery";
import LandingScreen from "./src/landing";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "./src/categories";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen
          name="Landing"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingScreen} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Text" component={RecoveryScreen} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Services" component={HomeScreen} />
      <Drawer.Screen name="Filters" component={RecoveryScreen} />
      <Drawer.Screen name="About Us" component={LandingScreen} />
      <Drawer.Screen name="Contact" component={SignupScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});

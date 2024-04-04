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
import CategoriesScreen from "./src/categories";
import Shirtdetails from "./src/shirtdetails";
import Landscapecat from "./src/landscapecat";
import Portraitcat from "./src/portraitcat";
import ServicesPage from "./src/services";
import AboutUsPage from "./src/about";
import ContactPage from "./src/contact";
import FilterPage from "./src/filter";
import FavoritesPage from "./src/favorites";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen name="Landscapecat" component={Landscapecat} />
        <Stack.Screen name="Portraitcat" component={Portraitcat} />
        <Stack.Screen name="Shirtdetails" component={Shirtdetails} />
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
      <Tab.Screen name="Home" component={LandingScreen}  />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesPage} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions= { { drawerStyle: { backgroundColor: 'white' }}} >
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Services" component={ServicesPage} />
      <Drawer.Screen name="Filters" component={FilterPage} />
      <Drawer.Screen name="About Us" component={AboutUsPage} />
      <Drawer.Screen name="Contact" component={ContactPage} />
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

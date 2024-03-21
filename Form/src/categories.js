import * as React from "react";
import { View, text, Image, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../Form/assets/logo.png";
import shirt from "../../Form/assets/shirt.webp";
import jacket from "../../Form/assets/jacket.webp";
import pants from "../../Form/assets/pants.webp";
import { TextInput } from "react-native-paper";


function Categories(props) {
  console.log(props);
  return (
    
    
    <ScrollView>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#75E6DA",
      }}
    >
      <Image source={shirt} style={styles.logo} />
      <Text style={styles.grt}>Nigga</Text>
      <Image source={jacket} style={styles.logo} />
      <Text style={styles.grt}>Jackets</Text>
      <Image source={pants} style={styles.logo} />
      <Text style={styles.grt}>Pants</Text>
      
    </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
  },
  login: {
    marginTop: 10,
    width: "50%",
  },
  passl: {
    marginTop: 10,
  },
  forgot: {
    color: "purple",
    fontSize: 10,
    textAlign: "right",
  },
  grt: {
    color: "purple",
    fontSize: 20,
    fontWeight: "1000",
    textAlign: "center",
  },
  logout: {
    width: "50%",
    marginTop: 10,
    backgroundColor: "#05445E",
  },
});

export default Categories;

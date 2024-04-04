import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const AboutUsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.member}>
        <Image
          source={require("../../Form/assets/logo.png")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Nicko Cajes</Text>
          <Text style={styles.memberRole}>Photographer</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Image
          source={require("../../Form/assets/logo.png")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Ariel Jay Pahuyo</Text>
          <Text style={styles.memberRole}>Assistant Photographer</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Image
          source={require("../../Form/assets/logo.png")}
          style={styles.memberImage}
        />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Igor Agageo</Text>
          <Text style={styles.memberRole}>Assistant Photographer</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  memberRole: {
    fontSize: 16,
    color: "#666",
  },
});

export default AboutUsPage;

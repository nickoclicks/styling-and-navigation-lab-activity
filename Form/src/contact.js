import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ContactPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>P-2, Salvacion Maambong Libona Bukidnon</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>09518384882</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>originalign@gmail.com</Text>
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
  contactInfo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
  },
});

export default ContactPage;

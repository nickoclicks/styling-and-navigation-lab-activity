import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ServicesPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Portrait Photography</Text>
        <Text style={styles.serviceDescription}>
          Capture special moments with our professional portrait photography
          services.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Event Photography</Text>
        <Text style={styles.serviceDescription}>
          Document your events with our expert event photography services.
        </Text>
      </View>
      <View style={styles.service}>
        <Text style={styles.serviceTitle}>Product Photography</Text>
        <Text style={styles.serviceDescription}>
          Showcase your products with high-quality product photography services.
        </Text>
      </View>
      {/* Add more services as needed */}
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
  service: {
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
  },
});

export default ServicesPage;

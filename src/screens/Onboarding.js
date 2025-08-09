import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E9CFC8" />

      {/* Image */}
      <Image
        source={require("../assets/back.jpg")} // replace with your image file
        style={styles.image}
        resizeMode="contain"
      />

      {/* Tagline */}
      <Text style={styles.brand}>Viorra</Text>
      <Text style={styles.tagline}>Your Beauty, Delivered.</Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")} // navigate to Login screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9CFC8", // light pink background
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 400,
    marginBottom: 30,
  },
  brand: {
    fontSize: 28,
    fontWeight: "600",
    color: "#9B5E5E", // soft maroon
    fontFamily: "serif",
  },
  tagline: {
    fontSize: 16,
    color: "#5E4B4B",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#9B5E5E",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

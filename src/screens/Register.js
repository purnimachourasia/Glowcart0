import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateAndRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Invalid email address");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    Alert.alert("Success", "Account created successfully!");
    // You can call API here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Join The Glow!</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email Address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Image
            source={require("../../assets/email.png")}
            style={styles.icon}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconButton}
          >
            <Image
              source={require("../../assets/eye.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.iconButton}
          >
            <Image
              source={require("../../assets/eye.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={validateAndRegister}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already a Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FDE8E8", // light pink background
    paddingVertical: 30,
  },
  header: {
    backgroundColor: "#F4B4B4",
    paddingVertical: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7A1C1C",
  },
  form: {
    paddingHorizontal: 20,
  },
  inputWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#888",
  },
  iconButton: {
    padding: 4,
  },
  button: {
    backgroundColor: "#C14B4B",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 13,
    color: "#555",
  },
  loginLink: {
    fontSize: 13,
    color: "#C14B4B",
    fontWeight: "600",
  },
});

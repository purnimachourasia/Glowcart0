import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    // Here you can call your login API
    alert(`Logging in with Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subtitle}>Welcome back you've been missed.</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email Id"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => alert('Forgot password pressed')}>
        <Text style={styles.forgotText}>Forgot password</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Continue With</Text>
        <View style={styles.line} />
      </View>

      {/* Social Login Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../assets/Google1.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../assets/face.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <Text style={styles.registerText}>
        Not a Member?{' '}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('Register')}
        >
          Register Now
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8d8d3',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#a34a4a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#7d5a5a',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  forgotText: {
    color: '#a34a4a',
    alignSelf: 'flex-end',
    marginBottom: 20,
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: '#a34a4a',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 8,
    color: '#7d5a5a',
    fontSize: 13,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 30,
  },
  socialBtn: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  registerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#7d5a5a',
  },
  registerLink: {
    color: '#a34a4a',
    fontWeight: 'bold',
  },
});

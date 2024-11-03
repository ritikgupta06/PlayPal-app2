import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Login";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Play<Text style={styles.highlight}>Pal</Text>
      </Text>
      <Text style={styles.subtitle}>Sign In</Text>
<View style={styles.inputContainer}>
  <Ionicons
    name="mail-outline" // Change icon to represent email
    size={24}
    color="#fff"
    style={styles.icon}
  />
  <TextInput
    style={styles.input}
    placeholder="Email"
    placeholderTextColor="#666"
    keyboardType="email-address" // Update keyboardType for email input
    autoCapitalize="none" // Optional: disable capitalization for email
  />
</View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="#fff"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.forgetPassword}>
        <Text style={styles.forgetText}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MainTab")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

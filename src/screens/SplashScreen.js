import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/Splash";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1D1B20" />
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/splash.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.headingMain}>Welcome to</Text>
          <Text style={styles.heading}>
            Play<Text style={styles.highlight}>Pal</Text>
          </Text>
        </View>
        <ActivityIndicator size="large" color="#8A2BE2" style={styles.loader} />
      </View>
      <Text style={styles.footerText}>Designed by</Text>
      <Text style={styles.footerText}>Sunscar</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

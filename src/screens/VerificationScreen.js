import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/Verification";

const VerificationScreen = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(20);

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChangeText = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.headerText}>Verification</Text>
        <Text style={styles.infoText}>
          We have sent you the verification code at +91-7906215489
        </Text>

        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(text) => handleChangeText(text, index)}
              value={digit}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Re-send Code in{" "}
          <Text style={styles.timerText}>{`0:${
            resendTimer < 10 ? `0${resendTimer}` : resendTimer
          }`}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import PlayScreen from "./src/screens/PlayScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import UserScreen from "./src/screens/UserScreen";
import ChatScreen from "./src/screens/ChatScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import styles from "./src/styles/Tab";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarActiveTintColor: "#8A2BE2",
        tabBarInactiveTintColor: "#A9A9A9",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          switch (route.name) {
            case "HomeScreen":
              iconName = "home-sharp";
              break;
            case "SearchScreen":
              iconName = "search-sharp";
              break;
            case "PlayScreen":
              iconName = "rocket-sharp";
              break;
            case "ProfileScreen":
              iconName = "person-sharp";
              break;
            default:
              iconName = "ellipse";
          }

          return (
            <Ionicons name={iconName} size={focused ? 26 : 24} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ tabBarLabel: "Search" }}
      />
      <Tab.Screen
        name="PlayScreen"
        component={PlayScreen}
        options={{ tabBarLabel: "Play" }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="MainTab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

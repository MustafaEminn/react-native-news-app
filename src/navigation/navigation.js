import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Details from "../screens/Details";

export const Stack = createStackNavigator();

const LogoTitle = () => (
  <Image
    style={{ width: 50, height: 50 }}
    source={{
      uri:
        "https://pbs.twimg.com/profile_images/1111337440353157121/_R0oETHR_400x400.jpg",
    }}
  />
);

export function NavigationJS() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerTitle: (props) => <LogoTitle />,
            title: "                       HABERLER",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitleAlign: "center",
            headerTitle: (props) => <LogoTitle />,
            title: "Detaylar",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({});

export default NavigationJS;

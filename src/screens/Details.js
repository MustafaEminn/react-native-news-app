import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { ScrollView } from "react-native-gesture-handler";

export default function Details({ navigation, route }) {
  // const asd = () => {
  //   console.log(route.params.params.item);
  // };
  // asd();

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_600SemiBold,
  });

  const gobackHandler = () => {
    navigation.goBack();
  };

  const { urlToImage, title, publishedAt, content } = route.params.params.item;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View></View>
        <StatusBar backgroundColor="lightgray" />
        <Image
          source={{ uri: urlToImage }}
          style={{
            width: "100%",
            height: 300,
            resizeMode: "contain",
            marginTop: -80,
          }}
        />
        <Text
          style={{
            fontFamily: "NunitoSans_700Bold",
            textAlign: "center",

            fontSize: 20,
            marginLeft: 5,
            marginRight: 8,
            position: "relative",
            top: 0,
            height: 60,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "NunitoSans_400Regular",
            textAlign: "center",
            fontSize: 15,
            marginTop: 7,
            marginLeft: 5,
            marginRight: 8,
            position: "relative",
            top: -10,
            height: 19,
          }}
        >
          {publishedAt}
        </Text>
        <View
          style={{
            height: 2,
            backgroundColor: "lightgray",
            padding: 0,
            margin: 0,
            position: "relative",
            top: -5,
          }}
        ></View>
        <Text
          style={{
            fontFamily: "NunitoSans_400Regular",
            textAlign: "left",
            fontSize: 16,
            marginLeft: 25,
            marginRight: 5,
            position: "relative",
            top: -5,
          }}
        >
          {content}
          {content}
          {content}
          {content}
          {content}
          {content}
          {content}
          {content}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

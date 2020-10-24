import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

import Card from "../components/card";

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

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Home({ navigation }) {
  const [homeData, setHomeData] = useState(null);
  const [skeleton, setSkeleton] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getHomeData();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getHomeData = async () => {
    const response = await fetch(
      "http://newsapi.org/v2/top-headlines?country=tr&apiKey=6b4a8f6b5da6430fb87fe59a5fb3d4bc"
    );
    const data = await response.json();
    setHomeData(data.articles);
    setSkeleton(false);
    // console.log(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const keyExtractorr = () => {
    return (
      new Date().getTime().toString() +
      Math.floor(Math.random() * Math.floor(new Date().getTime())).toString()
    );
  };

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_600SemiBold,
  });

  if (!skeleton) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="lightgray" />
        <FlatList
          data={homeData}
          onRefresh={onRefresh}
          refreshing={refreshing}
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate("Details", { params: { item } });
              }}
            >
              <Card>
                <Image
                  source={{ uri: item.urlToImage }}
                  style={{
                    width: "95%",
                    height: 145,
                    resizeMode: "cover",
                    margin: 8,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "NunitoSans_400Regular",
                    marginLeft: 8,
                    marginRight: 8,
                    fontSize: 16,
                    maxHeight: 70,
                    overflow: "hidden",
                  }}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={keyExtractorr}
        />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card>
            <View
              style={{
                width: "95%",
                height: 145,
                margin: 8,
                marginTop: 0,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
            <View
              style={{
                width: "95%",
                height: 10,
                margin: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
            <View
              style={{
                width: "95%",
                height: 10,
                margin: 0,
                marginRight: 8,
                marginLeft: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
          </Card>
          <Card>
            <View
              style={{
                width: "95%",
                height: 145,
                margin: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
            <View
              style={{
                width: "95%",
                height: 10,
                margin: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
            <View
              style={{
                width: "95%",
                height: 10,
                margin: 0,
                marginRight: 8,
                marginLeft: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
          </Card>
          <Card>
            <View
              style={{
                width: "95%",
                height: 145,
                margin: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
            <View
              style={{
                width: "95%",
                height: 10,
                margin: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
            <View
              style={{
                width: "95%",
                height: 10,
                margin: 0,
                marginRight: 8,
                marginLeft: 8,
                backgroundColor: "#d9d9d9",
              }}
            ></View>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

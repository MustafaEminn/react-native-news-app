import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    height: 215,
    width: "100%",
    backgroundColor: "white",
    elevation: 2,
  },
  cardContent: {
    marginHorizontal: 5,
    marginVertical: 4,
  },
});

export default Card;

import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const widthScreen = Dimensions.get("screen").height * 1.431;

const TutorialItem = ({ item }) => {
  return <Image source={item} style={styles.img} resizeMode="cover" />;
};

export default TutorialItem;

const styles = StyleSheet.create({
  img: {
    width: widthScreen * 0.4,
    height: widthScreen * 0.4 * 0.72,
  },
});

import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const GuideImage = ({ source }) => {
  const [imageSource, setImageSource] = useState(source);

  useEffect(() => {
    setImageSource(source);
  }, [source]);

  return (
    <View style={styles.rootView}>
      {/* <Animatable.View animation="fadeIn"> */}
      <Image source={imageSource} style={styles.img} resizeMode="contain" />
      {/* </Animatable.View> */}
    </View>
  );
};

export default GuideImage;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  img: {
    height: "100%",
    width: "100%",
  },
});

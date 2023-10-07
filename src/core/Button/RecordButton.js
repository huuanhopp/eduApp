import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ratioW } from "../../utils/utils";

const RecordButton = ({
  style = styles.absolute,
  Modal,
  destination,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (destination) navigation.navigate(destination)
      }}
      style={style}
    >
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/SpeakingGame/micButton.png')}
        style={{
          height: ratioW(90),
          width: ratioW(90),
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    bottom: 75,
    left: '48%',
  },
});

export default RecordButton;

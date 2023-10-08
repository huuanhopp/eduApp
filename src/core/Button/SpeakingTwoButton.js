import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';

const SpeakingTwoButton = ({
  style = styles.absolute,
  Modal,
  destination,
  navigation,
  onShowResult,
}) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(); // Go back one screen
        }}
        style={styles.repeatButton}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/repeatButton.png')} // Add the path to your repeat button image
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShowResult} style={style}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/finishButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    marginLeft: 28,
  },
  repeatButton: {},
});

export default SpeakingTwoButton;

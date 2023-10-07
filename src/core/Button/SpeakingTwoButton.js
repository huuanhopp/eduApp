import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const SpeakingTwoButton = ({
  style = styles.absolute,
  Modal,
  destination,
  navigation,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (destination) navigation.navigate(destination);
        }}
        style={style}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/finishButton.png')}
        />
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(); // Go back one screen
        }}
        style={styles.repeatButton}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/repeatButton.png')} // Add the path to your repeat button image
        />
      </TouchableOpacity>
    </>
    
    
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    bottom: 80,
    left: '53%',
  },
  repeatButton: {
    position: 'absolute',
    bottom: 80,
    left: '32%', // Adjust the position as needed
  },
});

export default SpeakingTwoButton;

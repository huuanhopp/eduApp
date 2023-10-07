import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
const Stage1Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/Stage1Screen/Stage1Screen.png')}
        style={styles.imageCover}
      />
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/BackButton.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.micBtn}
        // onPress={() => {
        //   navigation.pop();
        // }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/Stage1Screen/micButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCover: {
    // opacity: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '7.5%',
    left: '12%',
    borderRadius: 4,
    // opacity: 0,
    // pointerEvents: 'cursor',
  },
  micBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '80%',
    left: '46.9%',
    // opacity: 0,
  }
});

export default Stage1Screen;

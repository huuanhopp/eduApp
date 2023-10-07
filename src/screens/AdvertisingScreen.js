import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Slider from '../components/Carousel/Slider';
import Voice from '../components/Voice.js';

const AdvertisingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/background.png')}
      />

      <TouchableOpacity
        title="Navigate to next screen"
        style={styles.customButton}
        onPress={() => {
          navigation.navigate('Main');
        }}
      >
        <Image
          style={styles.invisibleBtn}
          resizeMode="cover"
          source={require('../../assets/images/ButtonSlider.png')}
        />
        {/* <Voice/> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    position: 'absolute',
    zIndex: 1,
    top: '78%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 4,
  },
  // invisibleBtn: {},
});

export default AdvertisingScreen;

import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const StageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/StageScreen/StageScreen.png')}
      />
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/StageScreen/CloseButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEC99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '8.8%',
    right: '9.2%',
    borderRadius: 4,
    opacity: 0,
    // pointerEvents: 'cursor',
  },
});

export default StageScreen;

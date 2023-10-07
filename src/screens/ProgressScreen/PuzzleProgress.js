import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
const PuzzleProgress = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/ProgressScreen/PuzzleProgress.png')}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '8.5%',
    left: '9.2%',
    borderRadius: 4,
    opacity: 0,
    // pointerEvents: 'cursor',
  },
});

export default PuzzleProgress;

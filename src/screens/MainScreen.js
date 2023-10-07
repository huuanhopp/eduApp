import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const MainScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('SpeakingGame1');
  }, []);

  return <View />
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/MainScreen/Main.png')}
      />

      <TouchableOpacity
        style={styles.searchingBtn}
        onPress={() => {
          navigation.navigate('Progress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/Searching.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.yellowBtn}
        onPress={() => {
          navigation.navigate('Stage');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/YellowButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listeningGame}
        onPress={() => {
          navigation.navigate('ListeningProgress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/ListeningGame.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.speakingGame}
        onPress={() => {
          navigation.navigate('SpeakingProgress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/SpeakingGame.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.puzzleGame}
        onPress={() => {
          navigation.navigate('PuzzleProgress');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/MainScreen/PuzzleGame.png')}
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
  yellowBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '14.3%',
    borderRadius: 4,
    opacity: 0,
    // pointerEvents: 'none',
  },
  listeningGame: {
    position: 'absolute',
    zIndex: 1,
    bottom: '6%',
    opacity: 0,
  },
  speakingGame: {
    position: 'absolute',
    zIndex: 1,
    bottom: '6%',
    left: '11.3%',
    opacity: 0,
  },
  puzzleGame: {
    position: 'absolute',
    zIndex: 1,
    bottom: '6%',
    right: '11.3%',
    opacity: 0,
  },
  searchingBtn: {
    position: 'absolute',
    zIndex: 1,
    left: '11.5%',
    top: '9.1%',
    opacity: 0,
  },
});

export default MainScreen;

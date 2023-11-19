import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {screenSize} from '../constants/constants';
import {ratioH} from '../utils/utils';
const MainScreen = ({navigation}) => {
  // useEffect(() => {
  //   navigation.navigate('PuzzleGame3');
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        resizeMode="stretch"
        source={require('../../assets/images/MainScreen/Main.png')}
        style={{
          height: '100%',
          aspectRatio: 1194 / 834,
        }}
      /> */}
      <ImageBackground
        resizeMode="contain"
        source={require('../../assets/images/MainScreen/Searching.png')}
        style={{
          opacity: 1,
          width: '100%',
        }}>
        <TouchableOpacity
          style={styles.yellowBtn}
          onPress={() => {
            navigation.navigate('Stage');
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/MainScreen/YellowButton.png')}
            style={{
              opacity: 1,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={styles.listeningGame}
          onPress={() => {
            navigation.navigate('ListeningProgress');
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/MainScreen/ListeningGame.png')}
            style={{
              opacity: 1,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.speakingGame}
          onPress={() => {
            navigation.navigate('SpeakingProgress');
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/MainScreen/SpeakingGame.png')}
            style={{
              opacity: 1,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.puzzleGame}
          onPress={() => {
            navigation.navigate('PuzzleProgress');
          }}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/MainScreen/PuzzleGame.png')}
            style={{
              opacity: 1,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellowBtn: {
    // position: 'absolute',
    // zIndex: 1,
    // top: '50%',
    // left: '14.3%',
    borderRadius: 4,
    opacity: 1,
    // pointerEvents: 'none',
  },
  listeningGame: {
    // position: 'absolute',
    // zIndex: 1,
    // bottom: '6%',
    // opacity: 1,
  },
  speakingGame: {
    // position: 'absolute',
    // zIndex: 1,
    // bottom: '6%',
    // left: '11.3%',
    // opacity: 1,
  },
  puzzleGame: {
    // position: 'absolute',
    // zIndex: 1,
    // bottom: '6%',
    // right: '11.3%',
    // opacity: 1,
  },
  searchingBtn: {
    // position: 'absolute',
    // zIndex: 1,
    // right: '15.5%',
    // top: '15%',
    // opacity: 1,
    // width: ratioH(380),
    // height: ratioH(380),
  },
});

export default MainScreen;

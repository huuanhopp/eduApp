import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Platform } from "react-native";
import SpeakingBackground from './SpeakingBackground';
// import { Audio } from 'expo-av';
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
import Video from 'react-native-video';


const Game1Result = ({ navigation }) => {
  const [isPauseAudio, setPauseAudio] = useState(true);

  return (
    <>
      <SpeakingBackground
        title="단어 말하기"
        question="소리를 듣고 따라말한 후 비교해보자!"
        destination="SpeakingGame2"
        navigation={navigation}
      />
      <TouchableOpacity
        style={styles.wave1}
        onPress={async () => {
          setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/SpeakingWoman.mp3'),
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log('Error playing sound:', error);
          // }
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wave2}
        onPress={async () => {
          setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/SpeakingKid.mp3'),
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log('Error playing sound:', error);
          // }
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
        />
      </TouchableOpacity>
      <SpeakingTwoButton destination="SpeakingGame2" navigation={navigation}/>
      <Video
        source={require('../../../assets/audio/SpeakingKid.mp3')}
        paused={isPauseAudio}
        audioOnly={true}
        repeat={Platform.OS === 'ios'}
        onEnd={() => setPauseAudio(true)}
        style={{height: 0, width: 0}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wave1: {
    position: 'absolute',
    top: '35%',
    left: '20%',
    zIndex: 3,
    // fontWeight: 700,
  },
  wave2: {
    position: 'absolute',
    top: '35%',
    left: '53%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game1Result;

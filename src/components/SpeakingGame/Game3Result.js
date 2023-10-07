import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Platform } from "react-native";
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';


const Game3Result = ({ navigation }) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleClick = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  return (
    <>
      <SpeakingBackground
        title="빈칸 채우기"
        question="문장의 빈 칸에 들어갈 알맞은 단어를 찾은 후 문장을 직접 읽어보자!"
        destination="SpeakingGame4"
        navigation={navigation}
      />
      <View
        style={styles.hint}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game3/hintSmall.png')}
        />
      </View>

      <View
       style={styles.hint2}
      >
        <Image

          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game3/AnswerSmall.png')}
        />
      </View>



      <TouchableOpacity
       style={styles.fullText}
       onPress={async () => {
         setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/sentenCorrect2.m4a'),
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log('Error playing sound:', error);
          // }
        }}
      >
        <Image

          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/audio.png')}
        />
      </TouchableOpacity>


      <SpeakingTwoButton destination="SpeakingGame4" navigation={navigation}/>
      <Video
        source={require('../../../assets/audio/sentenCorrect2.m4a')}
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
  hint: {
    position: 'absolute',
    top: '34%',
    zIndex: 3,
  },

  fullText: {
    position: 'absolute',
    top: '64%',
    zIndex: 3,
  },
  hint2: {
    position: 'absolute',
    top: '48%',
    zIndex: 3,
  },
});

export default Game3Result;

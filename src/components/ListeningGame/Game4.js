import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';

const Game4 = ({ navigation }) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: 'O',
      top: 590,
      left: 460,
      selected: false,
    },
    {
      content: 'X',
      top: 590,
      left: 740,
      selected: false,
    },
  ]);

  const handleOneChoice = (index) => {
    if (anwsOptions[index].selected) return;
    const newAnsOptions = anwsOptions.map((ans, idx) => {
      return {
        ...ans,
        selected: index === idx,
      };
    });
    setAnwsOptions(newAnsOptions);
  };

  return (
    <>
      <ListeningBackground
        title="소음 훈련"
        question="소음을 듣고 그림과 상황이 일치하면 O, 그렇지 않으면 X를 선택해보자!"
        navigation={navigation}
        leftPosContent="25%"
        destination="ListeningGame5"
      />
      <TouchableOpacity
        style={styles.audio}
        onPress={async () => {
          setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/CarO.mp3'),
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log('Error playing sound:', error);
          // }
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          resizeMode="cover"
          source={require('../../../assets/images/core/Audio.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.car}
        onPress={async () => {
          setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/CarO.mp3'),
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log('Error playing sound:', error);
          // }
        }}
      >
        <Image
          //   style={{ width: 40, height: 40 }}
          resizeMode="cover"
          source={require('../../../assets/images/ListeningGame/Game4/Car.png')}
        />
      </TouchableOpacity>
      {anwsOptions.map((item, index) => (
        <AnswerButton
          customWidth={179}
          customHeight={36}
          key={index}
          id={index}
          content={item.content}
          top={item.top}
          left={item.left}
          multipleChoice={false}
          handleOneChoice={(index) => handleOneChoice(index)}
          isUniqueSelected={item.selected}
        />
      ))}
      <Video
        source={require('../../../assets/audio/SentenceTraining.mp3')}
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
  audio: {
    position: 'absolute',
    top: 520,
    left: '32%',
    zIndex: 3,
    // fontWeight: 700,
  },
  car: {
    position: 'absolute',
    top: 320,
    left: '31%',
    zIndex: 2,
  },
});

export default Game4;

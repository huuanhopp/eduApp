import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';

const Game5 = ({ navigation }) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '검은 머리',
      top: 570,
      left: 460,
      selected: false,
    },
    {
      content: '빨강 머리',
      top: 570,
      left: 650,
      selected: false,
    },
    {
      content: '노랑 머리',
      top: 570,
      left: 840,
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
        title="이야기 훈련"
        question="들려주는 이야기를 듣고 주어진 문제를 풀어보자!"
        navigation={navigation}
        leftPosContent="31.5%"
        leftPosTitle="42%"
        destination="PuzzleGame1"
      />
      <TouchableOpacity
        style={styles.yellowBoard}
        onPress={async () => {
          setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/ListenStory.mp3'),
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
          source={require('../../../assets/images/ListeningGame/Game5/YellowBoard.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.audio}
        onPress={async () => {
          setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/ListenStory.mp3'),
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log('Error playing sound:', error);
          // }
        }}
      >
        <Image
          style={{ width: 94, height: 94 }}
          resizeMode="cover"
          source={require('../../../assets/images/core/Audio.png')}
        />
      </TouchableOpacity>
      {anwsOptions.map((item, index) => (
        <AnswerButton
          type="long"
          customWidth={84.3}
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
        source={require('../../../assets/audio/ListenStory.mp3')}
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
    top: 440,
    left: '47%',
    zIndex: 3,
    // fontWeight: 700,
  },
  yellowBoard: {
    position: 'absolute',
    top: 310,
    left: '28%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game5;

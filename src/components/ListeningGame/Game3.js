import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
// import { Audio } from 'expo-av';
const Game3 = ({ navigation }) => {
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '붉은 수건',
      top: 530,
      left: 400,
      selected: false,
    },
    {
      content: '검은 머리',
      top: 530,
      left: 630,
      selected: false,
    },
    {
      content: '휴대폰',
      top: 530,
      left: 860,
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
        question="소음 속 단어를 듣고 정답을 골라보자!"
        navigation={navigation}
        leftPosContent="35%"
        destination="ListeningGame4"
      />
      <TouchableOpacity
        style={styles.audio}
        onPress={async () => {
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require('../../../assets/audio/soundTrainingBoil.mp3'),
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log('Error playing sound:', error);
          // }
        }}
      >
        <Image
          style={{ width: 170, height: 170 }}
          resizeMode="cover"
          source={require('../../../assets/images/core/Audio.png')}
        />
      </TouchableOpacity>
      {anwsOptions.map((item, index) => (
        <AnswerButton
          customWidth={135}
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
    </>
  );
};

const styles = StyleSheet.create({
  audio: {
    position: 'absolute',
    top: 320,
    left: '44%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game3;

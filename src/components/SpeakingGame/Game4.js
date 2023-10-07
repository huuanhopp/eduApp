import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
const Game4 = ({ navigation }) => {

  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleClick = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  return (
    <>
      <SpeakingBackground
        title="비슷한 발음 찾기"
        question="주어진 단어와 비슷한 발음을 가지고 있는 단어를 찾아 선택한 후 읽어보자!"
        destination="ListeningGame1"
        navigation={navigation}
      />
      <View
        style={styles.hint}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game4/hint.png')}
        />
      </View>

      <View style={styles.ans1}>
      <TouchableOpacity onPress={handleClick}>
        {showCorrectAnswer ? (
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/SpeakingGame/Game4/ansCorrect.png')}
          />
        ) : (
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/SpeakingGame/Game4/ans1.png')}
          />
        )}
      </TouchableOpacity>
    </View>

      <View
        style={styles.ans2}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game4/ans2.png')}
        />
      </View>

      <View
        style={styles.ans3}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game4/ans3.png')}
        />
      </View>
      <RecordButton destination="SpeakingGame4Result" navigation={navigation}/>
    </>
  );
};

const styles = StyleSheet.create({
  hint: {
    position: 'absolute',
    top: '38%',
    zIndex: 3,
  },

  ans1: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: "32%"
  },

  ans2: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: "45%"
  }, 

  ans3: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: "58%"
  },


});

export default Game4;

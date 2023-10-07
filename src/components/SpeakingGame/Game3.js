import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
const Game3 = ({ navigation }) => {

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
          source={require('../../../assets/images/SpeakingGame/Game3/hint.png')}
        />
      </View>

      <View style={styles.ans1}>
      <TouchableOpacity onPress={handleClick}>
        {showCorrectAnswer ? (
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/SpeakingGame/Game3/ansCorrect.png')}
          />
        ) : (
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/SpeakingGame/Game3/ans1.png')}
          />
        )}
      </TouchableOpacity>
    </View>

      <View
        style={styles.ans2}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game3/ans2.png')}
        />
      </View>

      <View
        style={styles.ans3}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game3/ans3.png')}
        />
      </View>

      <View
        style={styles.ans4}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game3/ans4.png')}
        />
      </View>

      <View
        style={styles.ans5}
      >
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game3/ans5.png')}
        />
      </View>

      <RecordButton destination="SpeakingGame3Result" navigation={navigation}/>

    </>
  );
};

const styles = StyleSheet.create({
  hint: {
    position: 'absolute',
    top: '34%',
    zIndex: 3,
  },

  ans1: {
    position: 'absolute',
    top: '50%',
    zIndex: 30,
    left: "32%"
  },

  ans2: {
    position: 'absolute',
    top: '50%',
    zIndex: 30,
    left: "45%"
  }, 

  ans3: {
    position: 'absolute',
    top: '50%',
    zIndex: 30,
    left: "58%"
  },

  ans4: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: "38%"
  },

  ans5: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: "52%"
  }
});

export default Game3;

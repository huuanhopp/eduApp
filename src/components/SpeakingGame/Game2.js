import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';

const Game2 = ({ navigation }) => {
  return (
    <>
      <SpeakingBackground
        title="문장 말하기"
        question="단어를 이용해 문장을 만든 후 직접 읽어보자!"
        destination="SpeakingGame3"
        navigation={navigation}
      />
      <View
       style={styles.blankText}
      >
        <Image
        
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/blankText.png')}
        />
      </View>

      <View
       style={styles.hint}
      >
        <Image
        
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/hint.png')}
        />
      </View>

      <View
       style={styles.fullText}
      >
        <Image
        
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/fullText.png')}
        />
      </View>

      <RecordButton  destination="SpeakingGame2Result" navigation={navigation} />
     
    </>
  );
};

const styles = StyleSheet.create({
  blankText: {
    position: 'absolute',
    top: '32%',

    zIndex: 3,
  },

  hint: {
    position: 'absolute',
    top: '43%',
    zIndex: 3,
  },

  fullText: {
    position: 'absolute',
    top: '65%',
    zIndex: 3,
  }
});

export default Game2;

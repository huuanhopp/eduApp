import React, {useState, useRef} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
import {ratioH} from '../../utils/utils';

const Game2 = ({navigation}) => {
  return (
    <SpeakingBackground
      title="문장 말하기"
      question="단어를 이용해 문장을 만든 후 직접 읽어보자!"
      destination="SpeakingGame3"
      navigation={navigation}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/blankText.png')}
        />
        <View style={styles.hint}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/SpeakingGame/Game2/hint.png')}
          />
        </View>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/fullText.png')}
        />
        {/* <RecordButton
          destination="SpeakingGame2Result"
          navigation={navigation}
        /> */}
      </View>
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  blankText: {},

  hint: {
    marginTop: ratioH(40),
    marginBottom: ratioH(40),
  },

  fullText: {},
});

export default Game2;

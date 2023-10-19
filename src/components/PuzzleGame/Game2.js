import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, PanResponder } from 'react-native';
import PuzzleBackground from './PuzzleBackground';
import Card2 from '../../core/Card/Card2';

const Game2 = ({ navigation }) => {
 
  const onCheckResult = () => {
    // Implement your check result logic here
  };

  return (
    <PuzzleBackground
      title="틀린 그림 찾기"
      question="주어진 시간 안에 틀린 그림을 찾아 원을 그려보자!"
      navigation={navigation}
      destination="PuzzleGame1"
      onCheckResult={onCheckResult}>
      <View style={styles.contentView} >
        <View style={{ flexDirection: 'row' }}>
          <Card2
            urlImage = {require('../../../assets/images/PuzzleGame/Game2/bg1.png')}
          />
         
          <Card2
            urlImage={require('../../../assets/images/PuzzleGame/Game2/bg2.png')} // Replace with the actual path to your second image
          />
        </View>
      </View>
    </PuzzleBackground>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Game2;

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Game2 from '../../components/PuzzleGame/Game2';

const PuzzleGame2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Game2 navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PuzzleGame2;

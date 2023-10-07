import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Game1 from '../../components/PuzzleGame/Game1';

const PuzzleGame1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Game1 />
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

export default PuzzleGame1;

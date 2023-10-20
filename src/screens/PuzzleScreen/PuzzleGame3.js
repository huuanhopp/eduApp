import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Game3 from '../../components/PuzzleGame/Game3';

const PuzzleGame3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Game3 navigation={navigation} />
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

export default PuzzleGame3;

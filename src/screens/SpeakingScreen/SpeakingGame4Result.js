import React from 'react';
import {StyleSheet, View} from 'react-native';
import Game4Result from '../../components/SpeakingGame/Game4Result';
import {useRoute} from '@react-navigation/native';
const SpeakingGame4 = ({navigation}) => {
  const route = useRoute();
  const isCorrect = route.params?.isCorrect ?? false;

  return (
    <View style={styles.container}>
      <Game4Result navigation={navigation} isCorrect={isCorrect} />
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

export default SpeakingGame4;

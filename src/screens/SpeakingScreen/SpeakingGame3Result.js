import React from 'react';
import {StyleSheet, View} from 'react-native';
import Game3Result from '../../components/SpeakingGame/Game3Result';
import {useRoute} from '@react-navigation/native';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const SpeakingGame3 = ({navigation}) => {
  const route = useRoute();
  const isCorrect = route.params?.isCorrect ?? false;

  return (
    <View style={styles.container}>
      <Game3Result navigation={navigation} isCorrect={isCorrect} />
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

export default SpeakingGame3;

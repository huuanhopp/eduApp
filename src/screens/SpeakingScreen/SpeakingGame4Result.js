import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game4Result from '../../components/SpeakingGame/Game4Result';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const SpeakingGame4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Game4Result navigation={navigation} />
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

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game1Result from '../../components/SpeakingGame/Game1Result';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const SpeakingGame1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Game1Result navigation={navigation} />
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

export default SpeakingGame1;

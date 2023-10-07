import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game2 from '../../components/SpeakingGame/Game2';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const SpeakingGame2 = ({ navigation }) => {
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

export default SpeakingGame2;

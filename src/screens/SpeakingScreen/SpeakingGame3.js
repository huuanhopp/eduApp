import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game3 from '../../components/SpeakingGame/Game3';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const SpeakingGame3 = ({ navigation }) => {
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

export default SpeakingGame3;

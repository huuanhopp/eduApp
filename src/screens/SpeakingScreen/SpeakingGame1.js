import React from 'react';
import {StyleSheet, View} from 'react-native';
import Game1 from '../../components/SpeakingGame/Game1';
const SpeakingGame1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Game1 navigation={navigation} />
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

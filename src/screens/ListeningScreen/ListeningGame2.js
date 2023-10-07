import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game2 from '../../components/ListeningGame/Game2';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const ListeningGame2 = ({ navigation }) => {
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

export default ListeningGame2;

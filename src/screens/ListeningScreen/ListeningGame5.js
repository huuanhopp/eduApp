import React from 'react';
import { StyleSheet, View } from 'react-native';
import Game5 from '../../components/ListeningGame/Game5';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const ListeningGame5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Game5 navigation={navigation} />
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

export default ListeningGame5;

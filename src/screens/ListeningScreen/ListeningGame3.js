import React from 'react';
import {StyleSheet, View} from 'react-native';
import Game3 from '../../components/ListeningGame/Game3';
const ListeningGame3 = ({navigation}) => {
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

export default ListeningGame3;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Game1 from '../../components/ListeningGame/Game1';

const ListeningGame1 = ({navigation}) => {
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

export default ListeningGame1;

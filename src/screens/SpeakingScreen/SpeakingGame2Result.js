import React from 'react';
import {StyleSheet, View} from 'react-native';
import Game2Result from '../../components/SpeakingGame/Game2Result';
import {useRoute} from '@react-navigation/native';
const SpeakingGame2 = ({navigation}) => {
  const route = useRoute();
  const isCorrect = route.params?.isCorrect ?? false;
  const audioUrl = route.params?.audioUrl ?? false;
  return (
    <View style={styles.container}>
      <Game2Result
        audioUrl={audioUrl}
        isCorrect={isCorrect}
        navigation={navigation}
      />
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

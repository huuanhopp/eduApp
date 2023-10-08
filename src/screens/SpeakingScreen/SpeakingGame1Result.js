import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Game1Result from '../../components/SpeakingGame/Game1Result';
import Video from 'react-native-video';
// import ListeningBackground from '../../components/ListeningGame/ListeningBackground';
const SpeakingGame1 = ({navigation, route}) => {
  const [isPauseAudioUser, setPauseAudioUser] = useState(true);
  const audioUrl = route?.params?.data?.audioUrl;

  console.log({audioUrl})
  const handleRePlayAudioRecord = () => {
    setPauseAudioUser(false);
  };
  return (
    <View style={styles.container}>
      <Game1Result
        handleRePlayAudioRecord={handleRePlayAudioRecord}
        navigation={navigation}
      />
      {audioUrl && (
        <Video
          source={{uri: audioUrl}}
          paused={isPauseAudioUser}
          audioOnly={true}
          repeat={Platform.OS === 'ios'}
          onEnd={() => {
            setPauseAudioUser(true);
          }}
          ignoreSilentSwitch={'ignore'}
          style={{width: 0, height: 0}}
        />
      )}
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

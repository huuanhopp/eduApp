import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from 'react-native';
import SpeakingBackground from './SpeakingBackground';
// import { Audio } from 'expo-av';
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
import Video from 'react-native-video';
import {ratioH} from '../../utils/utils';

const Game1Result = ({navigation}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);

  return (
    <SpeakingBackground
      title="단어 말하기"
      question="소리를 듣고 따라말한 후 비교해보자!"
      destination="SpeakingGame2"
      navigation={navigation}>
      <View style={styles.contentView}>
        <View style={styles.waveView}>
          <TouchableOpacity
            style={styles.wave1}
            onPress={async () => {
              setPauseAudio(false);
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wave2}
            onPress={async () => {
              setPauseAudio(false);
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
            />
          </TouchableOpacity>
        </View>
        <Video
          source={require('../../../assets/audio/SpeakingKid.mp3')}
          paused={isPauseAudio}
          audioOnly={true}
          repeat={Platform.OS === 'ios'}
          onEnd={() => setPauseAudio(true)}
          style={{height: 0, width: 0}}
        />
      </View>
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  wave1: {
    width: ratioH(424),
  },
  wave2: {
    width: ratioH(424),
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveView: {
    flexDirection: 'row',
  },
});

export default Game1Result;

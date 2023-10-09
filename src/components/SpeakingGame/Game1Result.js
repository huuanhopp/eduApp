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
import {StackActions, useNavigation} from '@react-navigation/native';

const Game1Result = ({handleRePlayAudioRecord}) => {
  const navigation = useNavigation();
  const [isPauseAudio, setPauseAudio] = useState(true);

  const onShowResult = () => {
    navigation.dispatch(StackActions.push('SpeakingGame2'));
  };

  return (
    <SpeakingBackground
      title="단어 말하기"
      question="소리를 듣고 따라말한 후 비교해보자!"
      destination="SpeakingGame2"
      navigation={navigation}
      speakingButtonShown={false}>
      <View style={styles.contentView}>
        <View style={styles.waveView}>
          <TouchableOpacity
            onPress={async () => {
              setPauseAudio(false);
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
              style={styles.wave1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleRePlayAudioRecord && handleRePlayAudioRecord();
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
              style={styles.wave2}
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
      <View style={styles.bottomView}>
        <SpeakingTwoButton
          destination="SpeakingGame4Result"
          navigation={navigation}
          onShowResult={onShowResult}
        />
      </View>
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  wave1: {
    height: ratioH(264),
    width: ratioH(424),
    marginRight: ratioH(40),
  },
  wave2: {
    height: ratioH(264),
    width: ratioH(424),
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
  },
  waveView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bottomView: {},
});

export default Game1Result;

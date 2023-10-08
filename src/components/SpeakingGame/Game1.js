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
import RecordButton from '../../core/Button/RecordButton';
// import { Audio } from 'expo-av';
import SpeechToTextMic from '../SpeechToTextMic/SpeechToTextMic';
// import Voice from 'react-native-voice';
import Video from 'react-native-video';
import SpeakingBackgroundCustom from './SpeakingBackgroundCustom';
import {ratioH} from '../../utils/utils';

const Game1 = ({navigation}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);

  return (
    <SpeakingBackground
      title={'단어 말하기'}
      question={'소리를 듣고 따라말한 후 비교해보자!'}
      onClickSpeakingButton={() => {}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            marginRight: 0,
          }}
          onPress={() => {
            setPauseAudio(false);
          }}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
            style={{
              width: ratioH(424),
            }}
          />
        </TouchableOpacity>
        <View style={{}}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game1/wave2.png')}
            style={{
              width: ratioH(424),
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: ratioH(65),
        }}>
        {/* <SpeechToTextMic onGetText={_text => {}} onFinalMessage={_text => {}} /> */}
      </View>
      <Video
        source={require('../../../assets/audio/SpeakingWoman.mp3')}
        paused={isPauseAudio}
        audioOnly={true}
        repeat={Platform.OS === 'ios'}
        onEnd={() => setPauseAudio(true)}
        style={{height: 0, width: 0}}
      />
    </SpeakingBackground>
  );
  return (
    <>
      <SpeakingBackground
        title="단어 말하기"
        question="소리를 듣고 따라말한 후 비교해보자!"
        destination="SpeakingGame1Result"
        navigation={navigation}
      />
      <View style={[StyleSheet.absoluteFill, {}]}>
        <View style={styles.wave2}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/SpeakingGame/Game1/wave2.png')}
          />
        </View>
        <RecordButton
          destination="SpeakingGame1Result"
          navigation={navigation}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wave1: {
    position: 'absolute',
    top: '35%',
    left: '20%',
    zIndex: 3,
    // fontWeight: 700,
  },
  wave2: {
    position: 'absolute',
    top: '35%',
    left: '53%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game1;

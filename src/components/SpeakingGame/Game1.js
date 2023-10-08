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
  const [isPauseAudioUser, setPauseAudioUser] = useState(true);
  const [isOnlyWhisper, setOnlyWhisper] = useState(false);

  const [audioUrl, setAudioUrl] = useState('');

  console.log({audioUrl});
  return (
    <SpeakingBackgroundCustom
      title={'단어 말하기'}
      subTitle={'소리를 듣고 따라말한 후 비교해보자!'}>
      <View style={{flexDirection: 'row', marginTop: ratioH(41)}}>
        <TouchableOpacity
          style={{
            marginRight: ratioH(51),
          }}
          onPress={() => {
            setPauseAudio(false);
          }}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/SpeakingGame/Game1/wave.png')}
            style={{
              height: ratioH(264),
              width: ratioH(424),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPauseAudio(false);
          }}>
          <Image
            resizeMode="cover"
            source={
              audioUrl
                ? require('../../../assets/images/common/img_record_success.png')
                : require('../../../assets/images/SpeakingGame/Game1/wave2.png')
            }
            style={{
              height: ratioH(264),
              width: ratioH(424),
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: ratioH(65),
        }}>
        <SpeechToTextMic
          // isOnlyWhisper={isOnlyWhisper}
          // setOnlyWhisper={setOnlyWhisper}
          onGetText={_text => {}}
          isOnlyRecord={true}
          onFinalMessage={res => {
            // setAudioUrl(res?.audioUrl);
            navigation.replace('SpeakingGame1Result', {
              data: {
                audioUrl: res?.audioUrl,
              },
            });
            // setPauseAudioUser(false);
            // console.log({res})
            // {
            //   text: res?.data?.text,
            //     audioUrl: audioRecordUri.current,
            // }
            // tra ve text vao link audio, gan linh audio nay vao video la play dc
          }}
        />
      </View>
      <Video
        source={require('../../../assets/audio/SpeakingWoman.mp3')}
        paused={isPauseAudio}
        audioOnly={true}
        repeat={Platform.OS === 'ios'}
        onEnd={() => setPauseAudio(true)}
        style={{height: 0, width: 0}}
      />
      {audioUrl && (
        <Video
          source={{uri: audioUrl}}
          paused={isPauseAudioUser}
          audioOnly={true}
          repeat={Platform.OS === 'ios'}
          onEnd={() => {
            setPauseAudioUser(true);
            setAudioUrl('');
          }}
          ignoreSilentSwitch={'ignore'}
          style={{width: 0, height: 0}}
        />
      )}
    </SpeakingBackgroundCustom>
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

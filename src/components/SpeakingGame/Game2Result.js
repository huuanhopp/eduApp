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
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';
import {ratioH} from '../../utils/utils';

const Game2Result = ({navigation, audioUrl, isCorrect}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);

  const onShowResult = () => {};
  console.log({gdfgsdgd: audioUrl})

  return (
    <SpeakingBackground
      title="문장 말하기"
      question="단어를 이용해 문장을 만든 후 직접 읽어보자!"
      destination="SpeakingGame3"
      speakingButtonShown={false}>
      <View style={styles.contentView}>
        <View style={styles.hint}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game2/answer.png')}
            style={styles.hint}
          />
        </View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/SpeakingGame/Game2/hintSmall.png')}
          style={styles.answerButtons}
        />
        <TouchableOpacity
          style={styles.fullText}
          onPress={async () => {
            setPauseAudio(false);
          }}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game2/audio.png')}
            style={styles.audioImg}
          />
        </TouchableOpacity>
        <Video
          source={{uri: audioUrl}}
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
  blankText: {},
  hint: {
    alignSelf: 'center',
    height: ratioH(72),
  },
  fullText: {},
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerButtons: {
    height: 92,
    marginTop: ratioH(30),
    marginBottom: ratioH(35),
  },
  bottomView: {},
  audioImg: {
    height: ratioH(108),
  },
});

export default Game2Result;

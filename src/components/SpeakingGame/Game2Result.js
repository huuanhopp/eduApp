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
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import WrongSpeakingModalDialog from '../../core/Modal/WrongSpeakingModalDialog';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';
import {CommonSize, ratioH} from '../../utils/utils';

const Game2Result = ({audioUrl}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const isCorrect = route.params?.isCorrect ?? false;
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [wrongModalShown, setWrongModalShown] = useState(false);


  console.log({gggg: audioUrl})
  const onNext = () => {
    setWrongModalShown(false);
    navigation.dispatch(StackActions.push('SpeakingGame3'));
  };

  const onRetry = () => {
    navigation.goBack();
  };

  const onShowResult = () => {
    if (isCorrect) {
      setCorrectModalShown(true);
    } else {
      setWrongModalShown(true);
    }
  };

  return (
    <SpeakingBackground
      title="비슷한 발음 찾기"
      question="제공된 단어와 비슷한 발음을 가지고 있는 단어를 찾아 선택한 후 읽어주세요"
      destination="ListeningGame1"
      navigation={navigation}
      speakingButtonShown={false}>
      <View style={styles.contentView}>
        <View style={styles.hint}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game2/result.png')}
            style={styles.hintImg}
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
      <SpeakingModalDialog
        modalVisible={correctModalShown}
        setModalVisible={setCorrectModalShown}
        onNext={onNext}
      />
      <WrongSpeakingModalDialog
        modalVisible={wrongModalShown}
        setModalVisible={setWrongModalShown}
        onNext={onNext}
        onRetry={onRetry}
      />
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  hint: {},
  hint2: {},
  fullText: {},
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintImg: {
    height: ratioH(80),
  },
  answerButtons: {
    height: 92,
    marginTop: ratioH(30),
    marginBottom: ratioH(35),
  },
  audioImg: {
    height: ratioH(108),
  },
  bottomView: {},
});

export default Game2Result;

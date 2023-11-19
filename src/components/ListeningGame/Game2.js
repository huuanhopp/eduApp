import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  View,
} from 'react-native';
import ListeningBackground from './ListeningBackground';
import AnswerButton from '../../core/Button/AnswerButton';
// import { Audio } from 'expo-av';

import Video from 'react-native-video';
import {ratioH} from '../../utils/utils';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';
import WrongSpeakingModalDialog from '../../core/Modal/WrongSpeakingModalDialog';
import {StackActions} from '@react-navigation/native';

const Game2 = ({navigation}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '나는 오늘 놀이공원에 놀러간다',
      top: 390,
      left: 450,
      selected: false,
      isCorrect: false,
    },
    {
      content: '나는 내일 워터파크에 가기로 했다',
      top: 460,
      left: 450,
      selected: false,
      isCorrect: false,
    },
    {
      content: '너는 매일 아침 일찍 운동을 한다',
      top: 530,
      left: 450,
      selected: false,
      isCorrect: true,
    },
    {
      content: '노는 아이는 일찍 잠에 든다',
      top: 600,
      left: 450,
      selected: false,
      isCorrect: false,
    },
  ]);
  const [answerSelected, setAnswerSlected] = useState(null);
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [wrongModalShown, setWrongModalShown] = useState(false);

  const handleOneChoice = index => {
    setAnswerSlected(anwsOptions[index]);
    if (anwsOptions[index].selected) {
      return;
    }
    const newAnsOptions = anwsOptions.map((ans, idx) => {
      return {
        ...ans,
        selected: index === idx,
      };
    });
    setAnwsOptions(newAnsOptions);
  };

  const onNext = () => {
    setWrongModalShown(false);
    navigation.dispatch(StackActions.push('ListeningGame3'));
  };

  const onRetry = () => {
    setWrongModalShown(false);
  };

  const onCheckResult = () => {
    if (answerSelected?.isCorrect) {
      setCorrectModalShown(true);
    } else {
      setWrongModalShown(true);
    }
  };

  return (
    <ListeningBackground
      title="문장 훈련"
      question="소리를 듣고 올바른 문장을 선택해보자!"
      navigation={navigation}
      destination="ListeningGame3"
      onCheckResult={onCheckResult}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.audio}
          onPress={async () => {
            setPauseAudio(prevState => !prevState);
          }}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/core/Audio.png')}
          />
        </TouchableOpacity>
        <View>
          <AnswerButton
            type="long"
            content={anwsOptions[0].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(0)}
            isUniqueSelected={anwsOptions[0].selected}
            style={styles.answerButton}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
          />
          <AnswerButton
            type="long"
            content={anwsOptions[1].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(1)}
            isUniqueSelected={anwsOptions[1].selected}
            style={styles.answerButton}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
          />
          <AnswerButton
            type="long"
            content={anwsOptions[2].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(2)}
            isUniqueSelected={anwsOptions[2].selected}
            style={styles.answerButton}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
          />
          <AnswerButton
            type="long"
            content={anwsOptions[3].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(3)}
            isUniqueSelected={anwsOptions[3].selected}
            style={styles.answerButton}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
          />
        </View>
      </View>
      <Video
        source={require('../../../assets/audio/SentenceTraining.mp3')}
        paused={isPauseAudio}
        audioOnly={true}
        repeat={Platform.OS === 'ios'}
        onEnd={() => setPauseAudio(true)}
        style={{height: 0, width: 0}}
      />
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
    </ListeningBackground>
  );
};

const styles = StyleSheet.create({
  audio: {
    alignSelf: 'center',
    marginBottom: 30,
    height: ratioH(85),
    aspectRatio: 1,
  },
  answerButton: {
    position: 'relative',
    width: ratioH(560),
    height: ratioH(56),
    marginBottom: 20,
  },
  buttonStyle: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    lineHeight: null,
    includeFontPadding: false,
  },
});

export default Game2;

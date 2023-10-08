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
import Video from 'react-native-video';
import {ratioH} from '../../utils/utils';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';
import WrongSpeakingModalDialog from '../../core/Modal/WrongSpeakingModalDialog';
import {StackActions} from '@react-navigation/native';

const Game5 = ({navigation}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '검은 머리',
      top: 570,
      left: 460,
      selected: false,
      isCorrect: true,
    },
    {
      content: '빨강 머리',
      top: 570,
      left: 650,
      selected: false,
      isCorrect: false,
    },
    {
      content: '노랑 머리',
      top: 570,
      left: 840,
      selected: false,
      isCorrect: false,
    },
  ]);
  const handleOneChoice = index => {
    setAnswerSlected(anwsOptions[index]);
    if (anwsOptions[index].selected) return;
    const newAnsOptions = anwsOptions.map((ans, idx) => {
      return {
        ...ans,
        selected: index === idx,
      };
    });
    setAnwsOptions(newAnsOptions);
  };
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [wrongModalShown, setWrongModalShown] = useState(false);
  const [answerSelected, setAnswerSlected] = useState(null);

  const onNext = () => {
    setWrongModalShown(false);
    navigation.dispatch(StackActions.push('PuzzleGame1'));
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
      title="이야기 훈련"
      question="들려주는 이야기를 듣고 주어진 문제를 풀어보자!"
      navigation={navigation}
      destination="PuzzleGame1"
      onCheckResult={onCheckResult}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.yellowBoard}
          onPress={async () => {
            setPauseAudio(false);
          }}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/ListeningGame/Game5/YellowBoard.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.audio}
          onPress={async () => {
            setPauseAudio(false);
          }}>
          <Image
            style={{width: ratioH(96), height: ratioH(96)}}
            resizeMode="cover"
            source={require('../../../assets/images/core/Audio.png')}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <AnswerButton
            customWidth={300}
            content={anwsOptions[0].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(0)}
            isUniqueSelected={anwsOptions[0].selected}
            style={styles.answerButton}
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
          />
          <AnswerButton
            content={anwsOptions[1].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(1)}
            isUniqueSelected={anwsOptions[1].selected}
            style={{...styles.answerButton, marginLeft: 24, marginRight: 24}}
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
          />
          <AnswerButton
            content={anwsOptions[2].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(2)}
            isUniqueSelected={anwsOptions[2].selected}
            style={styles.answerButton}
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
          />
        </View>
        <Video
          source={require('../../../assets/audio/ListenStory.mp3')}
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
      </View>
    </ListeningBackground>
  );
};

const styles = StyleSheet.create({
  yellowBoard: {
    alignSelf: 'center',
    height: ratioH(93),
    resizeMode: 'contain',
  },
  audio: {
    alignSelf: 'center',
    marginVertical: 33,
  },
  answerButton: {
    position: 'relative',
    width: 164,
    height: ratioH(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    lineHeight: null,
    fontSize: 28,
  },
  buttonStyle: {
    height: ratioH(56),
    width: 164,
  },
});

export default Game5;

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

const Game4 = ({navigation}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: 'O',
      top: 590,
      left: 460,
      selected: false,
      isCorrect: true,
    },
    {
      content: 'X',
      top: 590,
      left: 740,
      selected: false,
      isCorrect: false,
    },
  ]);
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [wrongModalShown, setWrongModalShown] = useState(false);
  const [answerSelected, setAnswerSlected] = useState(null);

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

  const onNext = () => {
    setWrongModalShown(false);
    navigation.dispatch(StackActions.push('ListeningGame5'));
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
      title="소음 훈련"
      question="소음을 듣고 그림과 상황이 일치하면 O, 그렇지 않으면 X를 선택해보자!"
      navigation={navigation}
      leftPosContent="25%"
      destination="ListeningGame5"
      onCheckResult={onCheckResult}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            setPauseAudio(( prevState) => 
               !prevState
            );
          }}>
          <Image
            style={styles.car}
            resizeMode="contain"
            source={require('../../../assets/images/ListeningGame/Game4/Car.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <AnswerButton
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
            style={{...styles.answerButton, marginLeft: 30}}
            textStyle={styles.textStyle}
            buttonStyle={styles.buttonStyle}
          />
        </View>
        <Video
          source={require('../../../assets/audio/CarO.mp3')}
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
  car: {
    width: ratioH(545),
    height: ratioH(253),
  },
  answerButton: {
    position: 'relative',
    width: 258,
    height: ratioH(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    lineHeight: null,
    includeFontPadding: false,
    fontSize: 28,
  },
  buttonStyle: {
    height: ratioH(56),
    width: 258,
  },
});

export default Game4;

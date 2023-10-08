import React, {useState, useRef} from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Platform } from "react-native";
import AnswerButton from '../../core/Button/AnswerButton';
import ListeningBackground from './ListeningBackground';
import {ratioH} from '../../utils/utils';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';
import WrongSpeakingModalDialog from '../../core/Modal/WrongSpeakingModalDialog';
import {StackActions} from '@react-navigation/native';
import Video from 'react-native-video';

const Game1 = ({navigation}) => {
  const [stackChoiceOrder, setStackChoiceOrder] = useState(0);
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '김치',
      top: 450,
      left: 400,
      order: 0,
    },
    {
      content: '노트',
      top: 450,
      left: 740,
      order: 0,
    },
    {
      content: '볶음밥',
      top: 550,
      left: 400,
      order: 0,
    },
    {
      content: '고구마',
      top: 550,
      left: 740,
      order: 0,
    },
  ]);
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [wrongModalShown, setWrongModalShown] = useState(false);
  let removedOrderArr = useRef([]);

  const handleOrderInButton = (isSelected, index) => {
    if (isSelected) {
      if (removedOrderArr.current.length == 0) return stackChoiceOrder + 1;
      else {
        let order = removedOrderArr.current.sort((a, b) => b - a).pop();
        return order;
      }
    } else {
      removedOrderArr.current.push(anwsOptions[index].order);
      return 0;
    }
  };

  const updateStackChoice = (isSelected, index) => {
    let updatedOrder = handleOrderInButton(isSelected, index);
    let newAnwsOptions = anwsOptions.map((item, idx) => {
      if (idx === index) {
        return {...item, order: updatedOrder};
      }
      return item;
    });

    setAnwsOptions([...newAnwsOptions]);
    isSelected
      ? setStackChoiceOrder(prevStack => prevStack + 1)
      : setStackChoiceOrder(prevStack => prevStack - 1);
  };

  const onNext = () => {
    setWrongModalShown(false);
    navigation.dispatch(StackActions.push('ListeningGame2'));
  };

  const onRetry = () => {
    setWrongModalShown(false);
  };

  const onCheckResult = () => {
    if (
      anwsOptions[0].order == 3 &&
      anwsOptions[1].order == 2 &&
      anwsOptions[2].order == 1 &&
      anwsOptions[3].order == 4
    ) {
      setCorrectModalShown(true);
    } else {
      setWrongModalShown(true);
    }
  };

  return (
    <ListeningBackground
      title="단어 훈련"
      question="소리를 듣고 순서에 맞춰 단어를 선택해보자!"
      destination="ListeningGame2"
      navigation={navigation}
      onCheckResult={onCheckResult}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.audio}
          onPress={async () => {
            setPauseAudio(false);
            try {
            } catch (error) {
              console.log('Error playing sound:', error);
            }
          }}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/core/Audio.png')}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <AnswerButton
              content={anwsOptions[0].content}
              selectedOrder={anwsOptions[0].order}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 0)
              }
              style={{...styles.answerButton, marginRight: 12}}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
            />
            <AnswerButton
              content={anwsOptions[1].content}
              selectedOrder={anwsOptions[1].order}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 1)
              }
              style={styles.answerButton}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 12}}>
            <AnswerButton
              content={anwsOptions[2].content}
              selectedOrder={anwsOptions[2].order}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 2)
              }
              style={{...styles.answerButton, marginRight: 12}}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
            />
            <AnswerButton
              content={anwsOptions[3].content}
              selectedOrder={anwsOptions[3].order}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 3)
              }
              style={styles.answerButton}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
            />
          </View>
        </View>
      </View>
      <Video
        source={require('../../../assets/audio/Choose4words.mp3')}
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
  },
  answerButton: {
    position: 'relative',
    width: ratioH(318),
    height: ratioH(88),
  },
  buttonStyle: {
    height: 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 36,
    lineHeight: null,
    includeFontPadding: false,
  },
});

export default Game1;

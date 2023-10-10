import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
import {StackActions, useNavigation} from '@react-navigation/native';
import AnswerButton from '../../core/Button/AnswerButton';
import {ratioH, compareSentences} from '../../utils/utils';

const widthScreen = Dimensions.get('screen').height * 1.431;

const Game4 = () => {
  const navigation = useNavigation();
  const [isCorrect, setIsCorrect] = useState(false);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '숙제',
      left: widthScreen * 0.19,
      selected: false,
      isCorrect: true,
    },
    {
      content: '색깔',
      left: widthScreen * 0.405,
      selected: false,
      isCorrect: false,
    },
    {
      content: '친구',
      left: widthScreen * 0.62,
      selected: false,
      isCorrect: false,
    },
  ]);

  const handleOneChoice = index => {
    if (anwsOptions[index].selected) {
      setIsCorrect(anwsOptions[index].isCorrect);
      return;
    } else {
      const newAnsOptions = anwsOptions.map((ans, idx) => {
        return {
          ...ans,
          selected: index === idx,
        };
      });
      setAnwsOptions(newAnsOptions);
      setIsCorrect(anwsOptions[index].isCorrect);
      return;
    }
  };

  const checkAnswerCondition = () => {
    console.log('vao day');
    let isCondition = false;
    anwsOptions.forEach((answ)=>{
      console.log('answ is', answ);
      if ((answ?.selected === answ?.isCorrect) && answ?.isCorrect) {
        console.log('correct selected ans');
        isCondition =  true;
        }
    })
    return isCondition;
  };

  const checkPercentageCondition = (textRecording) => {
    const SENTENCE_RESULT =  '숙제'
    // const SENTENCE_RESULT =  '안녕하세요';
    console.log('percentage', compareSentences(textRecording, SENTENCE_RESULT))
    return (compareSentences(textRecording, SENTENCE_RESULT) <= 0)
  }


  const onSelectRecordButton = () => {
    navigation.dispatch(StackActions.push('SpeakingGame4Result', {isCorrect}));
  };

  return (
    <SpeakingBackground
      title="비슷한 발음 찾기"
      question="주어진 단어와 비슷한 발음을 가지고 있는 단어를 찾아 선택한 후 읽어보자!"
      destination="ListeningGame1"
      navigation={navigation}
      onClickSpeakingButton={onSelectRecordButton}
      handleFinishRecording={(audioUrl, textRecording) => {
        const isCorrectCondition = checkAnswerCondition() ;
        console.log('finish checkCorrcect', isCorrectCondition);
        const isCorrectPercentage = checkPercentageCondition(textRecording);
        console.log('finish checkCorrcectPercentage', isCorrectPercentage);
        navigation.navigate('SpeakingGame4Result', {
          isCorrect: isCorrectCondition && isCorrectPercentage,
          audioUrl: audioUrl,
        });
      }}
    >
      
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game4/hint.png')}
          style={styles.hintImg}
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <AnswerButton
            content={anwsOptions[0].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(0)}
            isUniqueSelected={anwsOptions[0].selected}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            style={styles.answerButton}
          />
          <AnswerButton
            content={anwsOptions[1].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(1)}
            isUniqueSelected={anwsOptions[1].selected}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            style={{
              ...styles.answerButton,
              marginHorizontal: 24,
            }}
          />
          <AnswerButton
            customWidth={135}
            content={anwsOptions[2].content}
            multipleChoice={false}
            handleOneChoice={index => handleOneChoice(2)}
            isUniqueSelected={anwsOptions[2].selected}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            style={styles.answerButton}
          />
        </View>
      </View>
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  hintImg: {
    alignSelf: 'center',
    height: ratioH(123),
    resizeMode: 'contain',
    marginBottom: ratioH(85),
  },
  buttonStyle: {
    height: 88,
    width: 164,
  },
  textStyle: {
    lineHeight: null,
    includeFontPadding: false,
    fontSize: 28,
  },
  answerButton: {
    position: 'relative',
    width: 164,
    height: 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Game4;

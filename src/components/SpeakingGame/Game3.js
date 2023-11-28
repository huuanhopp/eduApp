import React, {useState, useRef, useEffect, useMemo} from 'react';
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
import AnswerButton from '../../core/Button/AnswerButton';
import {StackActions, useNavigation} from '@react-navigation/native';
import {compareSentences, ratioH} from '../../utils/utils';

const widthScreen = Dimensions.get('screen').height * 1.431;

const Game3 = () => {
  const navigation = useNavigation();
  const [isCorrect, setIsCorrect] = useState(false);

  // Example usage:

  // useEffect(() => {
  //   const sentence1 = '철수는 오늘도 숙제 를(을) 해야한다';
  //   const sentence2 = '철수는 오늘도 숙제 를(을) 해야';
  //   const similarityPercentage = compareSentences(sentence1, sentence2);
  //   console.log(`Similarity Percentage: ${similarityPercentage}`);
  // }, []);
  /// cheolsuneun naleul silh-eohanda

  const [anwsOptions, setAnwsOptions] = useState([
    {
      id: 1,
      content: '숙제',
      top: 530,
      left: widthScreen * 0.26,
      selected: false,
      isCorrect: true,
    },
    {
      id: 2,
      content: '색깔',
      top: 530,
      left: widthScreen * 0.48,
      selected: false,
      isCorrect: false,
    },
    {
      id: 3,
      content: '친구',
      top: 530,
      left: widthScreen * 0.7,
      selected: false,
      isCorrect: false,
    },
    {
      id: 4,
      content: '내일',
      top: 500,
      left: widthScreen * 0.37,
      selected: false,
      isCorrect: false,
    },
    {
      id: 5,
      content: '토스트',
      top: 500,
      left: widthScreen * 0.59,
      selected: false,
      isCorrect: false,
    },
  ]);

  const indexSelected = useMemo(() => {
    return anwsOptions?.findIndex(e => e?.selected == true);
  }, [anwsOptions]);
  console.log({indexSelected});
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

  const onSelectRecordButton = () => {
    navigation.dispatch(StackActions.push('SpeakingGame3Result', {isCorrect}));
  };

  const checkAnswerCondition = () => {
    console.log('vao day');
    let isCondition = false;
    anwsOptions.forEach(answ => {
      console.log('answ is', answ);
      if (answ?.selected === answ?.isCorrect && answ?.isCorrect) {
        console.log('correct selected ans');
        isCondition = true;
      }
    });
    return isCondition;
  };

  const checkPercentageCondition = textRecording => {
    const SENTENCE_RESULT = '철수는 오늘도 숙제를 해야한다';
    const SENTENCE_RESULT1 = '철수는 오늘도 숙제을 해야한다';
    // const SENTENCE_RESULT =  '안녕하세요';
    console.log('percentage', compareSentences(textRecording, SENTENCE_RESULT));
    console.log(
      'percentage',
      compareSentences(textRecording, SENTENCE_RESULT1),
    );
    return (
      compareSentences(textRecording, SENTENCE_RESULT) <= 0 ||
      compareSentences(textRecording, SENTENCE_RESULT1) <= 0
    );
  };

  return (
    <SpeakingBackground
      title="빈칸 채우기"
      question="문장의 빈 칸에 들어갈 알맞은 단어를 찾은 후 문장을 직접 읽어보자!"
      destination="SpeakingGame4"
      navigation={navigation}
      indexSelected={indexSelected}
      handleFinishRecording={(audioUrl, textRecording) => {
        console.log('textRecordiing is', textRecording);
        const isCorrectCondition = checkAnswerCondition();
        console.log('finish checkCorrcect', isCorrectCondition);
        const isCorrectPercentage = checkPercentageCondition(textRecording);
        console.log('finish checkCorrcectPercentage', isCorrectPercentage);
        navigation.navigate('SpeakingGame3Result', {
          isCorrect: isCorrectCondition && isCorrectPercentage,
          audioUrl: audioUrl,
        });
      }}
      onClickSpeakingButton={onSelectRecordButton}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/SpeakingGame/Game3/hint.png')}
          style={styles.hintImg}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <AnswerButton
              customWidth={135}
              content={anwsOptions[0].content}
              multipleChoice={false}
              handleOneChoice={index => handleOneChoice(0)}
              isUniqueSelected={anwsOptions[0].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={styles.answerButton}
            />
            <AnswerButton
              customWidth={135}
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
          <View style={{flexDirection: 'row', marginTop: 24}}>
            <AnswerButton
              customWidth={135}
              content={anwsOptions[3].content}
              multipleChoice={false}
              handleOneChoice={index => handleOneChoice(3)}
              isUniqueSelected={anwsOptions[3].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={{
                ...styles.answerButton,
                marginRight: 24,
              }}
            />
            <AnswerButton
              customWidth={135}
              content={anwsOptions[4].content}
              multipleChoice={false}
              handleOneChoice={index => handleOneChoice(4)}
              isUniqueSelected={anwsOptions[4].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={styles.answerButton}
            />
          </View>
        </View>
      </View>
      {/* <RecordButton onPress={onSelectRecordButton} /> */}
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  hintImg: {
    alignSelf: 'center',
    height: ratioH(93),
    resizeMode: 'contain',
    marginBottom: ratioH(70),
  },
  buttonStyle: {
    height: 56,
    width: 164,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    lineHeight: null,
    includeFontPadding: false,
    fontSize: 28,
  },
  answerButton: {
    position: 'relative',
  },
});

export default Game3;

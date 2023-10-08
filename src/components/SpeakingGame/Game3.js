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
import AnswerButton from '../../core/Button/AnswerButton';
import {StackActions, useNavigation} from '@react-navigation/native';

const widthScreen = Dimensions.get('screen').height * 1.431;

const Game3 = () => {
  const navigation = useNavigation();
  const [isCorrect, setIsCorrect] = useState(false);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: '숙제',
      top: 530,
      left: widthScreen * 0.26,
      selected: false,
      isCorrect: true,
    },
    {
      content: '색깔',
      top: 530,
      left: widthScreen * 0.48,
      selected: false,
      isCorrect: false,
    },
    {
      content: '친구',
      top: 530,
      left: widthScreen * 0.7,
      selected: false,
      isCorrect: false,
    },
  ]);

  const [anwsOptionsBottom, setAnwsOptionsBottom] = useState([
    {
      content: '내일',
      top: 500,
      left: widthScreen * 0.37,
      selected: false,
      isCorrect: false,
    },
    {
      content: '토스트',
      top: 500,
      left: widthScreen * 0.59,
      selected: false,
      isCorrect: false,
    },
  ]);

  const handleOneChoice = index => {
    if (index < 3) {
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

        const newAnsOptionsBottom = anwsOptionsBottom.map((ans, idx) => {
          return {
            ...ans,
            selected: false,
          };
        });
        setAnwsOptionsBottom(newAnsOptionsBottom);
        setIsCorrect(anwsOptions[index].isCorrect);
        return;
      }
    }
    if (index < 5) {
      if (anwsOptionsBottom[index - 3].selected) {
        setIsCorrect(anwsOptionsBottom[index].isCorrect);
        return;
      } else {
        const newAnsOptions = anwsOptions.map((ans, idx) => {
          return {
            ...ans,
            selected: false,
          };
        });
        setAnwsOptions(newAnsOptions);

        const newAnsOptionsBottom = anwsOptionsBottom.map((ans, idx) => {
          return {
            ...ans,
            selected: index - 3 === idx,
          };
        });
        setAnwsOptionsBottom(newAnsOptionsBottom);
        setIsCorrect(anwsOptionsBottom[index - 3].isCorrect);
      }
    }
  };

  const onSelectRecordButton = () => {
    navigation.dispatch(StackActions.push('SpeakingGame3Result', {isCorrect}));
  };

  return (
    <>
      <SpeakingBackground
        title="빈칸 채우기"
        question="문장의 빈 칸에 들어갈 알맞은 단어를 찾은 후 문장을 직접 읽어보자!"
        destination="SpeakingGame4"
        navigation={navigation}
      />
      <View style={styles.hint}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game3/hint.png')}
        />
      </View>
      {anwsOptions.map((item, index) => (
        <AnswerButton
          customWidth={135}
          key={index}
          id={index}
          content={item.content}
          left={item.left}
          multipleChoice={false}
          handleOneChoice={index => handleOneChoice(index)}
          isUniqueSelected={item.selected}
          customHeight={56}
        />
      ))}
      {anwsOptionsBottom.map((item, index) => (
        <AnswerButton
          customWidth={135}
          key={index}
          id={index}
          content={item.content}
          top={item.top}
          left={item.left}
          multipleChoice={false}
          handleOneChoice={index => handleOneChoice(index + 3)}
          isUniqueSelected={item.selected}
          customHeight={56}
        />
      ))}
      <RecordButton onPress={onSelectRecordButton} />
    </>
  );
};

const styles = StyleSheet.create({
  hint: {
    position: 'absolute',
    top: '34%',
    zIndex: 3,
  },

  ans1: {
    position: 'absolute',
    top: '50%',
    zIndex: 30,
    left: '32%',
  },

  ans2: {
    position: 'absolute',
    top: '50%',
    zIndex: 30,
    left: '45%',
  },

  ans3: {
    position: 'absolute',
    top: '50%',
    zIndex: 30,
    left: '58%',
  },

  ans4: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: '38%',
  },

  ans5: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: '52%',
  },
});

export default Game3;

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

  const onSelectRecordButton = () => {
    navigation.dispatch(StackActions.push('SpeakingGame4Result', {isCorrect}));
  };

  return (
    <>
      <SpeakingBackground
        title="비슷한 발음 찾기"
        question="주어진 단어와 비슷한 발음을 가지고 있는 단어를 찾아 선택한 후 읽어보자!"
        destination="ListeningGame1"
        navigation={navigation}
      />
      <View style={styles.hint}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game4/hint.png')}
        />
      </View>
      <View
        style={{
          height: 60,
          position: 'absolute',
          width: widthScreen,
          top: widthScreen * 0.38,
          zIndex: 999,
        }}>
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
      </View>
      <RecordButton
        destination="SpeakingGame4Result"
        navigation={navigation}
        onPress={onSelectRecordButton}
      />
    </>
  );
};

const styles = StyleSheet.create({
  hint: {
    position: 'absolute',
    top: '38%',
    zIndex: 3,
  },

  ans1: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: '32%',
  },

  ans2: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: '45%',
  },

  ans3: {
    position: 'absolute',
    top: '60%',
    zIndex: 30,
    left: '58%',
  },
});

export default Game4;

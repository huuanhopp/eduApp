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

const Game4 = ({navigation}) => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [anwsOptions, setAnwsOptions] = useState([
    {
      content: 'O',
      top: 590,
      left: 460,
      selected: false,
    },
    {
      content: 'X',
      top: 590,
      left: 740,
      selected: false,
    },
  ]);

  const handleOneChoice = index => {
    if (anwsOptions[index].selected) return;
    const newAnsOptions = anwsOptions.map((ans, idx) => {
      return {
        ...ans,
        selected: index === idx,
      };
    });
    setAnwsOptions(newAnsOptions);
  };

  return (
    <ListeningBackground
      title="소음 훈련"
      question="소음을 듣고 그림과 상황이 일치하면 O, 그렇지 않으면 X를 선택해보자!"
      navigation={navigation}
      leftPosContent="25%"
      destination="ListeningGame5">
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.car}
          onPress={async () => {
            setPauseAudio(false);
          }}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/ListeningGame/Game4/Car.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 60,
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
          source={require('../../../assets/audio/SentenceTraining.mp3')}
          paused={isPauseAudio}
          audioOnly={true}
          repeat={Platform.OS === 'ios'}
          onEnd={() => setPauseAudio(true)}
          style={{height: 0, width: 0}}
        />
      </View>
    </ListeningBackground>
  );
};

const styles = StyleSheet.create({
  car: {
    width: ratioH(541),
    height: ratioH(249),
  },
  answerButton: {
    position: 'relative',
    width: ratioH(258),
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

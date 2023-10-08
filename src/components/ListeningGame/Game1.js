import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from 'react-native';
import ConfirmButton from '../../core/Button/ConfirmButton';
import BackButton from '../../core/Button/BackButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
import AnswerButton from '../../core/Button/AnswerButton';
import ListeningBackground from './ListeningBackground';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';

const Game1 = ({navigation}) => {
  const [stackChoiceOrder, setStackChoiceOrder] = useState(0);
  const [isPauseAudio, setPauseAudio] = useState(true);
  let removedOrderArr = useRef([]);
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

    setAnwsOptions(newAnwsOptions);
    isSelected
      ? setStackChoiceOrder(prevStack => prevStack + 1)
      : setStackChoiceOrder(prevStack => prevStack - 1);
  };

  return (
    <>
      <ListeningBackground
        title="단어 훈련"
        question="소리를 듣고 순서에 맞춰 단어를 선택해보자!"
        destination="ListeningGame2"
        navigation={navigation}
      />
      {anwsOptions.map((item, index) => (
        <AnswerButton
          key={index}
          id={index}
          content={item.content}
          top={item.top}
          left={item.left}
          selectedOrder={item.order}
          callbackFunc={(isSelected, index) =>
            updateStackChoice(isSelected, index)
          }
        />
      ))}
      <TouchableOpacity
        style={styles.audio}
        onPress={async () => {
          setPauseAudio(false);
          // const soundObject = new Audio.Sound();
          try {
            // await soundObject.loadAsync(
            //   require('../../../assets/audio/Choose4words.mp3'),
            // );
            // await soundObject.playAsync();
          } catch (error) {
            console.log('Error playing sound:', error);
          }
        }}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/core/Audio.png')}
        />
      </TouchableOpacity>
      <Video
        source={require('../../../assets/audio/Choose4words.mp3')}
        paused={isPauseAudio}
        audioOnly={true}
        repeat={Platform.OS === 'ios'}
        onEnd={() => setPauseAudio(true)}
        style={{height: 0, width: 0}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  audio: {
    position: 'absolute',
    top: 321,
    left: '46%',
    zIndex: 3,
    // fontWeight: 700,
  },
});

export default Game1;

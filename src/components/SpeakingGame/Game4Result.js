import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
import SpeakingTwoButton from '../../core/Button/SpeakingTwoButton';
// import { Audio } from 'expo-av';
import Video from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';
import WrongSpeakingModalDialog from '../../core/Modal/WrongSpeakingModalDialog';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';

const Game4Result = () => {
  const [isPauseAudio, setPauseAudio] = useState(true);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const isCorrect = route.params?.isCorrect ?? false;
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [wrongModalShown, setWrongModalShown] = useState(false);

  const onNext = () => {
    // navigation.dispatch(StackActions.push('SpeakingGame5'));
  };

  const onRetry = () => {
    navigation.goBack();
  };

  const onShowResult = () => {
    if (isCorrect) {
      setCorrectModalShown(true);
    } else {
      setWrongModalShown(true);
    }
  };

  return (
    <>
      <SpeakingBackground
        title="비슷한 발음 찾기"
        question="제공된 단어와 비슷한 발음을 가지고 있는 단어를 찾아 선택한 후 읽어주세요"
        destination="ListeningGame1"
        navigation={navigation}
      />
      <View style={styles.hint}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game4/hintSmall.png')}
        />
      </View>

      <View style={styles.hint2}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game4/allAnswer.png')}
        />
      </View>

      <TouchableOpacity
        style={styles.fullText}
        onPress={async () => {
          setPauseAudio(false);
        }}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/Game2/audio.png')}
        />
      </TouchableOpacity>

      <SpeakingTwoButton
        destination="SpeakingGame4Result"
        navigation={navigation}
        onShowResult={onShowResult}
      />
      <Video
        source={require('../../../assets/audio/notCorrect1.m4a')}
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
        setModalVisible={WrongSpeakingModalDialog}
        onNext={onNext}
        onRetry={onRetry}
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
  hint2: {
    position: 'absolute',
    top: '52%',
    zIndex: 3,
  },
  fullText: {
    position: 'absolute',
    top: '65%',
    zIndex: 3,
  },
});

export default Game4Result;

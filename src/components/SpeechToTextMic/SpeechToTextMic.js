import React, {useEffect, useRef, useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform, Image } from "react-native";
import Voice from '@react-native-voice/voice';
import { ratioH, ratioW } from "../../utils/utils";
// import * as ExpoStt from 'expo-stt';

const SpeechToTextMic = ({onGetText, onFinalMessage}) => {
  // nav
  // ref
  // state
  // use Effect
  // function
  // part Component
  // main container
  //
  const [textOfSpeech, setTextOfSpeech] = useState('');
  const [error, setError] = useState('');
  const [isRecording, setRecording] = useState(false);
  let silenceTimer = useRef(null);
  const timeOut = 3500;
  const textVoice = useRef('');

  const getAvailable = async () => {
    const isAvailable = await Voice.isAvailable();
    console.log({isAvailable});
  };

  useEffect(() => {
    onGetText && onGetText(textOfSpeech);
  }, [textOfSpeech]);

  useEffect(() => {
    getAvailable();
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    // Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
  };

  const onSpeechError = e => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setRecording(false);
    Voice.stop().then();
    Voice.destroy().then(Voice.removeAllListeners);
  };

  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e?.value?.[0]);
    setTextOfSpeech(e?.value?.[0]);
    setRecording(false);
    if (Platform.OS === 'android') {
      if (silenceTimer?.current) {
        clearTimeout(silenceTimer.current);
      }
      silenceTimer.current = setTimeout(async () => {
        await Voice.stop();
        Voice.destroy().then(Voice.removeAllListeners);
        onFinalMessage(textVoice.current);
      }, timeOut);
    }
    // setResults(e.value);
  };

  const onSpeechPartialResults = e => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e?.value?.[0]);
    setTextOfSpeech(e?.value?.[0]);
    textVoice.current = e?.value?.[0];
    // setPartialResults(e.value);
  };

  //
  // const handleRequestPermission = async () => {
  //   await ExpoStt.requestRecognitionPermission();
  // }
  //
  // useEffect(() => {
  //   handleRequestPermission();
  //   const onSpeechStart = ExpoStt.addOnSpeechStartListener(() => {
  //     setTextOfSpeech("");
  //     setError(undefined);
  //     setRecording(true);
  //   });
  //
  //   const onSpeechResult = ExpoStt.addOnSpeechResultListener(({ value }) => {
  //     setTextOfSpeech(value.join());
  //   });
  //
  //   const onSpeechCancelled = ExpoStt.addOnSpeechCancelledListener(() => {
  //     setRecording(false);
  //   });
  //
  //   const onSpeechError = ExpoStt.addOnSpeechErrorListener(({ cause }) => {
  //     setError(cause);
  //     setRecording(false);
  //   });
  //
  //   const onSpeechEnd = ExpoStt.addOnSpeechEndListener(() => {
  //     setRecording(false);
  //   });
  //
  //   return () => {
  //     onSpeechStart.remove();
  //     onSpeechResult.remove();
  //     onSpeechCancelled.remove();
  //     onSpeechError.remove();
  //     onSpeechEnd.remove();
  //   };
  // }, []);
  //
  const handlePressRecord = async () => {
    if (!isRecording) {
      setTextOfSpeech('');
      //ko-KR
      await Voice.start('ko-KR', {
        RECOGNIZER_ENGINE: 'GOOGLE',
        EXTRA_PARTIAL_RESULTS: true,
        REQUEST_PERMISSIONS_AUTO: true,
        EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS: 10000,
      });
    } else {
      await Voice.stop();
      Voice.destroy().then(Voice.removeAllListeners);
      onFinalMessage(textOfSpeech);
      if (silenceTimer?.current) {
        clearTimeout(silenceTimer.current);
      }
    }
    setRecording(!isRecording);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
        {textOfSpeech}
      </Text>
      <TouchableOpacity onPress={handlePressRecord}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/SpeakingGame/micButton.png')}
          style={{
            height: ratioH(90),
            width: ratioH(90),
            opacity: isRecording ? 0.5 : 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SpeechToTextMic;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

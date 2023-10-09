import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Image,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import {ratioH, ratioW, whisper_token} from '../../utils/utils';
import Permissions from 'react-native-permissions';
import AudioRecord from 'react-native-audio-record';
import axios from 'axios';

const options = {
  sampleRate: 16000, // default 44100
  channels: 1, // 1 or 2, default 1
  bitsPerSample: 16, // 8 or 16, default 16
  audioSource: 6, // android only (see below)
  wavFile: 'test.wav', // default 'audio.wav'
};

// import * as ExpoStt from 'expo-stt';

const SpeechToTextMic = ({
  onGetText,
  onFinalMessage,
  isOnlyWhisper = true,
  isOnlyRecord = false,
  audioFileName = null,
  // setOnlyWhisper,
}) => {
  // nav
  // ref
  // state
  // use Effect
  // function
  // part Component
  // main container
  //
  const [textOfSpeech, setTextOfSpeech] = useState('');
  const [isRecording, setRecording] = useState(false);
  const [isAvailable, setAvailable] = useState(null);
  const [isPermission, setPermission] = useState(false);
  const audioRecordUri = useRef(null);
  let silenceTimer = useRef(null);
  const timeOut = 3500;
  const textVoice = useRef('');

  const getAvailable = async () => {
    const _isAvailable = await Voice.isAvailable();
    setAvailable(_isAvailable);
  };
  console.log({isAvailable});

  const isUsingWhisper = useMemo(() => {
    return isAvailable === false || isOnlyWhisper;
  }, [isAvailable, isOnlyWhisper]);

  useEffect(() => {
    onGetText && onGetText(textOfSpeech);
  }, [textOfSpeech]);

  useEffect(() => {
    if (!isPermission) {
      setTimeout(() => {
        requestPermission();
      }, 1500);
    }
  }, []);

  useEffect(() => {
    if (isPermission) {
      AudioRecord.init(options);
    }
  }, [isPermission]);

  async function handleRecord() {
    if (!isPermission) {
      requestPermission();
      return;
    }
    if (audioFileName) {
      await AudioRecord.init({
        sampleRate: 16000, // default 44100
        channels: 1, // 1 or 2, default 1
        bitsPerSample: 16, // 8 or 16, default 16
        audioSource: 6, // android only (see below)
        wavFile: audioFileName, // default 'audio.wav'
      });
    }
    await AudioRecord.start();
    setRecording(true);
    // timeStop.current = setTimeout(() => {
    //   stopRecord();
    //   clearTimeout(timeStop.current);
    // }, timeWord);
  }

  async function handleStopRecord() {
    const audioFile = await AudioRecord.stop();
    const recordFileUri =
      Platform.OS === 'ios' ? audioFile : 'file://' + audioFile;
    audioRecordUri.current = audioFile;
    console.log({recordFileUri});
    if (isOnlyRecord) {
      setRecording(false);
      onFinalMessage({
        text: null,
        audioUrl: audioRecordUri.current,
      });
      return;
    }
    const param = new FormData();
    param.append('model', 'whisper-1');
    param.append('language', 'ko');
    param.append('file', {
      uri: recordFileUri,
      type: Platform.OS === 'ios' ? 'audio' : 'audio/wav',
      name: 'videodub.wav',
    });

    axios
      .post('https://api.openai.com/v1/audio/transcriptions', param, {
        headers: {
          Authorization:
            'Bearer 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',
        },
      })
      .then(res => {
        console.log({res});
        onFinalMessage({
          text: res?.data?.text,
          audioUrl: audioRecordUri.current,
        });
        setTextOfSpeech(res?.data?.text);
      })
      .catch(e => {
        console.log({e});
      });
    setRecording(false);
  }

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

  const requestPermission = async () => {
    const p = await Permissions.request(
      Platform.OS === 'android'
        ? Permissions.PERMISSIONS.ANDROID.RECORD_AUDIO
        : Permissions.PERMISSIONS.IOS.MICROPHONE,
    );
    if (p === 'granted') {
      setPermission(true);
      return p;
    }
    console.log('permission request', p);
  };
  const handlePressRecord = async () => {
    // k co speech to text trong may
    setTextOfSpeech('');
    if (isUsingWhisper === true) {
      if (isRecording) {
        await handleStopRecord();
      } else {
        await handleRecord();
      }
    } else {
      console.log("Hello")
      if (!isRecording) {
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
    }
  };

  if (isAvailable === null) {
    return <View />;
  }
  // if (isAvailable === false) {
  //   return <View />;
  // }
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
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
      {/*{isAvailable === true && (*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      position: 'absolute',*/}
      {/*      right: -100,*/}
      {/*      alignItems: 'center',*/}
      {/*    }}>*/}
      {/*    <TouchableOpacity*/}
      {/*      onPress={() => {*/}
      {/*        setOnlyWhisper && setOnlyWhisper(!isOnlyWhisper);*/}
      {/*      }}*/}
      {/*      style={{*/}
      {/*        height: 50,*/}
      {/*        width: 80,*/}
      {/*        backgroundColor: 'red',*/}
      {/*        borderRadius: 20,*/}
      {/*        alignItems: 'center',*/}
      {/*        justifyContent: 'center',*/}
      {/*      }}>*/}
      {/*      <Text*/}
      {/*        style={{*/}
      {/*          fontSize: 12,*/}
      {/*          color: '#ffffff',*/}
      {/*        }}>*/}
      {/*        Switch*/}
      {/*      </Text>*/}
      {/*    </TouchableOpacity>*/}
      {/*    <Text>{isOnlyWhisper ? 'Whisper' : 'S2T'}</Text>*/}
      {/*  </View>*/}
      {/*)}*/}
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

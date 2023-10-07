import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { AudioRecorderPlayer } from 'react-native-audio-recorder-player';

const Voice = () => {
  // const audioRecorderPlayer = new AudioRecorderPlayer();
  // const [isRecording, setIsRecording] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const startRecord = async () => {
  //   const result = await audioRecorderPlayer.startRecorder();
  //   if (result) {
  //     setIsRecording(true);
  //   }
  // }

  // const stopRecord = async () => {
  //   const result = await audioRecorderPlayer.stopRecorder();
  //   if (result) {
  //     setIsRecording(false);
  //   }
  // }

  // const startPlay = async () => {
  //   const result = await audioRecorderPlayer.startPlayer();
  //   if (result) {
  //     setIsPlaying(true);
  //   }
  // }

  // const stopPlay = async () => {
  //   const result = await audioRecorderPlayer.stopPlayer();
  //   if (result) {
  //     setIsPlaying(false);
  //   }
  // }

  return (
    <View>
      {/* <Text>Voice Recorder</Text>
      <TouchableOpacity onPress={startRecord} disabled={isRecording}>
        <Text>Start Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopRecord} disabled={!isRecording}>
        <Text>Stop Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={startPlay} disabled={isPlaying}>
        <Text>Start Playing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopPlay} disabled={!isPlaying}>
        <Text>Stop Playing</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Voice;

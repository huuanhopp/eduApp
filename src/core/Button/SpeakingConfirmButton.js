import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import {ratioH, ratioW} from '../../utils/utils';
import SpeechToTextMic from '../../components/SpeechToTextMic/SpeechToTextMic';

const SpeakingConfirmButton = ({
  style = styles.absolute,
  Modal,
  destination,
  navigation,
  onPress,
  indexSelected,
  handleFinishRecording,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log({indexSelected});
  return (
    <>
      <SpeechToTextMic
        // isOnlyWhisper={isOnlyWhisper}
        // setOnlyWhisper={setOnlyWhisper}
        onGetText={_text => {}}
        isOnlyRecord={true}
        audioFileName={
          indexSelected ? `audio_${indexSelected?.toString()}.wav` : null
        }
        onFinalMessage={res => {
          handleFinishRecording && handleFinishRecording(res?.audioUrl);
          // setAudioUrl(res?.audioUrl);
          // navigation.replace('SpeakingGame1Result', {
          //   data: {
          //     audioUrl: res?.audioUrl,
          //   },
          // });
          // setPauseAudioUser(false);
          // console.log({res})
          // {
          //   text: res?.data?.text,
          //     audioUrl: audioRecordUri.current,
          // }
          // tra ve text vao link audio, gan linh audio nay vao video la play dc
        }}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        destination={destination}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  absolute: {
    width: ratioH(90),
    height: ratioH(90),
  },
});

export default SpeakingConfirmButton;

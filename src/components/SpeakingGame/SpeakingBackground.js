import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../core/Button/BackButton';
import SpeakingConfirmButton from '../../core/Button/SpeakingConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
import {CommonSize, ratioW} from '../../utils/utils';
const SpeakingBackground = ({
  navigation,
  title,
  question,
  destination,
  leftPosContent = 'auto',
  leftPosTitle = '44.6%',
}) => {
  console.log({CommonSize});
  return (
    <>
      <Image
        // style={{height}}
        style={{
          height: CommonSize.srcHeight,
          width: CommonSize.srcWidth,
          backgroundColor: 'rgb(224,238,255)',
        }}
        resizeMode={'contain'}
        source={require('../../../assets/images/SpeakingGame/SpeakingBackground.png')}
      />
      <View style={[styles.textTitle]}>
        <Text style={{fontSize: ratioW(44), fontWeight: 'bold'}}>{title}</Text>
      </View>
      <View style={[styles.quesContent]}>
        <Text style={{fontSize: ratioW(28)}}>{question}</Text>
      </View>
      <View></View>
      <BackButton navigation={navigation} navigateTo="Progress" />
      <SpeakingConfirmButton
        Modal={ListeningModalDialog}
        destination={destination}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    position: 'absolute',
    top: '18%',
    zIndex: 3,
    textAlign: 'center',
  },

  quesContent: {
    position: 'absolute',
    textAlign: 'center',
    top: '28%',
    zIndex: 3,
  },
});

export default SpeakingBackground;

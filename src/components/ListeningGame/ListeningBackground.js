import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BackButton from '../../core/Button/BackButton';
import ConfirmButton from '../../core/Button/ConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
const ListeningBackground = ({
  navigation,
  title,
  question,
  destination,
  leftPosContent = '32%',
  leftPosTitle = '44.6%',
}) => {
  return (
    <>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/ListeningGame/ListeningBackground.png')}
        // source={require('../../../assets/images/ListeningGame/Game5/FullScreen.png')}
      ></Image>
      <View style={[styles.textTitle, { left: leftPosTitle }]}>
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <View style={[styles.quesContent, { left: leftPosContent }]}>
        <Text style={{ fontSize: 28 }}>{question}</Text>
      </View>
      <BackButton navigation={navigation} navigateTo="Progress" />
      <ConfirmButton
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
    top: 165,
    // left: '44.6%',
    zIndex: 3,
    // fontWeight: 700,
  },
  quesContent: {
    position: 'absolute',
    // backgroundColor: 'green',
    top: 235,
    // left: '32%',
    zIndex: 3,
  },
});

export default ListeningBackground;

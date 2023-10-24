import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Gif from 'react-native-gif';

const widthScreen = Dimensions.get('screen').height * 1.431;

const TimeOutModalDialog = ({
  modalVisible,
  setModalVisible,
  navigation,
  destination,
  onNext,
  onRetry,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../../assets/images/core/TimeOutModalDialog.png')}
          style={styles.bgImg}>
          <FastImage
            style={styles.gifImage}
            resizeMode="cover"
            source={require('../../../assets/images/gif/timeOut.gif')}
          />
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.retryButton} onPress={onRetry} />
            <TouchableOpacity style={styles.nextButton} onPress={onNext} />
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  centeredView: {
    // justifyContent: 'center',
    // alignItems: 'center',
    height: (widthScreen * 574) / 1194,
    width: (widthScreen * 894) / 1194,
    backgroundColor: 'red',
  },
  modalView: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  gifImage: {
    alignSelf: 'center',
    height: ((widthScreen * 500) / 1194) * 0.7,
    aspectRatio: 1,
    position: 'absolute'
  },
  bgImg: {
    height: (widthScreen * 574) / 1194,
    width: (widthScreen * 894) / 1194,
    justifyContent: 'center',
    position: 'relative',
  },
  retryButton: {
    // backgroundColor: "red",
    width: (widthScreen * 331) / 1194,
    height: 150,
  },
  nextButton: {
    // backgroundColor:"green",
    width: (widthScreen * 331) / 1194,
    height: 150,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',  // set this to absolute
    bottom: 0.05 * (widthScreen * 574) / 1194,  // this positions it 15% away from the bottom
    left: 0,
    right: 0,
  },
});

export default TimeOutModalDialog;

import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const widthScreen = Dimensions.get('screen').height * 1.431;

const SpeakingModalDialog = ({
  modalVisible,
  setModalVisible,
  navigation,
  destination,
  onNext,
}) => {
  return (
    <View style={{height: modalVisible ? 'auto' : 0}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
                onNext();
              }}>
              <Image
                resizeMode="cover"
                source={require('../../../assets/images/core/ListeningModalDialog.png')}
              />
            </TouchableOpacity>
            <FastImage
              style={styles.gifImage}
              resizeMode="cover"
              source={require('../../../assets/images/gif/correct.gif')}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'relative',
  },
  modalView: {
    position: 'relative',
    margin: 20,
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
    position: 'absolute',
    top: 120,
    height: ((widthScreen * 574) / 1194) * 0.7,
    aspectRatio: 1,
  },
});

export default SpeakingModalDialog;

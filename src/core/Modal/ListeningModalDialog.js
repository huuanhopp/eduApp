import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const ListeningModalDialog = ({
  modalVisible,
  setModalVisible,
  navigation,
  destination,
}) => {
  //   const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{ ...styles.openButton }}
              onPress={() => {
                setModalVisible(!modalVisible);
                if (destination) navigation.navigate(destination);
              }}
            >
              <Image
                resizeMode="cover"
                source={require('../../../assets/images/core/ListeningModalDialog.png')}
              />
            </TouchableOpacity>
            <Image
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
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: 'none',
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
    top: 50,
  },
});

export default ListeningModalDialog;

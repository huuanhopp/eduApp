import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ConfirmButton = ({
  style = styles.absolute,
  Modal,
  destination,
  navigation,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
        // if (destination) {
        //   navigation.navigate(destination);
        // }
      }}
      style={style}
    >
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/core/ConfirmButton.png')}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        destination={destination}
        navigation={navigation}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    bottom: 75,
    left: 555,
  },
});

export default ConfirmButton;

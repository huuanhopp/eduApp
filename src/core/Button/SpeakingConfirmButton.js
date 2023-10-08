import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ratioH, ratioW} from '../../utils/utils';

const SpeakingConfirmButton = ({
  style = styles.absolute,
  Modal,
  destination,
  navigation,
  onPress,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        // setModalVisible(true);
        onPress();
      }}
      style={style}>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/SpeakingGame/micButton.png')}
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
    width: ratioH(90),
    height: ratioH(90),
  },
});

export default SpeakingConfirmButton;

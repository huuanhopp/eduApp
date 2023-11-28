import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {screenSize} from '../constants/constants';
import {ratioH} from '../utils/utils';
const StageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          height: '100%',
          aspectRatio: 1194 / 834,
        }}
        resizeMode="contain"
        source={require('../../assets/images/StageScreen/StageScreenNew.png')}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => {
            navigation.pop();
          }}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/StageScreen/CloseButton.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEC99',
    alignItems: 'center',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginRight: ratioH(40),
    marginTop: ratioH(47),
  },
});

export default StageScreen;

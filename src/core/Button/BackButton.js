import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ratioW} from '../../utils/utils';

const BackButton = ({navigation, style = styles.absolute, navigateTo}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigateTo ? navigation.navigate(navigateTo) : navigation.pop();
      }}
      style={style}>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/core/BackButton.png')}
        style={{height: ratioW(56), width: ratioW(56)}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 55,
    left: 175,
    height: ratioW(56),
    width: ratioW(56),
  },
});

export default BackButton;

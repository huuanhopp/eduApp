import React, {useState} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ratioH} from '../../utils/utils';

const Card = ({
  top,
  left,
  hiddenImage,
  selected,
  index,
  handSelectedCard,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handSelectedCard(index);
      }}
      style={[styles.absolute, {top, left}, style]}>
      <Image
        resizeMode="contain"
        source={
          !selected
            ? require('../../../assets/images/PuzzleGame/Game1/Card.png')
            : hiddenImage
        }
        style={styles.cardImg}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {},
  cardImg: {
    height: ratioH(216),
    width: ratioH(182),
  },
});

export default Card;

import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Card = ({
  top,
  left,
  hiddenImage,
  selected,
  index,
  handSelectedCard,
}) => {
  // const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        handSelectedCard(index);
      }}
      style={[styles.absolute, { top, left }]}
    >
      <Image
        resizeMode="cover"
        source={
          !selected
            ? require('../../../assets/images/PuzzleGame/Game1/Card.png')
            : hiddenImage
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
});

export default Card;

import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  PanResponder,
  View,
  Text,
} from 'react-native';
import {ratioH} from '../../utils/utils';

const Card2 = ({urlImage, debug}) => {
  console.log(typeof urlImage);

  const [coordinates, setCoordinates] = useState({x: 0, y: 0});
  const [showCircle, setShowCircle] = useState(false);
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
          const x = gestureState.moveX;
          const y = gestureState.moveY;

          if (x !== -1) {
            setShowCircle(true);
          } else {
            setShowCircle(false);
          }

          setCoordinates({x, y});
        },
        onPanResponderRelease: () => {
          // Handle release if needed
          setShowCircle(false);
        },
      }),
    [],
  );
  return (
    <View>
      <Image
        {...panResponder.panHandlers}
        source={urlImage} // Replace with the actual path to your first image
        style={{marginRight: '3%'}}
      />
      {showCircle && (
        <View
          style={[styles.circle, {left: coordinates.x, top: coordinates.y}]}
        />
      )}
      {debug && (
        <>
          <Text>X: {coordinates.x.toFixed(2)}</Text>
          <Text>Y: {coordinates.y.toFixed(2)}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {},
  cardImg: {
    height: ratioH(196),
  },
  circle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF6E6E',
    opacity: 0.5,
  },
});

export default Card2;

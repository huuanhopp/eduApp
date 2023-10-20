import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import PuzzleBackground from './PuzzleBackground';
import Card2 from '../../core/Card/Card2';

const FragImage = ({ urlImage }) => {
  return (
    <TouchableOpacity>
      <Image source={urlImage} />
    </TouchableOpacity>
  );
};

const Game3 = ({ navigation }) => {
  const onCheckResult = () => {
    // Implement your check result logic here
  };

  return (
    <PuzzleBackground
      title="퍼즐 맞추기"
      question="주어진 시간 안에 퍼즐을 맞춰보자!"
      navigation={navigation}
      destination="PuzzleGame1"
      onCheckResult={onCheckResult}>
      <View style={styles.contentView}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cardContainer}>
            <Card2
              urlImage={require('../../../assets/images/PuzzleGame/Game3/bg1.png')}
            />
            <View style={styles.cardHolder}>
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p9.png')}
              />
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p7.png')}
              />
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p2.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p8.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p1.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p3.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p6.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p5.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p4.png')}
              />
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Card2
              urlImage={require('../../../assets/images/PuzzleGame/Game3/bg2.png')}
            />
            <View style={styles.cardHolder}>
              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p1.png')}
              />
              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p2.png')}
              />
              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p3.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p4.png')}
              />
              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p5.png')}
              />
              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p6.png')}
              />

              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p7.png')}
              />
              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p8.png')}
              />
              <Image
                source={require('../../../assets/images/PuzzleGame/Game3/p9.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </PuzzleBackground>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardHolder: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: 6,
  },
});

export default Game3;

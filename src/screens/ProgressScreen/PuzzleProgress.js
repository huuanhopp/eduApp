import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ratioH} from '../../utils/utils';
const PuzzleScreen = ({navigation}) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/ProgressScreen/PuzzleProgress.png')}
      />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.pop();
        }}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/BackButton.png')}
          style={{
            opacity: 0,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.yellowNumber}
        onPress={() => {
          // navigation.navigate('PuzzleGame1', {status: 3});
          navigation.navigate('GuideScreen', {status: 3});
        }}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/YellowNumber.png')}
        />
      </TouchableOpacity>

      {showInstructions && (
        <View style={styles.instructionContainer}>
          <TouchableOpacity style={styles.xBtn} onPress={toggleInstructions}>
            <Image
              resizeMode="cover"
              source={require('../../../assets/images/ProgressScreen/xButton.png')}
            />
          </TouchableOpacity>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/ProgressScreen/Instruct.png')}
          />
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => {
              // navigation.navigate('Stage1');
              navigation.navigate('PuzzleGame3');
            }}>
            <Image
              resizeMode="cover"
              source={require('../../../assets/images/ProgressScreen/StartButton.png')}
            />
          </TouchableOpacity>

          {/* <Image
              style={styles.video}
              resizeMode="cover"
              source={require('../../../assets/images/ProgressScreen/video.png')}
            /> */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    zIndex: 1,
    top: ratioH(25),
    left: '11.3%',
    borderRadius: 4,
    opacity: 0,
    width: 100,
    height: 100,
  },
  yellowNumber: {
    position: 'absolute',
    zIndex: 1,
    top: '64%',
    left: '24.5%',
    borderRadius: 4,
    opacity: 0,
  },
  instructionContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  xBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '5%',
    right: '5%',
  },
  startBtn: {
    position: 'absolute',
    zIndex: 1,
    top: '85%',
    right: '40%',
  },
  video: {
    position: 'absolute',
    zIndex: 1,
    top: '85%',
    right: '40%',
  },
  number2: {
    position: 'absolute',
    zIndex: 1,
    bottom: 200,
    left: 370,
    opacity: 0,
    // pointerEvents: 'cursor',
  },
});

export default PuzzleScreen;

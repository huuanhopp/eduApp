import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ratioH} from '../../utils/utils';
const ListeningProgress = ({navigation}) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/ProgressScreen/ListeningProgress.png')}
        resizeMode="stretch"
        style={{
          height: '100%',
          aspectRatio: 1194 / 834,
        }}
      />

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.pop();
        }}>
        {/* <Image
          resizeMode="cover"
          source={require('../../../assets/images/ProgressScreen/BackButton.png')}
        /> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.yellowNumber}
        // onPress={toggleInstructions}
        onPress={() => {
          // navigation.navigate('Stage1');
          navigation.navigate('GuideScreen', {status: 2});
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
              navigation.navigate('ListeningGame1');
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
    top: '45%',
    left: '45%',
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

export default ListeningProgress;

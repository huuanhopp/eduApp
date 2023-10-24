import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButton from '../../core/Button/BackButton';
import ConfirmButton from '../../core/Button/ConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
import { CommonSize, Images, ratioH, ratioW } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import CountdownView from './components/CountdownView';
import TimeOutModalDialog from '../../core/Modal/TimeOutModalDialog';
import StopModalDialog from '../../core/Modal/StopModalDialog';
import { StackActions } from '@react-navigation/native';
const PuzzleBackground = ({
  title,
  question,
  destination,
  leftPosContent = '32%',
  leftPosTitle = '44.6%',
  children,
  onCheckResult,
  isRunning,
  setIsRunning
}) => {
  const navigation = useNavigation();

  const [timeOut, setTimeOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [reset, setReset] = useState(false);
  // const [isRunning, setIsRunning] = useState(true);

  const [modalStopVisible, setModalStopVisible] = useState(false);

  const goBack = () => {
    // navigation.goBack();
    // navigation.pop();
    setModalStopVisible(true)
    // navigation.navigate('Main');
  };

  // const setIsStop = () => {
  //   setIsRunning(false);
  // }

  const handleTimeOutChange = (newTimeOut) => {
    console.log(newTimeOut)
    setModalVisible(true)
    setTimeOut(newTimeOut);
  };

  const onRetry = () => {
    setModalVisible(false);
    setModalStopVisible(false)
    //  setIsRunning(true);
     setTimeOut(false);
    //  setReset(true);
     navigation.dispatch(StackActions.push(destination));
  };

  const onNext = () => {
    setModalVisible(false);
    navigation.dispatch(StackActions.push('Main'));
  };

  const onBack = () => {
    setModalVisible(false);
    setModalStopVisible(false)
    navigation.dispatch(StackActions.push('Main'));
  };

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require('../../../assets/images/PuzzleGame/PuzzleBackground.png')}
        style={styles.imgBG}
        resizeMode="cover"
        >
        <View style={{ flex: 1 }}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={goBack}>
                <Image source={Images.backButton} style={styles.backButton} />
              </TouchableOpacity>
              <View style={{ flex: 1 }} />
              <CountdownView reset={reset} setReset={setReset} timeOut={timeOut} setTimeOut={handleTimeOutChange} isRunning={isRunning} setIsRunning={setIsRunning} />
            </View>
            <View style={styles.topView}>
              <Text
                style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>
                {title}
              </Text>
              <Text style={{ fontSize: 28, textAlign: 'center' }}>
                {question}
              </Text>
            </View>

          </View>
          <View style={styles.contentView}>{children}</View>
          <View style={styles.bottomView}>
            <ConfirmButton
              Modal={ListeningModalDialog}
              destination={destination}
              navigation={navigation}
              style={styles.confirmButton}
              onPress={onCheckResult}
            />
          </View>
          <TimeOutModalDialog
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            onRetry={onRetry}
            onNext={onNext}
          />

          <StopModalDialog
            modalStopVisible={modalStopVisible}
            setModalStopVisible={setModalStopVisible}
            onRetry={onRetry}
          // navigation={navigation} // You need to define navigation or pass it from somewhere
          // destination={destination} // You need to define destination or pass it from somewhere
          />

        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {},
  rootView: {
    flex: 2,
    // width: widthScreen,
    width: CommonSize.srcWidth,
    alignSelf: 'center',
    // backgroundColor: '#B0D4FF',
  },
  quesContent: {},

  imgBG: {
    // width: CommonSize.srcWidthDefault,
    flex: 1,
    // width: "100%",
    // height: "100%",
    width: CommonSize.srcWidth,
    height: CommonSize.srcHeight,
    
  },
  backButton: {
    marginTop: ratioH(40),
    marginLeft: ratioW(40) + 20,
  },
  topView: {
    alignSelf: 'center',
  },
  confirmButton: {
    position: 'relative',
  },
  contentView: {
    flex: 2,
  },
  bottomView: {
    height: ratioH(130),
    alignItems: 'center',
  },
});

export default PuzzleBackground;

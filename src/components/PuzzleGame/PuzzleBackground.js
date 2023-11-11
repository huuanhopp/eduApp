import React, {useState} from 'react';
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
import {CommonSize, Images, ratioH, ratioW} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import CountdownView from './components/CountdownView';
import TimeOutModalDialog from '../../core/Modal/TimeOutModalDialog';
import StopModalDialog from '../../core/Modal/StopModalDialog';
import {StackActions} from '@react-navigation/native';
const PuzzleBackground = ({
  title,
  question,
  destination,
  leftPosContent = '32%',
  leftPosTitle = '44.6%',
  children,
  onCheckResult,
  isRunning,
  setIsRunning,
  retryTimeout,
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
    setModalStopVisible(true);
    // navigation.navigate('Main');
  };

  // const setIsStop = () => {
  //   setIsRunning(false);
  // }

  const handleTimeOutChange = newTimeOut => {
    console.log(newTimeOut);
    setModalVisible(true);
    setTimeOut(newTimeOut);
  };

  const onRetry = () => {
    setModalVisible(false);
    setModalStopVisible(false);
    //  setIsRunning(true);
    setTimeOut(false);
    //  setReset(true);
    navigation.dispatch(StackActions.push(retryTimeout));
  };

  const onNext = () => {
    setModalVisible(false);
    navigation.dispatch(StackActions.push(destination));
  };

  const onBack = () => {
    setModalVisible(false);
    setModalStopVisible(false);
    navigation.dispatch(StackActions.push('Main'));
  };

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require('../../../assets/images/PuzzleGame/PuzzleBackground1.png')}
        style={styles.imgBG}
        resizeMode="cover">
        <View style={{flex: 1}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={goBack}>
                <Image source={Images.backButton} style={styles.backButton} />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  paddingRight: ratioH(24),
                }}>
                <CountdownView
                  reset={reset}
                  setReset={setReset}
                  timeOut={timeOut}
                  setTimeOut={handleTimeOutChange}
                  isRunning={isRunning}
                  setIsRunning={setIsRunning}
                />
              </View>
              <Image
                source={require('../../../assets/images/common/topImage.png')}
                style={{
                  width: ratioH(125),
                  height: ratioH(49),
                  marginTop: ratioH(45),
                  marginRight: ratioH(45),
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.topView}>
              <Text
                style={{
                  fontSize: 50,
                  textAlign: 'center',
                  color: '#002443',
                  fontFamily: '1HoonGothicgulim Regular',
                }}>
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  textAlign: 'center',
                  fontFamily: 'SUIT-Regular',
                  color: '#002443',
                }}>
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
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
        </View>
        <Image
          source={require('../../../assets/images/common/beeBottomImage.png')}
          style={styles.beeImage}
          resizeMode="cover"
        />
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
  beeImage: {
    width: ratioH(191),
    height: ratioH(111),
    bottom: ratioH(40),
    marginLeft: ratioH(45),
    position: 'absolute',
  },
});

export default PuzzleBackground;

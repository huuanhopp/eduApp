import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackButton from '../../core/Button/BackButton';
import SpeakingConfirmButton from '../../core/Button/SpeakingConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
import GoBackModalDialog from '../../core/Modal/GoBackModalDialog';
import {CommonSize, Images, ratioH, ratioW} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import StopModalDialog from '../../core/Modal/StopModalDialog';
import {screenSize, widthScreen} from '../../constants/constants';
const SpeakingBackground = ({
  title,
  question,
  destination,
  leftPosContent = 'auto',
  leftPosTitle = '44.6%',
  children,
  onClickSpeakingButton,
  speakingButtonShown = true,
  indexSelected,
  handleFinishRecording,
}) => {
  const navigation = useNavigation();
  const [width, setWidth] = useState(CommonSize.srcWidthDefault);
  const [gobackModalShown, setgobackModalShown] = useState(false);
  const [modalStopVisible, setModalStopVisible] = useState(false);

  const goBack = () => {
    // navigation.goBack();
    // navigation.pop();
    setModalStopVisible(true);
    // navigation.navigate('Main');;
  };

  return (
    <View
      style={{
        // backgroundColor: 'rgb(224,238,255)',
        flex: 1,
        // width: CommonSize.srcWidth,
        // alignItems: 'center',
      }}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../../assets/images/common/speakingBG.png')}
        style={{
          width: screenSize.width,
          // ...styles.imgBG,
          // width: width,
        }}
        onLayout={e => {
          // setWidth((e.nativeEvent.layout.height * 1194) / 834);
        }}>
        <View style={{height: '100%'}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: CommonSize.srcWidthDefault * 0.028,
              }}>
              <TouchableOpacity onPress={goBack}>
                <Image
                  source={Images.backButton}
                  style={{
                    ...styles.backButton,
                  }}
                />
              </TouchableOpacity>
              <View style={{flex: 1}} />
              <Image
                source={require('../../../assets/images/common/topImage.png')}
                style={{
                  width: ratioH(125),
                  height: ratioH(49),
                  marginRight: CommonSize.srcWidthDefault * 0.04,
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.topView}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle}>{question}</Text>
            </View>
          </View>
          <View style={styles.contentView}>{children}</View>
          <View style={styles.bottomView}>
            {speakingButtonShown && (
              <SpeakingConfirmButton
                Modal={ListeningModalDialog}
                destination={destination}
                navigation={navigation}
                onPress={onClickSpeakingButton}
                indexSelected={indexSelected}
                handleFinishRecording={handleFinishRecording}
              />
            )}
          </View>
          <Image
            source={require('../../../assets/images/common/beeBottomImage.png')}
            style={styles.beeImage}
            resizeMode="cover"
          />
          <StopModalDialog
            modalStopVisible={modalStopVisible}
            setModalStopVisible={setModalStopVisible}
            isRunning={false}
            setIsRunning={setModalStopVisible}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: ratioH(44),
    color: '#002443',
    alignSelf: 'center',
    fontFamily: 'korean-final',
  },
  subTitle: {
    fontSize: ratioH(28),
    color: '#002443',
    fontWeight: 'normal',
    alignSelf: 'center',
    fontFamily: 'SUIT-Regular',
  },
  textTitle: {
    top: '18%',
    zIndex: 3,
    textAlign: 'center',
  },
  quesContent: {
    textAlign: 'center',
    top: '28%',
    zIndex: 3,
  },
  imgBG: {
    width: CommonSize.srcWidthDefault,
    flex: 1,
  },
  backButton: {
    marginLeft: CommonSize.srcWidthDefault * 0.038,
    height: ratioH(56),
    aspectRatio: 1,
  },
  topView: {
    alignSelf: 'center',
    marginTop: ratioH(45),
  },
  confirmButton: {
    position: 'relative',
  },
  contentView: {
    flex: 1,
  },
  bottomView: {
    alignItems: 'center',
    marginBottom: ratioH(65),
  },
  beeImage: {
    width: ratioH(191),
    height: ratioH(111),
    bottom: ratioH(40),
    marginLeft: ratioH(45),
    position: 'absolute',
  },
});

export default SpeakingBackground;

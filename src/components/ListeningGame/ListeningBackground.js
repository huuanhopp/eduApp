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
import ConfirmButton from '../../core/Button/ConfirmButton';
import ListeningModalDialog from '../../core/Modal/ListeningModalDialog';
import {CommonSize, Images, ratioH, ratioW} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import StopModalDialog from '../../core/Modal/StopModalDialog';
import {screenSize} from '../../constants/constants';
const ListeningBackground = ({
  title,
  question,
  destination,
  leftPosContent = '32%',
  leftPosTitle = '44.6%',
  children,
  onCheckResult,
}) => {
  const navigation = useNavigation();

  const [modalStopVisible, setModalStopVisible] = useState(false);

  const goBack = () => {
    // navigation.goBack();
    // navigation.pop();
    setModalStopVisible(true);
    // navigation.navigate('Main');
  };

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require('../../../assets/images/common/listeningBG.png')}
        resizeMode="stretch"
        // source={require('../../../assets/images/ListeningGame/ListeningBackground1.png')}
        style={styles.imgBG}>
        <View style={{flex: 1}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: ratioH(40),
              }}>
              <TouchableOpacity onPress={goBack}>
                <Image source={Images.backButton} style={styles.backButton} />
              </TouchableOpacity>
              <View style={{flex: 1}} />
              <Image
                source={require('../../../assets/images/common/topImage.png')}
                style={{
                  width: ratioH(125),
                  height: ratioH(49),
                  marginRight: ratioW(40),
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
          <StopModalDialog
            modalStopVisible={modalStopVisible}
            setModalStopVisible={setModalStopVisible}
            isRunning={false}
            setIsRunning={setModalStopVisible}
          />
          <Image
            source={require('../../../assets/images/common/beeBottomImage.png')}
            style={styles.beeImage}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {},
  rootView: {
    flex: 1,
    // width: widthScreen,
    // width: CommonSize.srcWidth,
    // alignSelf: 'center',
    // backgroundColor: '#B0D4FF',
  },
  quesContent: {},
  imgBG: {
    // width: CommonSize.srcWidthDefault,
    // flex: 1,
    // width: '100%',
    width: Dimensions.get('screen').width,
    height: '100%',
  },
  backButton: {
    marginLeft: ratioW(40),
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

export default ListeningBackground;

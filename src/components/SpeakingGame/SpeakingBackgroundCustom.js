import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {CommonSize, ratioH, ratioW} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import StopModalDialog from '../../core/Modal/StopModalDialog';

const SpeakingBackgroundCustom = ({title, subTitle, ...props}) => {
  // nav
  // ref
  // state
  // use Effect
  // function
  // part Component
  // main container
  const [modalStopVisible, setModalStopVisible] = useState(false);
  const navigation = useNavigation();
  const goBack = () => {
    // navigation.goBack();
    // navigation.pop();
    setModalStopVisible(true);
    // navigation.navigate('Main');;
  };

  return (
    <View
      style={{
        backgroundColor: 'rgb(224,238,255)',
        flex: 1,
        width: CommonSize.srcWidth,
        alignItems: 'center',
      }}>
      <View>
        <Image
          style={{height: CommonSize.srcHeight, aspectRatio: 1194 / 834}}
          resizeMode={'contain'}
          source={require('../../../assets/images/SpeakingGame/SpeakingBackground.png')}
        />

        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}>
          <Text style={styles.title}>{title || ''}</Text>
          <Text style={styles.subTitle}>{subTitle || ''}</Text>
          {props?.children}
        </View>

        <TouchableOpacity
          style={{
            zIndex: 1000,
            position: 'absolute',
            top: ratioH(40),
            left: ratioH(40),
          }}
          onPress={goBack}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/core/BackButton.png')}
            style={{
              height: ratioW(56),
              width: ratioW(56),
            }}
          />
          <StopModalDialog
            modalStopVisible={modalStopVisible}
            setModalStopVisible={setModalStopVisible}
            isRunning={false}
            setIsRunning={setModalStopVisible}
          />
        </TouchableOpacity>
      </View>
    </View>
    // <ImageBackground
    //   source={require('../../../assets/images/SpeakingGame/SpeakingBackground.png')}
    //   resizeMode={'contain'}
    //   style={styles.container}>
    //   <TouchableOpacity>
    //     <Image
    //       resizeMode="cover"
    //       source={require('../../../assets/images/core/BackButton.png')}
    //       style={{height: ratioW(56), width: ratioW(56)}}
    //     />
    //   </TouchableOpacity>
    //   {props?.children}
    // </ImageBackground>
  );
};

export default SpeakingBackgroundCustom;

const styles = StyleSheet.create({
  container: {
    height: CommonSize.srcHeight,
    width: CommonSize.srcWidth,
    backgroundColor: 'rgb(224,238,255)',
  },
  title: {
    fontSize: ratioH(44),
    color: '#002443',
    fontWeight: 'bold',
    marginTop: ratioH(156),
  },
  subTitle: {
    fontSize: ratioH(28),
    color: '#002443',
    fontWeight: 'normal',
    marginTop: ratioH(8),
    fontFamily: 'SUIT-Regular',
  },
});

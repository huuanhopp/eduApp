import React from 'react';
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
const PuzzleBackground = ({
  title,
  question,
  destination,
  leftPosContent = '32%',
  leftPosTitle = '44.6%',
  children,
  onCheckResult,
}) => {
  const navigation = useNavigation();

  const goBack = () => {
    // navigation.goBack();
    // navigation.pop();
    navigation.navigate('Main');
  };

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require('../../../assets/images/PuzzleGame/PuzzleBackground.png')}
        style={styles.imgBG}>
        <View style={{flex: 1}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={goBack}>
                <Image source={Images.backButton} style={styles.backButton} />
              </TouchableOpacity>
              <View style={{flex: 1}} />
              <CountdownView />
            </View>
            <View style={styles.topView}>
              <Text
                style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
                {title}
              </Text>
              <Text style={{fontSize: 28, textAlign: 'center'}}>
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
    backgroundColor: '#B0D4FF',
  },
  quesContent: {},

  imgBG: {
    // width: CommonSize.srcWidthDefault,
    flex: 1,
    width: '100%',
    height: '100%',
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

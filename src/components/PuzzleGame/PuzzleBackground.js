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
const PuzzleBackground = ({title, question, destination, children}) => {
  const navigation = useNavigation();
  const [width, setWidth] = useState(CommonSize.srcWidthDefault);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/PuzzleGame/PuzzleBackground.png')}
      style={{
        ...styles.imgBG,
        width: width,
      }}
      onLayout={e => {
        setWidth((e.nativeEvent.layout.height * 1194) / 834);
      }}>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity onPress={goBack}>
            <Image source={Images.backButton} style={styles.backButton} />
          </TouchableOpacity>
          <View style={styles.topView}>
            <Text
              style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
              {title}
            </Text>
            <Text style={{fontSize: 28, textAlign: 'center'}}>{question}</Text>
          </View>
        </View>
        <View style={styles.contentView}>{children}</View>
        <View style={styles.bottomView}>
          <ConfirmButton
            Modal={ListeningModalDialog}
            destination={destination}
            navigation={navigation}
            style={styles.confirmButton}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textTitle: {},
  quesContent: {},
  imgBG: {
    width: CommonSize.srcWidthDefault,
    flex: 1,
  },
  backButton: {
    marginTop: ratioH(40),
    marginLeft: CommonSize.srcWidthDefault * 0.033,
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
    height: ratioH(130),
  },
  confirmButton: {
    position: 'relative',
    height: ratioH(64),
    resizeMode: 'contain',
  },
});

export default PuzzleBackground;

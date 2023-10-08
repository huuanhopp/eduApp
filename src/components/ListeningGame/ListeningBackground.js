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
const ListeningBackground = ({
  navigation,
  title,
  question,
  destination,
  leftPosContent = '32%',
  leftPosTitle = '44.6%',
  children,
}) => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/ListeningGame/ListeningBackground.png')}
      style={styles.imgBG}>
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity>
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
    marginLeft: ratioW(40) + 20,
  },
  topView: {
    alignSelf: 'center',
  },
  confirmButton: {
    position: 'relative',
  },
  contentView: {
    flex: 1,
  },
  bottomView: {
    height: ratioH(130),
    alignItems: 'center',
  },
});

export default ListeningBackground;

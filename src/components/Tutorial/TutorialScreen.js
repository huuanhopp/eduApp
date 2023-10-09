import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {screenSize} from '../../constants/constants';
import TutorialItem from './TutorialItem';
import {CommonSize} from '../../utils/utils';

const widthScreen = Dimensions.get('screen').height * 1.431;

const TutorialScreen = ({navigation}) => {
  const tutorialImgs = [
    require('../../../assets/images/TutorialScreen/tutorial1Img.png'),
    require('../../../assets/images/TutorialScreen/tutorial2Img.png'),
    require('../../../assets/images/TutorialScreen/tutorial3Img.png'),
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [width, setWidth] = useState(CommonSize.srcWidthDefault);

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require('../../../assets/images/TutorialScreen/tutorialBGImg1.png')}
        style={{...styles.bgImg, width: width, overflow: 'hidden'}}
        resizeMode="contain"
        onLayout={e => {
          setWidth((e.nativeEvent.layout.height * 1194) / 834);
        }}>
        <View style={styles.topView}>
          {/* <Text style={styles.topText}>
            청능 훈련을 통해 일상생활속의 대화를 연결시켜드려요!
          </Text>
          <Text>매일 새로운 듣기, 말하기, 집중력 훈련 제공</Text> */}
        </View>
        <View style={styles.contentView}>
          <Carousel
            data={tutorialImgs}
            renderItem={({item}) => <TutorialItem item={item} />}
            sliderWidth={widthScreen}
            itemWidth={widthScreen * 0.4}
            initialNumToRender={1}
            onSnapToItem={index => setCurrentIndex(index)}
          />
          <Pagination
            dotsLength={3}
            activeDotIndex={currentIndex}
            dotStyle={styles.dotView}
            inactiveDotStyle={styles.inactiveDotView}
            inactiveDotScale={1}
            inactiveDotOpacity={1}
          />
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => Alert.alert('Show new screen')}>
            <Image
              source={require('../../../assets/images/TutorialScreen/startButton.png')}
              style={styles.startImgButton}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TutorialScreen;

const styles = StyleSheet.create({
  bgImg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  rootView: {
    flex: 1,
    alignSelf: 'center',
  },
  startButton: {},
  startImgButton: {
    width: widthScreen * 0.25,
    height: widthScreen * 0.25 * 0.21,
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    alignItems: 'center',
  },
  bottomView: {
    flex: 0.8,
  },
  contentView: {
    height: widthScreen * 0.4 * 0.72 + 70,
    marginTop: 25,
  },
  topText: {
    fontSize: 36,
    color: '#002443',
    fontWeight: '700',
  },
  bottomText: {
    fontSize: 24,
    color: '#2D4967',
    fontWeight: '500',
  },
  dotView: {
    width: 32,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#0069D666',
    elevation: 5,
  },
  inactiveDotView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#0069D666',
    elevation: 5,
  },
});

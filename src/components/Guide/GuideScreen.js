import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import GuideImage from './components/GuideImage';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ratioH} from '../../utils/utils';
import {CommonSize, Images, ratioW} from '../../utils/utils';

const widthScreen = Dimensions.get('screen').height * 1.431;

const GuideScreen = ({navigation, route}) => {
  const [description, setDescription] = useState([]);

  const speakingDescriptions = [
    '왼쪽 박스를 눌러 단어 발음을 들은 후, 마이크를 눌러 발음 연습을 하는 훈련이야. 녹음을 하고 나서 소리를 번갈아가며듣고 발음을 고치는 훈련을 도전해보자!',
    '문제의 빈 칸을 주어진 다섯가지 단어를 이용해 채운 후 문장을 만들어보자! 다 만든 후 마이크를 눌러 문장을 또박또박 읽어보자!',
    '주어진 단어 중 한 개를 골라 문장의 빈칸을 채워서 문장을 완성시키고 마이크를 눌러 또박또박 읽어보자!',
    '주어진 단어와 비슷한 발음을 가지고 있는 단어를 찾아보자! 비슷한 자음, 또는 모음을 가지고 있는 정답을 골라서 마이크를 누른 후 또박또박 읽어보자!',
  ];
  const listeningDescriptions = [
    '스피커를 눌러 나오는 소리를 듣고, 들리는 순서에 맞춰 단어를 차례대로 선택해보자!',
    '스피커를 눌러 나오는 소리를 듣고, 주어진 문장들 속에서 소리와 일치하는 문장을 찾아 선택해보자!',
    '스피커를 눌렀을 때 나오는 소음 속에서 단어를 찾아보자! 찾은 단어를 보기에서 골라 선택하면 돼!',
    // '재생되는 영상을 보며 스피커를 눌러 소리를 동시에 들은 후, 영상의 상황과 소음의 상황이 일치하는지 아닌지 찾아보자! ',
    '스피커를 눌러 주어지는 짧은 이야기를 집중해서 듣고 주어진 문제를 풀어보자!',
  ];
  const puzzleDescriptions = [
    '주어진 시간 안에 카드를 뒤집어 같은 그림을 찾아보자! 제한 시간은 30초니까 서두르는게 좋을거야!',
    '주어진 시간 안에 틀린 그림 5가지를 찾아보자! 제한 시간은 30초니까 서두르는게 좋을거야!',
    '주어진 시간 안에 퍼즐을 맞춰보자! 제한 시간은 30초니까 서두르는게 좋을거야!',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const {status} = route.params;

  const onStartTraining = () => {
    switch (status) {
      case 1:
        navigation.navigate('SpeakingGame1');
        break;
      case 2:
        navigation.navigate('ListeningGame1');
        break;
      case 3:
        navigation.navigate('PuzzleGame1', {status: 3});
        break;
      default:
      // Handle any other cases if needed
    }
  };

  const onClose = () => {};

  const getTitle = () => {
    switch (status) {
      case 1:
        return require('../../../assets/images/GuideScreen/speak-title.png');
      case 2:
        return require('../../../assets/images/GuideScreen/listen-title.png');
      case 3:
        return require('../../../assets/images/GuideScreen/puzzle-title.png');
      default:
    }
  };

  useEffect(() => {
    switch (status) {
      case 1:
        // setGuideImages(speakingGuideImages);
        setDescription(speakingDescriptions);
        break;
      case 2:
        // setGuideImages(listeningGuideImages);
        setDescription(listeningDescriptions);
        break;
      case 3:
        // setGuideImages(puzzleGuideImages);
        setDescription(puzzleDescriptions);
        break;
      default:
    }
  }, [status]);

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require('../../../assets/images/GuideScreen/guideBGImg.png')}
        style={styles.bgImage}>
        <View style={styles.topView}>
          <View style={styles.titleView}>
            <View style={{flex: 1}} />
            <Image
              source={getTitle()}
              style={styles.titleImg}
              resizeMode="contain"
            />
            <View style={styles.closeButtonView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.pop();
                }}>
                <Image
                  source={require('../../../assets/images/GuideScreen/closeButton.png')}
                  style={styles.closeImg}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.contentView}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: ratioH(40),
            }}>
            <View style={{alignItems: 'center'}}>
              <GuideImage
                status={status}
                onChangeIndex={index => setCurrentIndex(index)}
              />
              <View style={styles.pagingView}>
                <Pagination
                  dotsLength={description.length}
                  activeDotIndex={currentIndex}
                  dotStyle={styles.dotView}
                  inactiveDotStyle={styles.inactiveDotView}
                  inactiveDotScale={1}
                  inactiveDotOpacity={1}
                />
              </View>
            </View>
            <View style={styles.guideInfoView}>
              <Image
                source={require('../../../assets/images/GuideScreen/guideInfoImg.png')}
                resizeMode="contain"
                style={styles.guideInfoImg}
              />
              <View style={styles.desView}>
                <Text style={styles.desText}>{description[currentIndex]}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={onStartTraining}>
            <Image
              source={require('../../../assets/images/GuideScreen/startTrainingButton.png')}
              style={styles.startTrainingImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GuideScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    // width: widthScreen,
    width: CommonSize.srcWidth,
    alignSelf: 'center',
    // backgroundColor: '#B0D4FF',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  topView: {
    alignItems: 'center',
    paddingHorizontal: 40,
    height: ratioH(114),
  },
  bottomView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView: {
    height: Dimensions.get('screen').height * 0.65,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#002443',
  },
  titleImg: {
    width: widthScreen * 0.28,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  closeImg: {
    height: widthScreen * 0.0418,
    width: widthScreen * 0.0418,
  },
  closeButtonView: {flex: 1, alignItems: 'flex-end'},
  dotView: {
    width: ratioH(32),
    height: ratioH(10),
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#0069D666',
    elevation: 5,
  },
  inactiveDotView: {
    width: ratioH(10),
    height: ratioH(10),
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#0069D666',
    elevation: 5,
  },
  pagingView: {
    width: ratioH(299),
    marginTop: -ratioH(15),
  },
  startTrainingImg: {
    width: widthScreen * 0.293,
  },
  guideInfoImg: {
    width: ratioH(395),
    height: ratioH(200),
  },
  guideInfoView: {
    flex: 1,
    marginLeft: ratioH(60),
    justifyContent: 'center',
  },
  desView: {
    backgroundColor: 'white',
    height: ratioH(68),
    width: '100%',
    borderRadius: ratioH(12),
    marginTop: ratioH(24),
    paddingHorizontal: ratioH(16),
    justifyContent: 'center',
  },
  desText: {
    color: '#3D5268',
    fontSize: ratioH(16),
  },
});

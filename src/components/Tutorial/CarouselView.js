import * as React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {CommonSize, ratioH, ratioW} from '../../utils/utils';

const CarouselView = ({width, onSnapToItem}) => {
  const tutorialImgs = [
    require('../../../assets/images/TutorialScreen/tutorial1Img.png'),
    require('../../../assets/images/TutorialScreen/tutorial2Img.png'),
    require('../../../assets/images/TutorialScreen/tutorial3Img.png'),
  ];

  return (
    <View style={{flex: 1}}>
      <View>
        <Carousel
          loop
          width={width}
          height={width * 0.36}
          data={tutorialImgs}
          onSnapToItem={onSnapToItem}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Image
                source={item}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
          )}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: width * 0.7,
          }}
        />
      </View>
    </View>
  );
};

export default CarouselView;

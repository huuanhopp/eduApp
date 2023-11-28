import React, {useState, useEffect} from 'react';
import {View, Image, Animated, StyleSheet} from 'react-native';
import {ratioH} from '../../../utils/utils';

const GuideImage = ({status, onChangeIndex}) => {
  let guideImages = [];

  if (status == 1) {
    guideImages = [
      require('../../../../assets/images/GuideScreen/guide1.png'),
      require('../../../../assets/images/GuideScreen/guide2.png'),
      require('../../../../assets/images/GuideScreen/guide3.png'),
      require('../../../../assets/images/GuideScreen/guide4.png'),
    ];
  }

  if (status == 2) {
    guideImages = [
      require('../../../../assets/images/GuideScreen/guide5.png'),
      require('../../../../assets/images/GuideScreen/guide6.png'),
      require('../../../../assets/images/GuideScreen/guide7.png'),
      require('../../../../assets/images/GuideScreen/guide8.png'),
      require('../../../../assets/images/GuideScreen/guide9.png'),
    ];
  }

  if (status == 3) {
    guideImages = [
      require('../../../../assets/images/GuideScreen/guide10.png'),
      require('../../../../assets/images/GuideScreen/guide11.png'),
      require('../../../../assets/images/GuideScreen/guide12.png'),
    ];
  }

  if (status == 4) {
    guideImages = [
      require('../../../../assets/images/GuideScreen/guide1.png'),
      require('../../../../assets/images/GuideScreen/guide2.png'),
      require('../../../../assets/images/GuideScreen/guide3.png'),
      require('../../../../assets/images/GuideScreen/guide4.png'),
      require('../../../../assets/images/GuideScreen/guide5.png'),
      require('../../../../assets/images/GuideScreen/guide6.png'),
      require('../../../../assets/images/GuideScreen/guide7.png'),
      require('../../../../assets/images/GuideScreen/guide8.png'),
      require('../../../../assets/images/GuideScreen/guide9.png'),
      require('../../../../assets/images/GuideScreen/guide10.png'),
      require('../../../../assets/images/GuideScreen/guide11.png'),
      require('../../../../assets/images/GuideScreen/guide12.png'),
    ];
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    // Lên lịch thay đổi ảnh mỗi 2 giây
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // Thời gian để ảnh fade out (milliseconds)
        useNativeDriver: false, // Sử dụng driver native
      }).start(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % guideImages.length); // Chuyển đến ảnh tiếp theo
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500, // Thời gian để ảnh fade in (milliseconds)
          useNativeDriver: false, // Sử dụng driver native
        }).start();
      });
    }, 2000); // Mỗi 2 giây
    onChangeIndex(currentImageIndex);

    return () => clearInterval(interval); // Hủy lên lịch khi component unmount
  }, [currentImageIndex]);

  return (
    <Animated.Image
      source={guideImages[currentImageIndex]}
      style={[styles.img, {opacity: fadeAnim}]}
      resizeMode="contain"
    />
  );
};

export default GuideImage;

const styles = StyleSheet.create({
  rootView: {},
  img: {
    height: ratioH(416),
    width: ratioH(596),
  },
});

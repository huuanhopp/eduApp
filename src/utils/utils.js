import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Slides = [
  {
    id: 1,
    img: require('../../assets/images/Slider1.png'),
    title: 'Slider1',
    description: 'Its slider 1',
    price: '$399',
  },
  {
    id: 2,
    img: require('../../assets/images/Slider2.png'),
    title: 'AirPods Pro',
    description: 'Active noise cancellation for immersive sound',
    price: '$249',
  },
  {
    id: 3,
    img: require('../../assets/images/Slider3.png'),
    title: 'AirPods Max',
    description: 'Effortless AirPods experience',
    price: '$549',
  },
];

export const ratioW = _width => {
  return (_width * width) / 1194;
};

export const ratioH = _height => {
  return (_height * height) / 834;
};

export const CommonSize = {
  srcWidth: width,
  srcHeight: height,
  srcWidthDefault: (height * 1194) / 834,
  srcHeightDefault: height,
};

export const Images = {
  backButton: require('../../assets/images/core/BackButton.png'),
};

export const whisper_token =
  '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';

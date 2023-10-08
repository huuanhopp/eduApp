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


export function compareSentences(sentence1, sentence2) {
  // Remove special characters and convert to lowercase
  const cleanSentence1 = sentence1.replace(/[^\w\s]/g, '').toLowerCase();
  const cleanSentence2 = sentence2.replace(/[^\w\s]/g, '').toLowerCase();

  // Split the sentences into words
  const words1 = cleanSentence1.split(' ');
  const words2 = cleanSentence2.split(' ');

  // Find the minimum length of the two sentences
  const maxLength = Math.max(words1.length, words2.length);

  // Count consecutive matching words
  let consecutiveMatches = 0;
  for (let i = 0; i < maxLength; i++) {
    if (words1[i] === words2[i]) {
      consecutiveMatches++;
    } else {
      // Break if consecutive words don't match
      break;
    }
  }

  // Calculate the percentage of consecutive matching words
  const percentage = (consecutiveMatches / maxLength) * 100;

  return percentage;
}

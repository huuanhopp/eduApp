import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
console.log("width", width)
console.log("height", height)

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
  // return (_width * width) / 1;
};

export const ratioH = _height => {
  return (_height * height) / 834;
};

export const CommonSize = {
  srcWidth: width,
  srcHeight: height,
  srcWidthDefault: (height * 1194) / 834,
  // srcWidthDefault: width,
  srcHeightDefault: height,
};

export const Images = {
  backButton: require('../../assets/images/core/BackButton.png'),
};

export const whisper_token =
  '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';


export function compareSentences(se1, se2) {
  // // Remove special characters and convert to lowercase
  // const cleanSentence1 = sentence1.replace(/[^\w\s]/g, '').toLowerCase();
  // const cleanSentence2 = sentence2.replace(/[^\w\s]/g, '').toLowerCase();
  // console.log("sentence1 sentence2", sentence1, sentence2)
  // // Split the sentences into words
  // const words1 = cleanSentence1.split(' ');
  // const words2 = cleanSentence2.split(' ');

  // // Find the minimum length of the two sentences
  // const maxLength = Math.max(words1.length, words2.length);

  // // Count consecutive matching words
  // let consecutiveMatches = 0;
  // for (let i = 0; i < maxLength; i++) {
  //   if (words1[i] === words2[i]) {
  //     consecutiveMatches++;
  //   } else {
  //     // Break if consecutive words don't match
  //     break;
  //   }
  // }

  // // Calculate the percentage of consecutive matching words
  // const percentage = (consecutiveMatches / maxLength) * 100;

  // return percentage;
  const s1 = se1.replace(/\s+/g, '')
  const s2 = se2.replace(/\s+/g, '')
  console.log("sentence1 sentence2", s1, s2)
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[m][n];
}

function levenshteinDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[m][n];
}

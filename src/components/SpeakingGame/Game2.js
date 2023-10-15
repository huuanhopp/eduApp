import React, {useState, useRef, useEffect, useMemo} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import SpeakingBackground from './SpeakingBackground';
import RecordButton from '../../core/Button/RecordButton';
import AnswerButton from '../../core/Button/AnswerButton';
import {StackActions, useNavigation} from '@react-navigation/native';
import {compareSentences, ratioH} from '../../utils/utils';

const widthScreen = Dimensions.get('screen').height * 1.431;

const Game2 = () => {
  const navigation = useNavigation();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAllCorrect, setIsAllCorrect] = useState(false);

  // Example usage:

  // useEffect(() => {
  //   const sentence1 = '철수는 오늘도 숙제 를(을) 해야한다';
  //   const sentence2 = '철수는 오늘도 숙제 를(을) 해야';
  //   const similarityPercentage = compareSentences(sentence1, sentence2);
  //   console.log(`Similarity Percentage: ${similarityPercentage}`);
  // }, []);
  /// cheolsuneun naleul silh-eohanda
  const initialValues = ['__','__','__','__','__',]
  const [orderAnsArr, setOrderAnsArr] = useState(initialValues)
  // 4-2-3-5-1
  const RESULT = '나는 토스트 색깔에 친구 와 토스트 를 싼 후 내일 을 간다'
 
  const TEXT_STRING = () => {
   return (
    <Text style={styles.textString}>
      <Text>나는 </Text>
      <Text style={{ color: '#C65300', fontWeight:'bold' }}>{orderAnsArr[0]}</Text>
      <Text> </Text>
      <Text style={{ color: '#C65300', fontWeight:'bold' }}>{orderAnsArr[1]}</Text>
      <Text>에 </Text>
      <Text style={{ color: '#C65300', fontWeight:'bold' }}>{orderAnsArr[2]}</Text>
      <Text> 와 </Text>
      <Text style={{ color: '#C65300', fontWeight:'bold' }}>{orderAnsArr[3]}</Text>
      <Text> 를 싼 후 </Text>
      <Text style={{ color: '#C65300', fontWeight:'bold'}}>{orderAnsArr[4]}</Text>
      <Text> 을 간다</Text>
    </Text>
   ) 
  }

  const arraysAreEqual = (arr1, arr2) => {
    console.log("arr1 arr2 ", arr1, arr2)
    if (arr1.length !== arr2.length) return false;
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
  
    return true;
  }

  const [stackChoiceOrder, setStackChoiceOrder] = useState(0);

  const [anwsOptions, setAnwsOptions] = useState([
    {
      id: 1,
      content: '피크닉',
      // content: 'ANS1',
      top: 530,
      left: widthScreen * 0.26,
      isCorrect: true,
      order: 0
    },
    {
      id: 2,
      content: '점심',
      top: 530,
      left: widthScreen * 0.48,
      isCorrect: false,
      order: 0
    },
    {
      id: 3,
      content: '친구',
      top: 530,
      left: widthScreen * 0.7,
      isCorrect: false,
      order: 0
    },
    {
      id: 4,
      content: '내일',
      top: 500,
      left: widthScreen * 0.37,
      isCorrect: false,
      order: 0
    },
    {
      id: 5,
      content: '토스트',
      top: 500,
      left: widthScreen * 0.59,
      isCorrect: false,
      order: 0
    },
  ]);
  const RESULT_ARR = ['내일', '점심', '친구', '토스트', '__']
  
  useEffect(()=> {
    console.log('ansOptions', anwsOptions);
    const orderArr = [];
    const newOrderAns = [...orderAnsArr];
      anwsOptions.forEach(ans => {
        console.log("ans: ", ans?.order )
        if (ans?.order > 0) {
          orderArr.push(ans?.order);
          newOrderAns[ans?.order - 1] = ans?.content;
        }
      })

    const missingNumbers = Array.from({length: 5}, (_, i) => i + 1).filter(num =>!orderArr.includes(num));
    if (missingNumbers.length > 0) {
      console.log('missingNumbre is', missingNumbers);
      missingNumbers.forEach((order) => {
        newOrderAns[order - 1] = '__';
      })
    }
    else {

      const ans = `나는 ${orderAnsArr[0]} ${orderAnsArr[1]}에 ${orderAnsArr[2]} 와 ${orderAnsArr[3]} 를 싼 후 ${orderAnsArr[4]} 을 간다`;
      console.log('NAS IS', ans);
      console.log('RESULT IS', RESULT);
      console.log('IS EQUAL', ans===RESULT);
      const areEqual = arraysAreEqual(RESULT_ARR, orderAnsArr);
      console.log("areEqual ", areEqual);
      //4 2 3 5 1
      if (areEqual) {
        console.log('correct all');
        setIsAllCorrect(true);
      }
    }

    setOrderAnsArr(newOrderAns);

  },[anwsOptions])

  const indexSelected = useMemo(() => {
    return anwsOptions?.findIndex(e => e?.selected == true);
  }, [anwsOptions]);
  console.log({indexSelected});

  const onSelectRecordButton = () => {
    navigation.dispatch(StackActions.push('SpeakingGame2Result', {isCorrect}));
  };

  const checkAnswerCondition = () => {
    console.log('vao day');
    let isCondition = false;

    anwsOptions.forEach((answ)=>{
      console.log('answ is', answ);
      if ((answ?.selected === answ?.isCorrect) && answ?.isCorrect) {
        console.log('correct selected ans');
        isCondition =  true;
        }
    })
    // return isCondition;
    return isAllCorrect;
  };

  const checkPercentageCondition = (textRecording) => {
    const SENTENCE_RESULT =  '나는 내일 점심에 친구와 토스트를 싼 후 피크닉에 간다'
    console.log('percentage',  compareSentences(textRecording, SENTENCE_RESULT))
    // return ((compareSentences(test, SENTENCE_RESULT) <= 3))
    return ((compareSentences(textRecording, SENTENCE_RESULT) <= 3))
  }
  let removedOrderArr = useRef([]);

  const handleOrderInButton = (isSelected, index) => {
    if (isSelected) {
      if (removedOrderArr.current.length == 0) return stackChoiceOrder + 1;
      else {
        let order = removedOrderArr.current.sort((a, b) => b - a).pop();
        return order;
      }
    } else {
      removedOrderArr.current.push(anwsOptions[index].order);
      return 0;
    }
  };

  const updateStackChoice = (isSelected, index) => {
    let updatedOrder = handleOrderInButton(isSelected, index);
    let newAnwsOptions = anwsOptions.map((item, idx) => {
      if (idx === index) {
        return {...item, order: updatedOrder};
      }
      return item;
    });

    setAnwsOptions(newAnwsOptions);
    isSelected
      ? setStackChoiceOrder(prevStack => prevStack + 1)
      : setStackChoiceOrder(prevStack => prevStack - 1);
  };


  return (
    <SpeakingBackground
      title="빈칸 채우기"
      question="문장의 빈 칸에 들어갈 알맞은 단어를 찾은 후 문장을 직접 읽어보자!"
      destination="SpeakingGame4"
      navigation={navigation}
      indexSelected={indexSelected}
      handleFinishRecording={(audioUrl, textRecording) => {
        console.log('textRecordiing is', textRecording);
        const isCorrectCondition = checkAnswerCondition() 
        console.log('finish checkCorrcect', isCorrectCondition);
        const isCorrectPercentage = checkPercentageCondition(textRecording);
        console.log('finish checkCorrcectPercentage', isCorrectPercentage);
        navigation.navigate('SpeakingGame2Result', {
          isCorrect: isCorrectCondition && isCorrectPercentage,
          audioUrl: audioUrl,

        });
      }}
      onClickSpeakingButton={onSelectRecordButton}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{height: ratioH(93), justifyContent:'center', alignItems:'center', position:'relative',  marginBottom: ratioH(70), }}>
           
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/SpeakingGame/Game2/yellowFrame.png')}
            style={styles.hintImg}
          >
         
          </Image>
          {/* <Text style={styles.textString}> */}
              {TEXT_STRING()}
            {/* </Text> */}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <AnswerButton
              customWidth={135}
              content={anwsOptions[0].content}
              selectedOrder={anwsOptions[0].order}
              // multipleChoice={false}
              // handleOneChoice={index => handleOneChoice(0)}
              // isUniqueSelected={anwsOptions[0].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={styles.answerButton}
               callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 0)
              }
              isHideOrder={true}
            />
            <AnswerButton
              customWidth={135}
              selectedOrder={anwsOptions[1].order}
              content={anwsOptions[1].content}
              // multipleChoice={false}
              // handleOneChoice={index => handleOneChoice(1)}
              // isUniqueSelected={anwsOptions[1].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={{
                ...styles.answerButton,
                marginHorizontal: 24,
              }}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 1)
              }
              isHideOrder={true}
            />
            <AnswerButton
            selectedOrder={anwsOptions[2].order}
              customWidth={135}
              content={anwsOptions[2].content}
              // multipleChoice={false}
              // handleOneChoice={index => handleOneChoice(2)}
              // isUniqueSelected={anwsOptions[2].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={styles.answerButton}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 2)
              }
              isHideOrder={true}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 24}}>
            <AnswerButton
              customWidth={135}
              selectedOrder={anwsOptions[3].order}
              content={anwsOptions[3].content}
              // multipleChoice={false}
              // handleOneChoice={index => handleOneChoice(3)}
              // isUniqueSelected={anwsOptions[3].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={{
                ...styles.answerButton,
                marginRight: 24,
              }}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 3)
              }
              isHideOrder={true}
            />
            <AnswerButton
              customWidth={135}
              content={anwsOptions[4].content}
              selectedOrder={anwsOptions[4].order}
              // multipleChoice={false}
              // handleOneChoice={index => handleOneChoice(4)}
              // isUniqueSelected={anwsOptions[4].selected}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
              style={styles.answerButton}
              callbackFunc={(isSelected, index) =>
                updateStackChoice(isSelected, 4)
              }
              isHideOrder={true}
            />
          </View>
        </View>
      </View>
      {/* <RecordButton onPress={onSelectRecordButton} /> */}
    </SpeakingBackground>
  );
};

const styles = StyleSheet.create({
  textString: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#E67700',
    // fontFamily: 'SUIT',
    fontSize: 28,
      // font-style: normal;
      // font-weight: 500;
      // line-height: 132.5%; /* 42.4px */
  },
  hintImg: {
    alignSelf: 'center',
    // height: ratioH(93),
    resizeMode: 'contain',

    display: 'relative'
  },
  buttonStyle: {
    height: 56,
    width: 164,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    lineHeight: null,
    includeFontPadding: false,
    fontSize: 28,
  },
  answerButton: {
    position: 'relative',
  },
});

export default Game2;

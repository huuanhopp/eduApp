import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, PanResponder, Alert } from 'react-native';
import PuzzleBackground from './PuzzleBackground';
import Card2 from '../../core/Card/Card2';
import Card2v2 from '../../core/Card/Card2v2';
import { Dimensions } from 'react-native';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';
import { StackActions } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const listPoint = [
  { x: 958, y: 276, active: true, id: 0 },
  { x: 1032, y: 387, active: true, id: 1 },
  { x: 838, y: 470, active: true, id: 2 },
  { x: 727, y: 416, active: true, id: 3 },
  { x: 760, y: 310, active: false, id: 4 },
]
const listPointBg1 = [
  { x: 464, y: 276, active: true, id: 0 },
  { x: 542, y: 387, active: true, id: 1 },
  { x: 356, y: 470, active: true, id: 2 },
  { x: 242, y: 418, active: true, id: 3 },
  { x: 257, y: 310, active: false, id: 4 },
]
const Game2 = ({ navigation }) => {

  const [gestureState, setGestureState] = useState({ x: 0, y: 0, bg: 1 })
  const [listPointState, setListPointState] = useState(listPoint)
  const [isWin, setIsWin] = useState(false)
  const [timesPress, setTimesPress] = useState(0)
  const [listPointDebug, setListPointDebug] = useState([])
  const [isRunning, setIsRunning] = useState(true);
  const [correctModalShown, setCorrectModalShown] = useState(false);

  const onCheckResult = () => {
    // Implement your check result logic here
  };

  const onPressChangeGesture = (gesture, bg) => {
    console.log("gesture", gesture, bg)
    setTimesPress(preTimes => preTimes + 1)
    setGestureState({ ...gesture, bg })
    setListPointDebug(preList => [...preList, gesture])
  }
  useEffect(() => {
    // khi click bg2 
    if (gestureState.bg == 2) {
      const newList = listPointState.map(item => {
        if ((item.x + 30) > gestureState.x
          && (item.x - 30) < gestureState.x
          && (item.y + 30) > gestureState.y
          && (item.y - 30) < gestureState.y) {
          return {
            ...item,
            active: true
          }
        } else {
          return item
        }
      })
      setListPointState([...newList])
    }

    // khi click bg1
    if (gestureState.bg == 1) {
      const newList = listPointState.map((item, index) => {
        if ((listPointBg1[index].x + 30) > gestureState.x
          && (listPointBg1[index].x - 30) < gestureState.x
          && (listPointBg1[index].y + 30) > gestureState.y
          && (listPointBg1[index].y - 30) < gestureState.y) {
          return {
            ...item,
            active: true
          }
        } else {
          return item
        }
      })
      setListPointState([...newList])
    }

  }, [gestureState])
  // check list point da hien het thi alert
  useEffect(() => {
    let check = true
    listPointState.map(item => {
      if (item.active == false) {
        check = false
      }
    })
    setIsWin(check)
    if(check==true){
      setCorrectModalShown(true);
      setIsRunning(false);
    }
  }, [listPointState])
  // useEffect(()=>{
  //   if (isWin == true) {
  //     Alert.alert("You win!")
  //   }
  // }, [isWin])
  const onNext = () => {
    setCorrectModalShown(false);
    navigation.dispatch(StackActions.push('PuzzleGame3'));
  };

  return (
    <PuzzleBackground
      title="틀린 그림 찾기"
      question="주어진 시간 안에 틀린 그림을 찾아 원을 그려보자!"
      navigation={navigation}
      destination="PuzzleGame3"
      retryTimeout="PuzzleGame2"
      onCheckResult={onCheckResult}
      isRunning={isRunning}
      setIsRunning={setIsRunning}
    >
      
      <View style={styles.contentView} >
        <View style={{ flexDirection: 'row' }}>

          <Card2v2
            urlImage={require('../../../assets/images/PuzzleGame/Game2/bg1.png')}
            bg={1}
            listPoint={[]}
            onPressChangeGesture={onPressChangeGesture}
          />

          <Card2v2
            urlImage={require('../../../assets/images/PuzzleGame/Game2/bg2.png')} // Replace with the actual path to your second image
            bg={2}
            listPoint={listPointState}
            onPressChangeGesture={onPressChangeGesture}
          />
        </View>
        {/* <View style={{ position: "absolute", top: 0, left: 500 }}>
          <Text>You press {timesPress} times</Text>
          <View><Text>windowWidth: {windowWidth}</Text></View>
        </View>
        <View style={{ position: "absolute", top: 0, left: 50 }}>
          {listPointDebug.length > 0 && listPointDebug.map((item, index) => {
            return (
              <Text key={index}>{item.x}:{item.y}</Text>
            )
          })}
        </View> */}
        <SpeakingModalDialog
          modalVisible={correctModalShown}
          setModalVisible={setCorrectModalShown}
          onNext={onNext}
        />

      </View>
    </PuzzleBackground>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Game2;

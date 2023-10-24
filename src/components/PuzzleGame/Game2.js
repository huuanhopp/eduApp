import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, PanResponder, Alert } from 'react-native';
import PuzzleBackground from './PuzzleBackground';
import Card2 from '../../core/Card/Card2';
import Card2v2 from '../../core/Card/Card2v2';
const listPoint = [
  { x: 1346, y: 365, active: true, id: 0 },
  { x: 1454, y: 523, active: true, id: 1 },
  { x: 1193, y: 637, active: true, id: 2 },
  { x: 1025, y: 563, active: true, id: 3 },
  { x: 1065, y: 415, active: true, id: 4 },
]
const listPointBg1 = [
  { x: 672, y: 365, active: false, id: 0 },
  { x: 780, y: 523, active: false, id: 1 },
  { x: 521, y: 632, active: false, id: 2 },
  { x: 354, y: 559, active: false, id: 3 },
  { x: 377, y: 408, active: false, id: 4 } ,
]
const Game2 = ({ navigation }) => {

  const [gestureState, setGestureState] = useState({ x: 0, y: 0, bg: 1 })
  const [listPointState, setListPointState] = useState(listPoint)
  const [isWin, setIsWin] = useState(false)
  const [timesPress, setTimesPress] = useState(0)
  const [listPointDebug, setListPointDebug] = useState([])
  const onCheckResult = () => {
    // Implement your check result logic here
  };

  const onPressChangeGesture = (gesture, bg) => {
    console.log("gesture", gesture, bg)
    setTimesPress(preTimes=> preTimes +1)
    setGestureState({ ...gesture, bg })
    setListPointDebug(preList => [...preList, gesture])
  }
  useEffect(() => {
    // khi click bg2 
    if (gestureState.bg == 2) {
      const newList = listPointState.map(item => {
        if ((item.x + 20) > gestureState.x
          && (item.x - 20) < gestureState.x
          && (item.y + 20) > gestureState.y
          && (item.y - 20) < gestureState.y) {
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
        if ((listPointBg1[index].x + 20) > gestureState.x
          && (listPointBg1[index].x - 20) < gestureState.x
          && (listPointBg1[index].y + 20) > gestureState.y
          && (listPointBg1[index].y - 20) < gestureState.y) {
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
  }, [listPointState])
  // useEffect(()=>{
  //   if (isWin == true) {
  //     Alert.alert("You win!")
  //   }
  // }, [isWin])

  return (
    <PuzzleBackground
      title="틀린 그림 찾기"
      question="주어진 시간 안에 틀린 그림을 찾아 원을 그려보자!"
      navigation={navigation}
      destination="PuzzleGame1"
      onCheckResult={onCheckResult}>
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
        <View>
          <Text>You press {timesPress} times</Text>
        </View>
        <View style={{position: "absolute", top: 0, left: 50}}>
          {listPointDebug.length > 0 && listPointDebug.map((item, index)=>{
            return (
              <Text key={index}>{item.x}:{item.y}</Text>
            )
          })}
        </View>
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

import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {ratioH} from '../../../utils/utils';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const CountdownView = ({ timeOut, setTimeOut, isRunning, setIsRunning, reset, setReset }) => {
  const time = 310; //310
  const warningTime = 110;
  const [count, setCount] = useState(time);
  // const [isRunning, setIsRunning] = useState(true);
  const interval = useRef(null);
  // const [timeOut, setTimeOut] = useState(false)
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      // When the screen is focused
      // If needed, start your timer or other logic here.

      return () => {
        // When the screen is unfocused (navigating away)
        clearInterval(interval.current);
        setCount(time-10); // Resetting the count to its initial value (e.g., 60 seconds)
      };
    }, [])
  );

  useEffect(()=> {
    if (reset) {
      clearInterval(interval.current);
      setCount(time); // Resetting the count to its initial value (e.g., 60 seconds)
      setReset(false);
      console.log("Puzzle 3")
    }
  },[reset])

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          setIsRunning(false);
          clearInterval(interval.current); // Dừng đếm ngược khi hết thời gian
          setTimeOut(true)
        }
      }, 100); // Cập nhật mỗi 1 giây
    }
    return () => { 
      // setCount(time);
      if (interval.current) {
        // setCount(time);
        clearInterval(interval.current); // Đảm bảo dừng interval khi component bị unmount
      }
    };
  }, [count, isRunning]);

  const getCountDownText = () => {
    const countText = `${count}`;
    if (count == 0) {
      return `남은 시간 00:00`;
    }
    if (count < 10) {
      return `남은 시간 00:01`;
    }
    if (count < warningTime) {
      if(count >= 100){
        return `남은 시간 00:${countText.substring(0, 2)}`;
      }
      return `남은 시간 00:0${countText.substring(0, 1)}`;
    }
    return `남은 시간 00:${countText.substring(0, 2)}`;
  };

  return (
    <View style={styles.rootView}>
      {/* <Image
        source={
          count <= 10
            ? require('../../../../assets/images/common/clockCountDownYellow.png')
            : require('../../../../assets/images/common/clockCountDown1.png')
        }
        style={styles.clockImg}
      /> */}
      <View
        style={{
          ...styles.clockImg,
          backgroundColor: count <= warningTime ? '#FCC419' : '#9FCEFF',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 11,
        }}>
        <Image
          source={require('../../../../assets/images/common/clockCountDown.png')}
          style={{
            height: ratioH(40),
            width: ratioH(40),
            resizeMethod: 'cover',
          }}
        />
      </View>
      <View
        style={{
          height: ratioH(49),
          width: ratioH(173),
          borderRadius: 8,
          justifyContent: 'center',
          paddingLeft: ratioH(21),
          paddingRight: ratioH(12),
          backgroundColor: count <= warningTime ? '#FFEC99' : '#D1E6FF',
          marginLeft: -ratioH(11),
          zIndex: 997,
        }}>
        <Text style={styles.countDownText}>{getCountDownText()}</Text>
        <ImageBackground
          source={
            count <= warningTime
              ? require('../../../../assets/images/common/progessBGViewYellow.png')
              : require('../../../../assets/images/common/progessBGViewBlue.png')
          }
          style={styles.progressBarView}>
          <View
            style={{
              ...styles.valueView,
              flex: count / time,
              backgroundColor: count <= warningTime ? '#FCC419' : '#9CCAFF',
            }}
          />
          <View style={{flex: 1 - count / time}} />
        </ImageBackground>
      </View>
    </View>
  );
};

export default CountdownView;

const styles = StyleSheet.create({
  rootView: {
    width: ratioH(218),
    height: ratioH(56),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ratioH(44),
    marginRight: ratioH(189),
  },
  clockImg: {
    height: ratioH(56),
    width: ratioH(56),
    aspectRatio: 1,
    zIndex: 999,
  },
  progressBarView: {
    width: ratioH(142),
    height: ratioH(14),
    marginTop: 4,
    flexDirection: 'row',
  },
  countDownText: {
    color: '#005195',
  },
  valueView: {
    backgroundColor: '#9CCAFF',
    borderRadius: 4,
  },
});

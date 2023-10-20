import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ratioH} from '../../../utils/utils';

const CountdownView = () => {
  const time = 300;
  const warningTime = 100;
  const [count, setCount] = useState(time);
  const [isRunning, setIsRunning] = useState(true);
  const interval = useRef(null);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          setIsRunning(false);
          clearInterval(interval.current); // Dừng đếm ngược khi hết thời gian
          Alert.alert('Time out');
        }
      }, 100); // Cập nhật mỗi 1 giây
    }
    return () => {
      if (interval.current) {
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

import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import PuzzleBackground from './PuzzleBackground';
import Card2 from '../../core/Card/Card2';
import SpeakingModalDialog from '../../core/Modal/SpeakingModalDialog';
import {StackActions} from '@react-navigation/native';
import VictoryModalDialog from '../../core/Modal/VictoryModalDialog';
import VictoryPartModalDialog from '../../core/Modal/VictoryPartModalDialog';
import AppManager from '../../utils/AppManager';

const FragImage = ({urlImage, onClick, ok}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        source={urlImage}
        style={{
          opacity: ok ? 1 : 0,
        }}
      />
    </TouchableOpacity>
  );
};

const FragImage2 = ({urlImage, onClick, ok, select}) => {
  let opacity = 0;
  if (ok) {
    opacity = 0;
  } else if (select) {
    opacity = 0;
  } else {
    opacity = 1;
  }

  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        source={urlImage}
        style={{
          opacity, // ok ? 0 : select ? 0.5 : 1,
        }}
      />
    </TouchableOpacity>
  );
};

const Game3 = ({navigation}) => {
  const [selectLeft, setSelectLeft] = useState();
  const [selectRight, setSelectRight] = useState();
  const [correctModalShown, setCorrectModalShown] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);

  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [p4, setP4] = useState(false);
  const [p5, setP5] = useState(false);
  const [p6, setP6] = useState(false);
  const [p7, setP7] = useState(false);
  const [p8, setP8] = useState(false);
  const [p9, setP9] = useState(false);

  const onCheckResult = () => {
    console.log('================================');
    console.log(isCorrect);
    if (isCorrect) {
      setIsRunning(false);
      setCorrectModalShown(true);
    }
  };

  useEffect(() => {
    if (p1 && p2 && p3 && p4 && p5 && p6 && p7 && p8 && p9) {
      setIsCorrect(true);
    }
  }, [p1, p2, p3, p4, p5, p6, p7, p8, p9]);

  const handleCheckResult = (selectLeft, selectRight) => {
    // Implement your check result logic here
    console.log('checking', selectLeft, selectRight);
    if (selectLeft && selectRight) {
      if (selectLeft === 'p9' && selectRight === 'p9') {
        setP9(true);
      } else if (selectLeft === 'p8' && selectRight === 'p8') {
        setP8(true);
      } else if (selectLeft === 'p7' && selectRight === 'p7') {
        setP7(true);
      } else if (selectLeft === 'p6' && selectRight === 'p6') {
        setP6(true);
      } else if (selectLeft === 'p5' && selectRight === 'p5') {
        setP5(true);
      } else if (selectLeft === 'p4' && selectRight === 'p4') {
        setP4(true);
      } else if (selectLeft === 'p3' && selectRight === 'p3') {
        setP3(true);
      } else if (selectLeft === 'p2' && selectRight === 'p2') {
        setP2(true);
      } else if (selectLeft === 'p1' && selectRight === 'p1') {
        setP1(true);
      }

      setSelectLeft(null);
      setSelectRight(null);
    }
  };

  // const p1 = selectLeft === 'p1' && selectRight === 'p1';
  // const p2 = selectLeft === 'p2' && selectRight === 'p2';
  // const p3 = selectLeft === 'p3' && selectRight === 'p3';
  // const p4 = selectLeft === 'p4' && selectRight === 'p4';
  // const p5 = selectLeft === 'p5' && selectRight === 'p5';
  // const p6 = selectLeft === 'p6' && selectRight === 'p6';
  // const p7 = selectLeft === 'p7' && selectRight === 'p7';
  // const p8 = selectLeft === 'p8' && selectRight === 'p8';
  // const p9 = selectLeft === 'p9' && selectRight === 'p9';

  const setSelect = ([d, p]) => {
    // console.log('select', p, p);
    if (p1 && p === 'p1') {
      return;
    }
    if (p2 && p === 'p2') {
      return;
    }
    if (p3 && p === 'p3') {
      return;
    }
    if (p4 && p === 'p4') {
      return;
    }
    if (p5 && p === 'p5') {
      return;
    }
    if (p6 && p === 'p6') {
      return;
    }
    if (p7 && p === 'p7') {
      return;
    }
    if (p8 && p === 'p8') {
      return;
    }
    if (p9 && p === 'p9') {
      return;
    }

    if (d === 'left') {
      if (p === selectLeft) {
        setSelectLeft(null);
        handleCheckResult(null, selectRight);
      } else {
        setSelectLeft(p);
        handleCheckResult(p, selectRight);
      }
    }

    if (d === 'right') {
      if (p === selectRight) {
        setSelectRight(null);
        handleCheckResult(p, null);
      } else {
        setSelectRight(p);
        handleCheckResult(p, selectRight);
      }
    }
  };

  const onNext = () => {
    setCorrectModalShown(false);
    navigation.dispatch(StackActions.push('Main'));
  };

  return (
    <PuzzleBackground
      title="퍼즐 맞추기"
      question="주어진 시간 안에 퍼즐을 맞춰보자!"
      navigation={navigation}
      destination="Main"
      retryTimeout="PuzzleGame3"
      onCheckResult={onCheckResult}
      isRunning={isRunning}
      setIsRunning={setIsRunning}>
      <View style={styles.contentView}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.cardContainer}>
            <Card2
              urlImage={require('../../../assets/images/PuzzleGame/Game3/bg1.png')}
            />
            <View style={[styles.cardHolder]}>
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p9.png')}
                onClick={() => {
                  setSelect(['left', 'p9']);
                }}
                ok={p9}
              />
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p7.png')}
                onClick={() => {
                  setSelect(['left', 'p7']);
                }}
                ok={p7}
              />
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p2.png')}
                onClick={() => {
                  setSelect(['left', 'p2']);
                }}
                ok={p2}
              />

              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p8.png')}
                onClick={() => {
                  setSelect(['left', 'p8']);
                }}
                ok={p8}
              />
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p1.png')}
                onClick={() => {
                  setSelect(['left', 'p1']);
                }}
                ok={p1}
              />
              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p3.png')}
                onClick={() => {
                  setSelect(['left', 'p3']);
                }}
                ok={p3}
              />

              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p6.png')}
                onClick={() => {
                  setSelect(['left', 'p6']);
                }}
                ok={p6}
              />

              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p5.png')}
                onClick={() => {
                  setSelect(['left', 'p5']);
                }}
                ok={p5}
              />

              <FragImage
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p4.png')}
                onClick={() => {
                  setSelect(['left', 'p4']);
                }}
                ok={p4}
              />
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Card2
              urlImage={require('../../../assets/images/PuzzleGame/Game3/bg2.png')}
            />
            <View style={[styles.cardHolder2, {rowGap: 7, columnGap: 7}]}>
              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p1.png')}
                onClick={() => {
                  setSelect(['right', 'p1']);
                }}
                ok={p1}
                select={selectRight === 'p1'}
              />
              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p2.png')}
                onClick={() => {
                  setSelect(['right', 'p2']);
                }}
                ok={p2}
                select={selectRight === 'p2'}
              />
              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p3.png')}
                onClick={() => {
                  setSelect(['right', 'p3']);
                }}
                ok={p3}
                select={selectRight === 'p3'}
              />

              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p4.png')}
                onClick={() => {
                  ``;
                  setSelect(['right', 'p4']);
                }}
                ok={p4}
                select={selectRight === 'p4'}
              />
              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p5.png')}
                onClick={() => {
                  setSelect(['right', 'p5']);
                }}
                ok={p5}
                select={selectRight === 'p5'}
              />
              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p6.png')}
                onClick={() => {
                  setSelect(['right', 'p6']);
                }}
                ok={p6}
                select={selectRight === 'p6'}
              />

              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p7.png')}
                onClick={() => {
                  setSelect(['right', 'p7']);
                }}
                ok={p7}
                select={selectRight === 'p7'}
              />
              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p8.png')}
                onClick={() => {
                  setSelect(['right', 'p8']);
                }}
                ok={p8}
                select={selectRight === 'p8'}
              />
              <FragImage2
                urlImage={require('../../../assets/images/PuzzleGame/Game3/p9.png')}
                onClick={() => {
                  setSelect(['right', 'p9']);
                }}
                ok={p9}
                select={selectRight === 'p9'}
              />
            </View>
          </View>
        </View>
        <VictoryPartModalDialog
          modalVisible={correctModalShown}
          setModalVisible={setCorrectModalShown}
          gameType={1}
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

  cardHolder: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: 6,
  },
  cardHolder2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default Game3;

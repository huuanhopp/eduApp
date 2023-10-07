import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import PuzzleBackground from './PuzzleBackground';
import AnswerButton from '../../core/Button/AnswerButton';
import Card from '../../core/Card/Card';
const Game1 = ({ navigation }) => {
  const [flipCards, setFlipCards] = useState([]);
  const [cards, setCards] = useState([
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Peach.png'),
      top: 270,
      left: 370,
      match: 1,
      selected: false,
      removed: false,
    },
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Grape.png'),
      top: 270,
      left: 550,
      match: 2,
      selected: false,
      removed: false,
    },
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Popcorn.png'),
      top: 270,
      left: 730,
      match: 3,
      selected: false,
    },
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Carrot.png'),
      top: 270,
      left: 910,
      match: 4,
      selected: false,
      removed: false,
    },
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Grape.png'),
      top: 485,
      left: 370,
      match: 2,
      selected: false,
      removed: false,
    },
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Popcorn.png'),
      top: 485,
      left: 550,
      match: 3,
      selected: false,
      removed: false,
    },
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Peach.png'),
      top: 485,
      left: 730,
      match: 1,
      selected: false,
      removed: false,
    },
    {
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Carrot.png'),
      top: 485,
      left: 910,
      match: 4,
      selected: false,
      removed: false,
    },
  ]);

  useEffect(() => {
    if (flipCards.length >= 2) {
      const timer = setTimeout(() => {
        // check two cards match or not
        const isMatched =
          cards[flipCards[0]].match === cards[flipCards[1]].match;
        if (isMatched) {
          const newCardsState = cards.map((item, idx) => {
            if (flipCards.findIndex((item) => item === idx) > -1) {
              return { ...item, removed: true };
            }
            return { ...item };
          });
          setCards(newCardsState);
        } else {
          const newCardsState = cards.map((item, idx) => {
            if (flipCards.findIndex((item) => item === idx) > -1) {
              return { ...item, selected: false };
            }
            return { ...item };
          });
          setCards(newCardsState);
        }
        setFlipCards([]);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [flipCards]);

  const handleSelectedCard = (index) => {
    const newCards = cards.map((item, idx) => {
      if (item.removed) return item;
      if (idx === index) {
        const updatedSelected = !item?.selected;
        if (updatedSelected) {
          setFlipCards((prevCards) => [...prevCards, index]);
        } else {
          const newFlipCards = flipCards.filter((item, idx) => idx !== idx);
          setFlipCards(newFlipCards);
        }
        return { ...item, selected: updatedSelected };
      }
      return item;
    });
    setCards(newCards);
  };

  return (
    <>
      <PuzzleBackground
        title="카드 뒤집기"
        question="주어진 시간 안에 카드를 뒤집어 같은 그림끼리 찾아보자!"
        navigation={navigation}
        leftPosContent="28.5%"
        leftPosTitle="41%"
        destination="PuzzleGame1"
      />
      {cards?.map((item, index) => (
        <Card
          key={index}
          index={index}
          hiddenImage={item.hiddenImage}
          top={item.top}
          left={item.left}
          selected={item.selected}
          handSelectedCard={(index) => handleSelectedCard(index)}
        />
      ))}
    </>
  );
};

// const styles = StyleSheet.create({
//   audio: {
//     position: 'absolute',
//     top: 440,
//     left: '47%',
//     zIndex: 3,
//     // fontWeight: 700,
//   },
//   yellowBoard: {
//     position: 'absolute',
//     top: 310,
//     left: '28%',
//     zIndex: 3,
//     // fontWeight: 700,
//   },
// });

export default Game1;

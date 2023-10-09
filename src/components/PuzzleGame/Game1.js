import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../../core/Card/Card';
import PuzzleBackground from './PuzzleBackground';
const Game1 = ({navigation}) => {
  const [flipCards, setFlipCards] = useState([]);
  const [cards, setCards] = useState([
    {
      index: 0,
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Peach.png'),
      top: 270,
      left: 370,
      match: 1,
      selected: false,
      removed: false,
    },
    {
      index: 1,
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Grape.png'),
      top: 270,
      left: 550,
      match: 2,
      selected: false,
      removed: false,
    },
    {
      index: 2,
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Popcorn.png'),
      top: 270,
      left: 730,
      match: 3,
      selected: false,
    },
    {
      index: 3,
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Carrot.png'),
      top: 270,
      left: 910,
      match: 4,
      selected: false,
      removed: false,
    },
    {
      index: 4,
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Grape.png'),
      top: 485,
      left: 370,
      match: 2,
      selected: false,
      removed: false,
    },
    {
      index: 5,
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Popcorn.png'),
      top: 485,
      left: 550,
      match: 3,
      selected: false,
      removed: false,
    },
    {
      index: 6,
      hiddenImage: require('../../../assets/images/PuzzleGame/Game1/Peach.png'),
      top: 485,
      left: 730,
      match: 1,
      selected: false,
      removed: false,
    },
    {
      index: 7,
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
            if (flipCards.findIndex(item => item === idx) > -1) {
              return {...item, removed: true};
            }
            return {...item};
          });
          setCards(newCardsState);
        } else {
          const newCardsState = cards.map((item, idx) => {
            if (flipCards.findIndex(item => item === idx) > -1) {
              return {...item, selected: false};
            }
            return {...item};
          });
          setCards(newCardsState);
        }
        setFlipCards([]);
      }, 600);
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
          setFlipCards(prevCards => [...prevCards, index]);
        } else {
          const newFlipCards = flipCards.filter((item, idx) => idx !== idx);
          setFlipCards(newFlipCards);
        }
        return {...item, selected: updatedSelected};
      }
      return item;
    });
    setCards(newCards);
  };

  const onCheckResult = () => {};

  return (
    <PuzzleBackground
      title="카드 뒤집기"
      question="주어진 시간 안에 카드를 뒤집어 같은 그림끼리 찾아보자!"
      navigation={navigation}
      destination="PuzzleGame1"
      onCheckResult={onCheckResult}>
      <View style={styles.contentView}>
        <View style={{flexDirection: 'row'}}>
          <Card
            index={cards[0].index}
            hiddenImage={cards[0].hiddenImage}
            selected={cards[0].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
          <Card
            index={cards[1].index}
            hiddenImage={cards[1].hiddenImage}
            selected={cards[1].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
          <Card
            index={cards[2].index}
            hiddenImage={cards[2].hiddenImage}
            selected={cards[2].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
          <Card
            index={cards[3].index}
            hiddenImage={cards[3].hiddenImage}
            selected={cards[3].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card
            index={cards[4].index}
            hiddenImage={cards[4].hiddenImage}
            selected={cards[4].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
          <Card
            index={cards[5].index}
            hiddenImage={cards[5].hiddenImage}
            selected={cards[5].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
          <Card
            index={cards[6].index}
            hiddenImage={cards[6].hiddenImage}
            selected={cards[6].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
          <Card
            index={cards[7].index}
            hiddenImage={cards[7].hiddenImage}
            selected={cards[7].selected}
            handSelectedCard={index => handleSelectedCard(index)}
          />
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

export default Game1;

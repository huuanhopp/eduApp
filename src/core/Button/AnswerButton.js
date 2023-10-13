import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const AnswerButton = ({
  content = 'Default text',
  top = '50%',
  left = '50%',
  selectedOrder,
  callbackFunc,
  type = 'small',
  customWidth,
  customHeight,
  multipleChoice = true,
  handleOneChoice,
  isUniqueSelected = false,
  id,
  style,
  textStyle,
  buttonStyle,
  isHideOrder = false,
}) => {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(false || isUniqueSelected);
  }, [isUniqueSelected]);

  const handleButtonPress = () => {
    if (multipleChoice) {
      if (callbackFunc) callbackFunc(!isSelected, id);
      setSelected(!isSelected);
    } else {
      handleOneChoice(id);
    }
  };
  // let imageSource;
  const sourceImage = () => {
    switch (selectedOrder) {
      case 1:
        return require('../../../assets/images/ListeningGame/Game1/OrderNo1.png');
      case 2:
        return require('../../../assets/images/ListeningGame/Game1/OrderNo2.png');
      case 3:
        return require('../../../assets/images/ListeningGame/Game1/OrderNo3.png');
      case 4:
        return require('../../../assets/images/ListeningGame/Game1/OrderNo4.png');
      default:
        break;
    }
  };

  return (
    <View style={style ? [style] : [styles.container, {top, left}]}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: !isSelected ? '#FFF' : '#63A8FF',
          },
          buttonStyle,
        ]}
        onPress={handleButtonPress}>
        <Text
          style={[
            styles.buttonText,
            {
              color: !isSelected ? '#63A9FF' : '#FFF',
            },
            {
              fontSize: type === 'small' ? 36 : 24,
            },
            textStyle,
          ]}>
          {content}
        </Text>
        {selectedOrder != 0 && !isHideOrder && (
          <Image
            style={{position: 'absolute', right: 13.5, top: 12}}
            resizeMode="cover"
            source={sourceImage()}></Image>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  button: {
    borderWidth: 2,
    borderColor: '#63A8FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#63A9FF',
  },
});

export default AnswerButton;

import { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";

const StartScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.navigate('AdvertisingScreen');
      navigation.navigate('Main');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('AdvertisingScreen');
          navigation.navigate('Main');
        }}
      >
        <Image
          resizeMode="cover"
          source={require('../../assets/images/START.png')}
        />
        <StatusBar style="auto" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6EB5FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  overlayText: {
    position: 'absolute',
    zIndex: 1,
    top: '20%',
  },
  customButton: {
    position: 'absolute',
    zIndex: 1,
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 4,
  },
});

export default StartScreen;

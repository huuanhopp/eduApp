import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import GuideImage from "./components/GuideImage";
import Carousel, { Pagination } from "react-native-snap-carousel";

const widthScreen = Dimensions.get("screen").height * 1.431;

const GuideScreen = () => {
  const guideImages = [
    require("../../../assets/images/GuideScreen/guide1Img.png"),
    require("../../../assets/images/GuideScreen/guide2Img.png"),
    require("../../../assets/images/GuideScreen/guide3Img.png"),
    require("../../../assets/images/GuideScreen/guide4Img.png"),
    require("../../../assets/images/GuideScreen/guide5Img.png"),
    require("../../../assets/images/GuideScreen/guide6Img.png"),
    require("../../../assets/images/GuideScreen/guide7Img.png"),
    require("../../../assets/images/GuideScreen/guide8Img.png"),
    require("../../../assets/images/GuideScreen/guide9Img.png"),
    require("../../../assets/images/GuideScreen/guide10Img.png"),
    require("../../../assets/images/GuideScreen/guide11Img.png"),
    require("../../../assets/images/GuideScreen/guide12Img.png"),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex >= guideImages.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((pre) => pre + 1);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const onStartTraining = () => {};

  const onClose = () => {};

  return (
    <View style={styles.rootView}>
      <ImageBackground
        source={require("../../../assets/images/GuideScreen/guideBGImg.png")}
        style={styles.bgImage}
      >
        <View style={styles.topView}>
          <View style={styles.titleView}>
            <View style={{ flex: 1 }} />
            <Image
              source={require("../../../assets/images/GuideScreen/guideTitleImg.png")}
              style={styles.titleImg}
              resizeMode="contain"
            />
            <View style={styles.closeButtonView}>
              <TouchableOpacity onPress={onClose}>
                <Image
                  source={require("../../../assets/images/GuideScreen/closeButton.png")}
                  style={styles.closeImg}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.contentView}>
          <GuideImage source={guideImages[currentIndex]} />
          <View style={styles.pagingView}>
            <Pagination
              dotsLength={guideImages.length}
              activeDotIndex={currentIndex}
              dotStyle={styles.dotView}
              inactiveDotStyle={styles.inactiveDotView}
              inactiveDotScale={1}
              inactiveDotOpacity={1}
            />
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={onStartTraining}>
            <Image
              source={require("../../../assets/images/GuideScreen/startTrainingButton.png")}
              style={styles.startTrainingImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GuideScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    width: widthScreen,
    alignSelf: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  topView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 40,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  bottomView: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    height: Dimensions.get("screen").height * 0.62,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#002443",
  },
  titleImg: {
    width: widthScreen * 0.28,
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  closeImg: {
    height: widthScreen * 0.0418,
    width: widthScreen * 0.0418,
  },
  closeButtonView: { flex: 1, alignItems: "flex-end" },
  dotView: {
    width: 32,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    shadowColor: "#0069D666",
    elevation: 5,
  },
  inactiveDotView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    shadowColor: "#0069D666",
    elevation: 5,
  },
  pagingView: {
    alignItems: "flex-start",
    paddingLeft: widthScreen * 0.13,
    marginTop: -10,
  },
  startTrainingImg: {
    width: widthScreen * 0.293,
  },
});

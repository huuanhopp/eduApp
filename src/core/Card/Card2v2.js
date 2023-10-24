import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, PanResponder, View, Text } from 'react-native';
import { ratioH } from '../../utils/utils';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
console.log(windowWidth)
const imageWidth = windowWidth > 1700 ? 460*1.4 : 460
const imageHeight = windowWidth > 1700 ? 314*1.4 : 314


const Card2v2 = ({ urlImage, bg, listPoint, onPressChangeGesture = () => { } }) => {

    const defaultPoint = bg == 2 ? { x: 878, y: 308 } : { x: 200, y: 305 }
    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderRelease: (e, gestureState) => {
                onPressChangeGesture({ x: gestureState.x0.toFixed(), y: gestureState.y0.toFixed() }, bg)
            },
        }) 
    ).current;
    return (
        <View>
            <Image
                {...panResponder.panHandlers}
                source={urlImage} // Replace with the actual path to your first image    
                style={{ width: imageWidth, height: imageHeight, marginHorizontal: 14 }}
            />
            <View
                pointerEvents="none"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    marginHorizontal: 14,
                    opacity: 0.5,
                    position: "absolute",
                }}>
                {/* {bg == 2
                    && listPoint
                    && listPoint?.length > 0
                    && listPoint.map((item, index) => {
                        return item.active == true ? (
                            <Image
                                key={index}
                                source={require('../../../assets/images/PuzzleGame/Game2/red_circle.png')}
                                style={{
                                    width: 80,
                                    height: 80,
                                    position: "absolute",
                                    top: item.y - defaultPoint.y - 40 + 5,
                                    left: item.x - defaultPoint.x - 40 + 5
                                    // top: gesture2.y - defaultPoint.y - 40 + 5, // 40 là bán kính hình tròn, 5 là độ lệch sang phải
                                    // left: gesture2.x - defaultPoint.x - 40 + 5
                                }}

                            />
                        ) : (<View key={index}></View>)
                    })} */}


            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    absolute: {},
    cardImg: {
        height: ratioH(196),
    },
    circle: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FF6E6E',
        opacity: 0.5,
    },
});

export default Card2v2;

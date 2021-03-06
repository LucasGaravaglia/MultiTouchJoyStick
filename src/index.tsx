import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {HandlerStateChangeEvent, PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import { runOnUI } from 'react-native-reanimated';

interface propsJoystick {
  width?: number;
  height?: number;
  ballRadius?: number;
  backgroundColor?: string;
  ballColor?: string;
  onValue: (x,y) => {};
}
type ContextType = {
  translateX: number;
  translateY: number;
};
function MultiTouchJoyStick({
  backgroundColor = '#f5f5f5',
  ballColor = 'rgba(0, 0, 256, 0.5)',
  ballRadius = 30,
  height = 200,
  width = 200,
  onValue,
}:propsJoystick) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const absoluteInitialX = useSharedValue(0);
  const absoluteInitialY = useSharedValue(0);

  
  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,ContextType>({
    onStart: (event) => {},
    
    onActive: (event) => {
      if (event.translationX < width / 2  && event.translationX > -width / 2)
        translateX.value = event.translationX;
      if (event.translationY  < height / 2 && event.translationY > -height / 2)
        translateY.value = event.translationY;
      runOnJS(onValue)(Number((translateX.value/width*2).toFixed(2)),Number((translateY.value/height*2).toFixed(2)))

    },
    onEnd: () => {
      runOnJS(onValue)(0,0)
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
    
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        borderRadius: 180,
      }}>
      <PanGestureHandler onGestureEvent={panGestureEvent} >
        <Animated.View
          style={[
            {
              width: ballRadius * 2,
              height: ballRadius * 2,
              backgroundColor: ballColor,
              borderRadius: 180,
            },
            rStyle,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
}

export default memo(MultiTouchJoyStick);

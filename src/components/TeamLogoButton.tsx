import React, { useRef, useState } from 'react';
import { Pressable, View, Text, Image, Animated, ListRenderItem } from 'react-native';
import { Team } from '../config/types';

interface TeamLogoButtonProps {
    item: Team;
  }

export const TeamLogoButton = ({ item } : TeamLogoButtonProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.85, 
      friction: 7,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 7,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      key={item.idTeam}
      onPress={() => console.log(item)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={{
          transform: [{ scale: scaleValue }],
        }}
        className='flex flex-col items-center justify-center gap-y-2'
      >
        <Image
          className='w-24 h-24'
          source={{ uri: item.strBadge }}
          resizeMode="contain"
        />
        <Text className='font-semibold text-center text-white'>{item.strTeam}</Text>
      </Animated.View>
    </Pressable>
  );
};


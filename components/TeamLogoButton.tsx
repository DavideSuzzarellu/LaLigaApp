import React, { useRef } from "react";
import { Pressable, Text, Image, Animated } from "react-native";
import { Team } from "../config/types";
import { Link } from "expo-router";

interface TeamLogoButtonProps {
  item: Team;
}

export const TeamLogoButton = ({ item }: TeamLogoButtonProps) => {
  const { idTeam } = item;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.85,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 0.6,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Link href={`/${idTeam}`} asChild>
      <Pressable
        key={item.idTeam}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
            opacity: opacityValue,
          }}
          className="flex flex-col items-center justify-center gap-y-2"
        >
          <Image
            className="w-24 h-24"
            source={{ uri: item.strBadge }}
            resizeMode="contain"
          />
          <Text className="font-semibold text-center text-white">
            {item.strTeam}
          </Text>
        </Animated.View>
      </Pressable>
    </Link>
  );
};

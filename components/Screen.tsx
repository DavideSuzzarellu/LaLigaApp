import { View } from "react-native";
import React, { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <View className="flex-1 flex-grow w-full h-full bg-[#FFFFFF]">
      {children}
    </View>
  )
};

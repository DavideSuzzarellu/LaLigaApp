import { View } from "react-native";
import React, { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <View className="flex-1 w-full h-full bg-slate-700">
      {children}
    </View>
  );
};

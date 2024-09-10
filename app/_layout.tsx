import { Stack } from "expo-router";
import React from "react";
import { Logo } from "../components/Logo";
import { View } from "react-native";
import { MarkLogo } from "../components/MarkLogo";
import { TeamsProvider } from "../context/TeamsContext";

const HeaderLogo = () => {
  return (
    <View className="flex flex-row gap-1">
      <MarkLogo />
      <Logo />
    </View>
  );
};

const Layout = () => {
  return (
    <TeamsProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "slate-700" },
          headerLeft: HeaderLogo,
          headerRight: undefined,
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
    </TeamsProvider>
  );
};

export default Layout;

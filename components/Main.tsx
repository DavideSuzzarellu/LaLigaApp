import { useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useTeamsContext from "../hooks/useTeamContext";
import { Logo } from "./Logo";
import { MarkLogo } from "./MarkLogo";
import { TeamLogoButton } from "./TeamLogoButton";
import { fetchTeams } from "../utils/apiFunction";
import { Screen } from "./Screen";

export const Main = () => {
  const { teams, setTeams } = useTeamsContext();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchTeams(signal, setTeams);

    return () => {
      controller.abort();
    };
  }, []);

  if (!teams) {
    return <ActivityIndicator />;
  }

  return (
    <Screen>
      <FlatList
        data={teams}
        renderItem={({ item }) => <TeamLogoButton item={item} />}
        keyExtractor={(item) => item.idTeam.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          alignItems: "center",
          gap: 80,
          paddingVertical: 20,
        }}
        contentContainerStyle={{
          paddingHorizontal: 30,
          paddingBottom: insets.bottom,
        }}
      />
    </Screen>
  );
};

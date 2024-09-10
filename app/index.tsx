import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TeamsProvider } from "../context/TeamsContext";
import { Main } from "../components/Main";
import { fetchTeams } from "../utils/apiFunction";
import useTeamsContext from "../hooks/useTeamContext";

export const Index = () => {
  const { setTeams } = useTeamsContext();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchTeams(signal, setTeams);
    console.log("Effect");

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <TeamsProvider>
        <Main />
      </TeamsProvider>
    </SafeAreaProvider>
  );
};

export default Index;

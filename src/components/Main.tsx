import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, ListRenderItem, Platform, Pressable, Text, TouchableHighlight, View } from 'react-native';
import { Team } from '../config/types';
import React from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useTeamsContext from '../hooks/useTeamContext';
import { Logo } from './Logo';
import { MarkLogo } from './MarkLogo';
import { TeamLogoButton } from './TeamLogoButton';

export default function Main() {
  const { teams, setTeams } = useTeamsContext();
  const insets = useSafeAreaInsets();

  async function fetchTeams(signal: AbortSignal) {
    try {
      const res = await fetch(
        'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish_La_Liga',
        { signal }
      );
      if (!res.ok) {
        console.error(res.status);
      }

      const data = await res.json();
      setTeams(data.teams);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Fetch error:', error);
        }
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchTeams(signal);
    console.log("effect Teams");

    return () => {
      controller.abort();
    };
  }, []);

  if (!teams) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1, paddingHorizontal: 6, width: "100%" }}>
      <View className='flex flex-row items-center justify-start gap-1 px-2'>
        <MarkLogo/>
        <Logo/>
      </View>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <TeamLogoButton item={item} /> 
        )}
        keyExtractor={(item) => item.idTeam.toString()} 
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: 'space-between', alignItems: "center", gap: 80, paddingVertical: 20 }} 
        contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: insets.bottom }}
      />
    </View>
  );
}

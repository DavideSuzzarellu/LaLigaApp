import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import useTeamsContext from '../hooks/useTeamContext';
import { teamColors } from '../utils/teamColors';

const TeamDetails = () => {
  const { teamId } = useLocalSearchParams();
  const { teams } = useTeamsContext();

  const team = teams?.find((team) => team.idTeam === teamId);
  console.log("team", team);

  const colors = teamColors[team?.strTeam ?? 0] || ['#FFFFFF', '#000000']; 
  const [backgroundColor, textColor] = colors;

  if (!team) return <ActivityIndicator />;

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor },
          headerTitle: () => <Text style={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}>{team?.strTeam}</Text>,
          headerLeft: undefined,
          headerRight: undefined,
        }}
      />
      <Text style={{ color: textColor }}>Team Name: {team?.strTeam}</Text>
      <Text style={{ color: textColor }}>Stadium: {team?.strStadium}</Text>
      <Text style={{ color: textColor }}>Formed Year: {team?.intFormedYear}</Text>
    </Screen>
  );
};

export default TeamDetails;

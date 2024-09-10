import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View, Linking, Pressable, SafeAreaView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import { Image } from 'react-native';
import useTeamsContext from '../hooks/useTeamContext';
import { teamColors } from '../utils/teamColors';
import { FacebookLogo, InstagramLogo, WebLogo, XLogo } from '../components/Icons';
import { Equipment } from '../components/Equipments';

const TeamDetails = () => {
  const { teamId } = useLocalSearchParams();
  const { teams } = useTeamsContext();
  const [activeSection, setActiveSection] = useState('history');

  const team = teams?.find((team) => team.idTeam === teamId);
  console.log("team", team);

  const colors = teamColors[team?.strTeam ?? 0] || ['#FFFFFF', '#000000'];
  const [backgroundColor, textColor] = colors;


  const openURL = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error al abrir URL:", err));
  };

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
      <ScrollView className='flex flex-col h-full'>
        <Image
          className='w-full mt-5 h-52 place-self-center'
          source={{ uri: team.strBadge }}
          resizeMode="contain"
        />
        <View className='flex flex-row items-center my-8 justify-evenly'>
          <Pressable onPress={() => openURL(`https://${team.strFacebook}` || 'https://facebook.com')}>
            <FacebookLogo />
          </Pressable>
          <Pressable onPress={() => openURL(`https://${team.strInstagram}` || 'https://instagram.com')}>
            <InstagramLogo />
          </Pressable>
          <Pressable onPress={() => openURL(`https://${team.strWebsite}` || 'https://website.com')}>
            <WebLogo />
          </Pressable>
          <Pressable onPress={() => openURL(`https://${team.strWebsite}` || 'https://website.com')}>
            <XLogo />
          </Pressable>
        </View>
        <ScrollView
          horizontal
          className='mb-7 border-y'
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Pressable
            style={{
              backgroundColor: activeSection === 'details' ? 'red' : 'transparent',
              height: "100%",
              paddingHorizontal: 7,
              paddingVertical: 8
            }}
            onPress={() => setActiveSection('details')}>
            <Text style={{ color: textColor, textAlignVertical: "center" }}>Detalles</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: activeSection === 'stadium' ? 'red' : 'transparent',
              height: "100%",
              paddingHorizontal: 10,
              paddingVertical: 8
            }}
            onPress={() => setActiveSection('stadium')}>
            <Text style={{ color: textColor }}>Stadium</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: activeSection === 'players' ? 'red' : 'transparent',
              height: "100%",
              paddingHorizontal: 7,
              paddingVertical: 8
            }}
            onPress={() => setActiveSection('players')}>
            <Text style={{ color: textColor }}>Jugadores</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: activeSection === 'equipment' ? 'red' : 'transparent',
              height: "100%",
              paddingHorizontal: 7,
              paddingVertical: 8
            }}
            onPress={() => setActiveSection('equipment')}>
            <Text style={{ color: textColor }}>Camiseta</Text>
          </Pressable>
        </ScrollView>
        <View className='px-2 pb-10'>
          {activeSection === 'stadium' && (
            <View>
              <Text style={{ color: textColor }}>Nombre: {team?.strStadium}</Text>
              <Text style={{ color: textColor }}>Ubicacion: {team?.strLocation}</Text>
              <Text style={{ color: textColor }}>Capacidad: {team?.intStadiumCapacity}</Text>
              <Text style={{ color: textColor }}>Ubicacion: {team?.strLocation}</Text>
            </View>
          )}
          {activeSection === 'details' && (
            <View>
              <Text style={{ color: textColor }}>Nombre Completo: {team?.strTeam}</Text>
              <Text style={{ color: textColor }}>Nombre corto: {team?.strTeamShort}</Text>
              <Text style={{ color: textColor }}>Ano creacion: {team?.intFormedYear}</Text>
              <Text style={{ color: textColor }}>Historia: {team?.strDescriptionES}</Text>
            </View>

          )}
          {activeSection === 'equipment' && (
            <Equipment teamId={team.idTeam} />
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default TeamDetails;


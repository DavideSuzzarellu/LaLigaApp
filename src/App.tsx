import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, Pressable, SafeAreaView, Text, View } from 'react-native'
import { LigaTeams, Team } from './config/types'
import React from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from './components/Main'
import { TeamsProvider } from './context/TeamsContext'
import { Logo } from './components/Logo'

export default function App () {
  const renderItem: ListRenderItem<Team> = ({ item }) => (
    <Text style={{ color: 'black' }}>{item.strTeamAlternate}</Text>
  );

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View className='items-center justify-center flex-1 bg-slate-600'>
        <TeamsProvider>
          <Main/>
        </TeamsProvider>
      </View>
    </SafeAreaProvider>
  )
}

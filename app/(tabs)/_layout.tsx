import { useUserStore } from '@/entities/user/store';
import Topbar from '@/shared/ui/Topbar';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <>
     <Topbar />
     <Stack>
      <Stack.Screen name="index" options={{title: 'Chat', headerShown: false}}/>
      <Stack.Screen name="ChatScreen" options={{title: 'Chats', headerShown: false}}/>
      <Stack.Screen name="ContactScreen" options={{title: 'Contact', headerShown: false}}/>
     </Stack>
    </>
  );
}

const styles = StyleSheet.create({

})

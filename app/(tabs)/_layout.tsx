import { useUserStore } from '@/entities/user/store';
import Topbar from '@/shared/ui/Topbar';
import { useFonts } from 'expo-font';
import { router, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

export default function TabLayout() {
  const { user, setUser } = useUserStore()
  const [isMounted, setIsMounted] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && !user.userID) {
      router.push('/login')
    }
  }, [isMounted])


  return (
    <>
      <Topbar />
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index" options={{ title: 'Chat', headerShown: false }} />
        <Stack.Screen name="ChatScreen" options={{ title: 'Chats', headerShown: false }} />
        <Stack.Screen name="ContactScreen" options={{ title: 'Contact', headerShown: false }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({

})

import Topbar from '@/shared/ui/Topbar';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
     <Topbar />
     <Stack>
      <Stack.Screen name="index" options={{title: 'Chat', headerShown: false}}/>
      <Stack.Screen name="ChatScreen" options={{title: 'Chats', headerShown: false}}/>
      <Stack.Screen name="LoginScreen" options={{title: 'Log in', headerShown: false}}/>
      <Stack.Screen name="ContactScreen" options={{title: 'Contact', headerShown: false}}/>
     </Stack>
    </>
  );
}

const styles = StyleSheet.create({

})

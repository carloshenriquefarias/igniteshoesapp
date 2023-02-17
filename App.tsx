import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import OneSignal from 'react-native-onesignal';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

import { tagUserEmailCreate } from './src/notifications/notificationsTags';

OneSignal.setAppId('010c26f8-8007-4a6c-832e-90ab8e772263');
OneSignal.setEmail('carloshenriquepvh@hotmail.com');

// OneSignal.setEmail('carloshenriquepvh@hotmail.com');


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate('carloshenriquepvh@hotmail.com')

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
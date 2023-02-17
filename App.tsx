import { StatusBar } from 'react-native';

import { Notification } from './src/components/Notification';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import OneSignal, { NotificationReceivedEvent, OSNotification }  from 'react-native-onesignal';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

import { tagUserInfoCreate } from './src/notifications/notificationsTags';
import { useEffect } from 'react';
// import { OSNotification } from 'react-native-onesignal';

OneSignal.setAppId('010c26f8-8007-4a6c-832e-90ab8e772263');
OneSignal.setEmail('carloshenriquepvh@hotmail.com');

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  tagUserInfoCreate();

  useEffect(() => {
    const unsubscribe = OneSignal.setNotificationOpenedHandler((response) =>{
      const {actionId} = response.action as any;

      switch(actionId){
        case '1': return console.log('Ver todas');
        case '2': return console.log('Ver Amziade');
        default: return console.log('Nenhum botão foi clicado');
      }

      // console.log('NOTIFICAÇÃO ABERTA!');
    })

    return () => unsubscribe;

  },[])

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
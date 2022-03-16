import { useEffect, useState } from 'react'
import { setNotificationHandler } from 'expo-notifications'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'

import Navigation from './src/Navigation'

import AuthProvider from './src/contexts/AuthContext'

setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()

        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  if (!appIsReady) {
    return null
  }

  return (
    <AuthProvider>
      <StatusBar translucent />
      <Navigation />
    </AuthProvider>
  )
}

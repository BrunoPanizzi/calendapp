import { setNotificationHandler } from 'expo-notifications'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'

import defaultStyles from './src/styles/defaultStyles'

import Navigation from './src/Navigation'

import AuthProvider from './src/contexts/AuthContext'
import ConfigProvider from './src/contexts/ConfigContext'


setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

export default function App() {
  return (
    <AuthProvider>
      <ConfigProvider>
        <StatusBar backgroundColor={defaultStyles.colors[0]} />
        <Navigation />
      </ConfigProvider>
    </AuthProvider>
  )
}

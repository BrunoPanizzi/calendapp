import { StatusBar } from 'expo-status-bar'

import defaultStyles from './src/styles/defaultStyles'

import Navigation from './src/Navigation'

import AuthProvider from './src/contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor={defaultStyles.colors[0]} />
      <Navigation />
    </AuthProvider>
  )
}

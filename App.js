import { StatusBar } from 'expo-status-bar'

import Navigation from './src/Navigation'

import AuthProvider from './src/contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <StatusBar />
      <Navigation />
    </AuthProvider>
  )
}

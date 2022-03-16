import { createContext, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { Auth } from '../../firebase'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(Auth.currentUser)

  onAuthStateChanged(Auth, (u) => {
    setUser(u)
    setLoading(false)
  })

  if (loading) return null

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

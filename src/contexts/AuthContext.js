import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false)

  const handleAuth = () => setAuth(prevAuth => !prevAuth)
  
  return (
    <AuthContext.Provider value={{
      auth,
      handleAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
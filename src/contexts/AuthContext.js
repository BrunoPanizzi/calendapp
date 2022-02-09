import { createContext, useState } from 'react' 
import { onAuthStateChanged } from 'firebase/auth'

import { Auth } from '../../firebase'


export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(Auth.currentUser)
  
  onAuthStateChanged(Auth, u => {
    setUser(u)
  })
  
  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}
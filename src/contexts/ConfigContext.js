import { createContext, useContext, useState } from 'react'

export const configContext = createContext()

export default function ConfigProvider({ children }){
  const [config, setConfig] = useState([
    {
      sectionName: 'Notificações',
      items: [
        {
          title: ''
        }
      ]
    }
  ])

  const getItemValueBySectionAndName = (section, name) => {
    return config.find(item => item.sectionName === section).items.find(item => item.title === name)
  }



  return (
    <configContext.Provider value={{
      config,
      setConfig
    }}>
      {children}
    </configContext.Provider>
  )
}

export function useConfig() {
  return useContext(configContext)
}

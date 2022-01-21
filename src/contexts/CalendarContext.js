import { createContext, useContext, useState } from 'react'

export const calendarContext = createContext()

export default function CalendarProvider({ children }){
  const [selectedDay, setSelectedDay] = useState('')
  
  return (
    <calendarContext.Provider value={{selectedDay, setSelectedDay}}>
      {children}
    </calendarContext.Provider>
  )
}

export function useCalendar() {
  return useContext(calendarContext)
}
'use client'

import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react'

type State = {
  userId: string | undefined
}

type AppContextType = {
  state: State
  setState: React.Dispatch<React.SetStateAction<State>>
}

const AppContext = createContext<AppContextType | null>(null)
// Create a provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>({
    userId: undefined,
  })

  const value = useMemo(
    () => ({
      setState,
      state,
    }),
    [state],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }

  return context
}

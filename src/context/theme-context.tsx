import React, { createContext, useState } from 'react'

import { ThemeContextProps, ThemeProviderProps } from '../types/theme.type'

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')

    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')

    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

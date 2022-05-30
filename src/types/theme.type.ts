export interface ThemeContextProps {
  theme: string
  setTheme: (theme: string) => void
}

export interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: string
}

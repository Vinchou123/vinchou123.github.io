import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    const initial = saved || (prefersLight ? 'light' : 'dark')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

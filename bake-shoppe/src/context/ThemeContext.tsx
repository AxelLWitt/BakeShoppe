import React from 'react'

interface ThemeContextProps {
    mode :'light' | 'dark'
    toggleMode? : () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps> ({
    mode: 'light'
})

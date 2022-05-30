import React from 'react'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

import { ThemeContext } from '../context/theme-context'

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <div
      className="flex items-center gap-5 py-1 text-gray-500 dark:text-gray-400 border-l-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 transition-colors dark:hover:text-orange-500 cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <RiSunLine className=" text-3xl ml-5" />
      ) : (
        <RiMoonClearLine className=" text-3xl ml-5" />
      )}
      <span className="text-lg capitalize">{theme === 'dark' ? 'light' : 'Dark'}</span>
    </div>
  )
}

export default Toggle

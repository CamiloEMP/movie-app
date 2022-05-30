import { GiFilmSpool } from 'react-icons/gi'
import { VscHome } from 'react-icons/vsc'

import { Sidebar } from '../types/sidebar.type'

import { LinkItem } from './link-item'
import Toggle from './theme-toggle'

export const Navbar = ({ isOpen, setIsOpen }: Sidebar) => {
  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="mt-12 flex flex-col gap-2">
      <LinkItem
        href="/"
        icon={<VscHome className="text-3xl" />}
        text="home"
        onClick={handleClick}
      />
      <LinkItem
        href="/films"
        icon={<GiFilmSpool className="text-3xl" />}
        text="films"
        onClick={handleClick}
      />
      <Toggle />
    </nav>
  )
}

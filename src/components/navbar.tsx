import { GiFilmSpool } from 'react-icons/gi'
import { VscHome } from 'react-icons/vsc'

import { Sidebar } from '../types/sidebar.type'

import { LinkItem } from './link-item'

export const Navbar = ({ isOpen, setIsOpen }: Sidebar) => {
  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="mt-12 flex flex-col">
      <section className="space-y-1">
        <LinkItem
          href="/"
          icon={<VscHome className="text-2xl" />}
          text="home"
          onClick={handleClick}
        />
        <LinkItem
          href="/films"
          icon={<GiFilmSpool className="text-2xl" />}
          text="films"
          onClick={handleClick}
        />
      </section>
    </nav>
  )
}

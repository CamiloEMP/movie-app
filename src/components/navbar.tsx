import { GiFilmSpool } from 'react-icons/gi'
import { VscHome } from 'react-icons/vsc'

import { LinkItem } from './link-item'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Navbar = ({ isOpen, setIsOpen }: Props) => {
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

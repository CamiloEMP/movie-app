import { GiFilmSpool } from 'react-icons/gi'
import { VscHome } from 'react-icons/vsc'

import { LinkItem } from './link-item'
export const Navbar = () => {
  return (
    <nav className="mt-12 flex flex-col">
      <section className="space-y-1">
        <LinkItem href="/" icon={<VscHome className="text-2xl" />} text="home" />
        <LinkItem href="/films" icon={<GiFilmSpool className="text-2xl" />} text="films" />
      </section>
    </nav>
  )
}

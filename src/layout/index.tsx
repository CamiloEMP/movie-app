import { ReactNode } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

import Logo from '../components/logo'
import { Navbar } from '../components/navbar'

interface Props {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Layout = ({ children, setIsOpen, isOpen }: Props) => {
  return (
    <section
      className={`relative flex flex-col md:flex-row mb-5 gap-5 min-h-screen ${
        isOpen ? 'fixed inset-0' : 'relative'
      }`}
    >
      <aside
        className={`fixed w-full min-h-screen md:static py-6 px-1 bg-brand-secondary transition-all md:border-none z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } `}
      >
        <div className="md:sticky md:top-5">
          <Logo />
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div
          className="md:hidden text-5xl rounded-tl-full rounded-bl-full absolute top-[42%] right-0 bg-brand-primary text-white cursor-pointer z-50"
          onClick={() => setIsOpen(false)}
        >
          <FiChevronLeft className="py-2" />
        </div>
      </aside>
      <aside className="w-full">{children}</aside>
    </section>
  )
}

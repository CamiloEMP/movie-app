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
      className={`flex flex-col lg:flex-row mb-5 gap-5 min-h-screen ${
        isOpen ? 'fixed inset-0 z-10 ' : ''
      }`}
    >
      <aside
        className={`fixed min-h-screen lg:static py-6 px-1 bg-brand-secondary transition-all lg:border-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } `}
      >
        <div className="lg:sticky lg:top-5">
          <Logo />
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div
          className="lg:hidden text-5xl rounded-tl-full rounded-bl-full absolute top-[42%] right-0 bg-brand-primary text-white cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FiChevronLeft className="py-2" />
        </div>
      </aside>
      <aside>{children}</aside>
    </section>
  )
}

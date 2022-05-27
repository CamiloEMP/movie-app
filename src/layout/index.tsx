import { ReactNode, useState } from 'react'
import { FiMenu, FiChevronLeft } from 'react-icons/fi'

import Logo from '../components/logo'
import { Navbar } from '../components/navbar'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      className={`flex flex-col md:flex-row min-h-screen  md:bg-white ${
        isOpen ? 'bg-modal-background' : ''
      }`}
    >
      <FiMenu className="text-3xl md:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
      <aside
        className={`absolute min-h-screen md:sticky md:top-0 py-6 px-1 bg-brand-secondary transition-all ${
          isOpen ? 'translate-x-0' : '-translate-x-96 md:translate-x-0'
        } `}
      >
        <Logo />
        <div
          className="md:hidden text-5xl rounded-tl-full rounded-bl-full  absolute top-[42%] right-0 bg-brand-primary text-white cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FiChevronLeft className="py-2" />
        </div>
        <Navbar />
      </aside>
      <aside>{children}</aside>
    </section>
  )
}

import { ReactNode } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'

import { FooterNavbar } from '../components/footer-navbar'
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
      className={`relative flex flex-col md:flex-row gap-5 min-h-screen bg-white dark:bg-black transition-colors ${
        isOpen ? 'fixed inset-0' : 'relative'
      }`}
    >
      <aside
        className={`fixed w-full md:w-80 min-h-full md:static py-6 px-1 bg-brand-secondary dark:bg-neutral-900 md:dark:bg-modal-background transition-all md:border-none z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } `}
      >
        <section className="md:sticky md:top-0 pt-5 flex flex-col justify-between h-screen">
          <div>
            <Logo />
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <footer className="pb-8">
            <FooterNavbar />
          </footer>
        </section>
        <div
          className="md:hidden text-5xl rounded-tl-full rounded-bl-full absolute top-[42%] right-0 bg-brand-primary text-white cursor-pointer z-50"
          onClick={() => setIsOpen(false)}
        >
          <FiChevronLeft className="py-2" />
        </div>
      </aside>
      <aside className="w-full flex flex-col px-6 dark:bg-black">{children}</aside>
    </section>
  )
}

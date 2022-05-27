import { ReactNode } from 'react'

import Logo from '../components/logo'
import { Navbar } from '../components/navbar'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <section className="flex">
      <aside className="h-screen sticky top-0 py-6 px-1 bg-brand-secondary">
        <Logo />
        <Navbar />
      </aside>
      <aside>{children}</aside>
    </section>
  )
}

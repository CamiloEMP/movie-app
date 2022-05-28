import { FiMenu, FiSearch } from 'react-icons/fi'

import { Sidebar } from '../types/sidebar.type'

export const Header = ({ setIsOpen }: Sidebar) => {
  return (
    <section className="mx-10 py-8 border-b-2 flex flex-col md:flex-row gap-4 md:justify-center">
      <div className="flex items-center gap-4">
        <FiMenu className="text-3xl md:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
        <h1 className="text-4xl font-bold uppercase">search a film</h1>
      </div>
      <div className="flex items-center gap-2 w-full max-w-md px-4 py-2 border-2 rounded-full outline-none bg-gray-100 hover:border-black focus-visible:border-black">
        <FiSearch className="text-xl" />
        <input className="text-lg w-4/5 bg-inherit outline-none" placeholder="Marvel" type="text" />
      </div>
    </section>
  )
}

import { FiMenu, FiSearch } from 'react-icons/fi'

import { getMoviesByQuery } from '../services/movies.services'
import { Sidebar } from '../types/sidebar.type'
import { Response } from '../types/moviejson.type'
interface Props extends Sidebar {
  query: string
  setQuery: (query: string) => void
  setDataQuery: (data: Response) => void
  setIsLoading: (isLoading: boolean) => void
}

export const Header = ({ setIsOpen, query, setQuery, setDataQuery, setIsLoading }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    getMoviesByQuery(query).then(data => {
      setDataQuery(data)
      setIsLoading(false)
    })
  }

  return (
    <section className="mx-10 py-8 border-b-2 flex flex-col md:flex-row gap-4 md:justify-center">
      <div className="flex items-center gap-4">
        <FiMenu className="text-3xl md:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
        <h1 className="text-4xl font-bold uppercase">search a film</h1>
      </div>
      <div className="flex items-center gap-2 w-full max-w-md px-4 py-2 border-2 rounded-full outline-none bg-gray-100 hover:border-black focus-visible:border-black">
        <FiSearch className="text-xl" />
        <input
          className="text-lg w-4/5 bg-inherit outline-none"
          placeholder="Marvel"
          type="text"
          value={query}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}

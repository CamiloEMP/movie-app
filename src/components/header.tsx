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
    if (query.length > 0) {
      getMoviesByQuery(query).then(data => {
        setDataQuery(data)
        setIsLoading(false)
      })
    }
  }

  return (
    <section className="bg-white dark:bg-black z-30 sticky top-0 px-4 py-8 border-b-2 dark:border-neutral-900 flex flex-col justify-start lg:flex-row gap-4 ">
      <div className="flex items-center gap-4">
        <FiMenu
          className="text-3xl md:hidden cursor-pointer dark:text-white"
          onClick={() => setIsOpen(true)}
        />
        <h1 className="text-4xl font-bold uppercase dark:text-white">search a film</h1>
      </div>
      <div className="flex items-center gap-2 w-full max-w-md px-4 py-2 border-2 rounded-full outline-none bg-gray-100 dark:bg-neutral-900 dark:border-neutral-900 dark:hover:border-neutral-700 hover:border-black focus-visible:border-black dark:text-gray-400">
        <FiSearch className="text-xl" />
        <input
          className="text-lg w-full bg-inherit outline-none"
          placeholder="More than two letters"
          type="text"
          value={query}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}

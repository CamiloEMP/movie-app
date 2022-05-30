import { ReactNode } from 'react'
import { RiCloseFill } from 'react-icons/ri'

import { Movie } from '../types/moviejson.type'
import { getUrlImage } from '../services/movies.services'
interface Props {
  onClose: () => void
  movieSelected: Movie
}

export const Modal = ({ onClose, movieSelected }: Props) => {
  return (
    <section className="fixed inset-0 bg-modal-background z-50 px-4 pt-12">
      <div className="bg-slate-200 dark:bg-black max-w-3xl mx-auto p-12 rounded-xl relative">
        <div className="flex justify-end">
          <RiCloseFill className="text-3xl dark:text-white cursor-pointer" onClick={onClose} />
        </div>
        <h3 className="dark:text-white text-4xl font-bold text-center">{movieSelected.title}</h3>
        <section className="flex flex-col md:flex-row gap-5 mt-4">
          <img alt="" className="w-60 rounded-xl" src={getUrlImage(movieSelected.poster_path)} />
          <div>
            <span className="text-2xl dark:text-white">Overview</span>
            <p className="dark:text-gray-300">{movieSelected.overview}</p>
            {movieSelected.popularity}
          </div>
        </section>
      </div>
    </section>
  )
}

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
      <div className="bg-slate-200 dark:bg-black max-w-3xl mx-auto pt-8 py-12 px-12 rounded-xl relative max-h-[90vh] overflow-y-auto">
        <h3 className="dark:text-white text-4xl font-bold text-center">{movieSelected.title}</h3>
        <RiCloseFill
          className="absolute right-5 top-5 text-3xl dark:text-white cursor-pointer"
          onClick={onClose}
        />
        <section className="flex flex-col md:flex-row gap-5 mt-4">
          <div className="flex justify-center min-w-min md:w-60">
            <img
              alt=""
              className="w-full rounded-xl"
              src={getUrlImage(movieSelected.poster_path)}
            />
          </div>
          <div className="max-w-sm">
            <div className="space-y-2">
              <span className="text-2xl dark:text-white">Overview</span>
              <p className="dark:text-gray-300">
                {movieSelected.overview || 'Overview no provided'}
              </p>
            </div>
            <span className="text-base dark:text-gray-500">
              Release date: {movieSelected.release_date}
            </span>
          </div>
        </section>
      </div>
    </section>
  )
}

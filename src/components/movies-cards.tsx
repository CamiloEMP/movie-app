import { getUrlImage } from '../services/movies.services'
import { ModalActions } from '../types/modal.types'
import { Movie } from '../types/moviejson.type'

interface Props extends ModalActions {
  movieData: Movie[]
}

export const MoviesCards = ({ movieData, setMovieSelected, onOpenModal }: Props) => {
  return (
    <section className="px-4 flex flex-wrap max-w-screen-2xl justify-center sm:justify-start gap-4 mt-14 pb-5">
      {movieData.map(movie => (
        <article
          key={movie.id}
          className="w-48 h-80 md:w-56 md:h-96 hover:scale-105 transition-transform duration-200 cursor-pointer"
          onClick={() => {
            setMovieSelected(movie)
            onOpenModal(true)
          }}
        >
          {(movie.poster_path && (
            <img
              alt={`${movie.title} poster`}
              className="w-full h-full object-cover object-center rounded-xl"
              src={getUrlImage(movie.poster_path)}
            />
          )) || (
            <div className="w-full h-full bg-gray-200 rounded-xl dark:bg-neutral-900">
              <div className="w-full h-full flex justify-center items-center">
                <div className="text-center text-gray-600 dark:text-gray-400">
                  <span className="text-2xl font-bold">{movie.title}</span>
                </div>
              </div>
            </div>
          )}
        </article>
      ))}
    </section>
  )
}

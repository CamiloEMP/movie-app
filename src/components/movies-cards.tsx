import { getUrlImage } from '../services/movies.services'
import { Movie } from '../types/moviejson.type'

export const MoviesCards = ({ movieData }: { movieData: Movie[] }) => {
  return (
    <section className="px-4 flex flex-wrap max-w-screen-2xl justify-center sm:justify-start gap-4 mt-14">
      {movieData.map(movie => (
        <article
          key={movie.id}
          className="w-48 h-80 md:w-56 md:h-96 hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          {(movie.poster_path && (
            <img
              alt=""
              className="w-full h-full object-cover object-center rounded-xl"
              src={getUrlImage(movie.poster_path || movie.backdrop_path)}
            />
          )) || (
            <div className="w-full h-full bg-gray-200 rounded-xl">
              <div className="w-full h-full flex justify-center items-center">
                <div className="text-center text-gray-600">
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

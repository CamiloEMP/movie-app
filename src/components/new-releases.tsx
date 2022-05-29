import { getUrlImage } from '../services/movies.services'
import { Movie } from '../types/moviejson.type'

export const NewReleases = ({ movieData }: { movieData: Movie[] }) => {
  return (
    <div className="flex flex-col max-w-screen-2xl">
      <h2 className="px-4 mt-8 text-3xl font-bold uppercase	">New Releases</h2>
      <section className="flex gap-4 mt-6 pb-6 px-4 overflow-x-auto  scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin">
        {movieData.slice(0, 5).map(movie => (
          <article
            key={movie.id}
            className="flex-none w-80 md:w-96 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              alt=""
              className="w-full h-full object-cover object-center rounded-xl"
              src={getUrlImage(movie.poster_path)}
            />
          </article>
        ))}
      </section>
    </div>
  )
}

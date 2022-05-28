import { useEffect, useState } from 'react'

import { getUrlImage } from '../api/config'
import data from '../data/movies.json'
import { Response, Movie } from '../types/moviejson.type'

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<Response>({} as Response)
  const [newReleases, setNewReleases] = useState<Movie[]>([])

  console.log(movies)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setMovies(data as Response)
      setNewReleases(data.results.slice(0, 5) as Movie[])
    }, 2000)
  }, [])

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <section className="px-2">
          <div className="flex flex-col max-w-screen-2xl">
            <h2 className="bg-brand-primary py-4 text-center text-3xl font-bold text-white rounded-xl">
              New Releases
            </h2>
            <section className="flex gap-4 mt-6 pb-6 overflow-x-auto  scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin">
              {newReleases.map(movie => (
                <article
                  key={movie.id}
                  className="flex-none w-[28rem] h-96 cursor-pointer hover:scale-105 transition-transform"
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
          <section className="flex flex-wrap justify-center gap-4 mt-14">
            {movies.results.slice(5).map(movie => (
              <article
                key={movie.id}
                className="w-48 h-80 md:w-60 md:h-96 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <img
                  alt=""
                  className="w-full h-full object-cover object-center rounded-xl"
                  src={getUrlImage(movie.poster_path)}
                />
              </article>
            ))}
          </section>
        </section>
      )}
    </>
  )
}

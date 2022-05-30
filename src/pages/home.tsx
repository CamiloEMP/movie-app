import { useEffect } from 'react'

import { Loader } from '../components/loader'
import { MoviesCards } from '../components/movies-cards'
import { NewReleases } from '../components/new-releases'
import { useData } from '../hooks/useData'
import { getMoviesJson } from '../services/movies.services'
import { Response } from '../types/moviejson.type'
import { ModalActions } from '../types/modal.types'
export const Home = ({ setMovieSelected, onOpenModal }: ModalActions) => {
  const { responseData, setData, isLoading, setIsLoading } = useData()

  useEffect(() => {
    const data = getMoviesJson()

    setData(data as Response)
    setIsLoading(false)
  }, [setData, setIsLoading])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NewReleases
            movieData={responseData?.results?.slice(0, 5)}
            setMovieSelected={setMovieSelected}
            onOpenModal={onOpenModal}
          />
          <MoviesCards
            movieData={responseData?.results?.slice(5)}
            setMovieSelected={setMovieSelected}
            onOpenModal={onOpenModal}
          />
        </>
      )}
    </>
  )
}

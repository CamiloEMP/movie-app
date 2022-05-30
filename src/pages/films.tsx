import { useEffect } from 'react'

import { Loader } from '../components/loader'
import { MoviesCards } from '../components/movies-cards'
import { useData } from '../hooks/useData'
import { getMoviesApi } from '../services/movies.services'
import { ModalActions } from '../types/modal.types'
export const Films = ({ setMovieSelected, onOpenModal }: ModalActions) => {
  const { setData, responseData, setIsLoading, isLoading } = useData()

  useEffect(() => {
    getMoviesApi().then(data => {
      setData(data)
      setIsLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <MoviesCards
          movieData={responseData?.results}
          setMovieSelected={setMovieSelected}
          onOpenModal={onOpenModal}
        />
      )}
    </>
  )
}

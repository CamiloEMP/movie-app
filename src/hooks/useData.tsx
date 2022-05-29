import { useContext, useEffect } from 'react'

import { DataContext } from '../context/DataContext'
import { Movie, Response } from '../types/moviejson.type'

export const useData = (cb: () => Promise<Response>) => {
  const {
    movieData,
    setMovieData,
    responseData,
    setResponseData,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useContext(DataContext)

  useEffect(() => {
    async function getData() {
      const data = await cb()

      setResponseData(data)
      setMovieData(data.results as Movie[])
      setIsLoading(false)
    }

    getData()
  }, [cb, setIsLoading, setError, setMovieData, setResponseData])

  return {
    movieData,
    responseData,
    isLoading,
    error,
    setError,
  }
}

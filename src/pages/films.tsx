import { useEffect } from 'react'

import { MoviesCards } from '../components/movies-cards'
import { useData } from '../hooks/useData'
import { getMoviesApi } from '../services/movies.services'

export const Films = () => {
  const { setData, responseData, setIsLoading, isLoading } = useData()

  useEffect(() => {
    async function getMovies() {
      const data = await getMoviesApi()

      setData(data)
      setIsLoading(false)
    }
    getMovies()
  }, [setData, setIsLoading])

  return (
    <>{isLoading ? <div>Loading...</div> : <MoviesCards movieData={responseData?.results} />}</>
  )
}

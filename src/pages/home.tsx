import { useEffect } from 'react'

import { MoviesCards } from '../components/movies-cards'
import { NewReleases } from '../components/new-releases'
import { useData } from '../hooks/useData'
import { getMoviesJson } from '../services/movies.services'

export const Home = () => {
  const { responseData, setData, setIsLoading, isLoading } = useData()

  useEffect(() => {
    const data = getMoviesJson()

    setData(data)
    setIsLoading(false)
  }, [setData])

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <NewReleases movieData={responseData?.results?.slice(0, 5)} />
          <MoviesCards movieData={responseData?.results?.slice(5)} />
        </>
      )}
    </>
  )
}

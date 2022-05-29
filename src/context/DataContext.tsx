import { createContext, ReactNode, useState } from 'react'

import { IDataContext } from '../types/data-context.type'
import { Movie, Response } from '../types/moviejson.type'

export const DataContext = createContext<IDataContext>({
  movieData: [],
  responseData: {} as Response,
  isLoading: false,
  error: false,
  setError: () => {},
  setIsLoading: () => {},
  setMovieData: () => {},
  setResponseData: () => {},
})

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [movieData, setMovieData] = useState<Movie[]>([])
  const [responseData, setResponseData] = useState<Response>({} as Response)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <DataContext.Provider
      value={{
        movieData,
        setMovieData,
        responseData,
        setResponseData,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

import { Movie, Response } from './moviejson.type'

export interface IDataContext {
  movieData: Movie[]
  setMovieData: (data: Movie[]) => void
  responseData: Response
  setResponseData: (data: Response) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  error: boolean
  setError: (error: boolean) => void
}

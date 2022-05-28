import { Movie } from './moviejson.type'

export interface IDataContext {
  data: Movie[]
  setData: (data: Movie[]) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  error: boolean
  setError: (error: boolean) => void
}

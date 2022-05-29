import { Response } from './moviejson.type'

export interface IDataContext {
  responseData: Response
  setResponseData: (newData: Response) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  error: boolean
  setError: (error: boolean) => void
}

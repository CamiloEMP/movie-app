import { useContext } from 'react'

import { DataContext } from '../context/DataContext'
import { Response } from '../types/moviejson.type'

export const useData = () => {
  const { responseData, setResponseData, isLoading, setIsLoading, error, setError } =
    useContext(DataContext)

  const setData = (data: Response) => setResponseData(data)

  return {
    responseData,
    setData,
    isLoading,
    error,
    setError,
    setIsLoading,
  }
}

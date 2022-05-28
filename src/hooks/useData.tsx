import { useContext, useEffect } from 'react'

import { DataContext } from '../context/DataContext'

export const useData = (url: string) => {
  const { data, setData, isLoading, setIsLoading, error, setError } = useContext(DataContext)

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?limit=50')
  }, [])

  return {
    data,
    setData,
    isLoading,
    error,
  }
}

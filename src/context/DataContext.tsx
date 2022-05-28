import { createContext, ReactNode, useState } from 'react'

import { IDataContext } from '../types/data-context.type'
import { Movie } from '../types/moviejson.type'

export const DataContext = createContext<IDataContext>({} as IDataContext)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
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

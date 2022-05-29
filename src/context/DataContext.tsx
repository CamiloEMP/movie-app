import { createContext, ReactNode, useState } from 'react'

import { IDataContext } from '../types/data-context.type'
import { Response } from '../types/moviejson.type'

export const DataContext = createContext<IDataContext>({
  responseData: {} as Response,
  isLoading: false,
  error: false,
  setError: () => {},
  setIsLoading: () => {},
  setResponseData: () => {},
})

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [responseData, setResponseData] = useState<Response>({} as Response)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <DataContext.Provider
      value={{
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

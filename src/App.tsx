import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Modal } from './components/modal'
import { MoviesCards } from './components/movies-cards'
import { Layout } from './layout'
import { Films } from './pages/films'
import { Home } from './pages/home'
import { Response } from './types/moviejson.type'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [queryData, setDataQuery] = useState<Response>({} as Response)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* <Modal /> */}
      <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
        <Header
          query={query}
          setDataQuery={setDataQuery}
          setIsLoading={setIsLoading}
          setIsOpen={setIsOpen}
          setQuery={setQuery}
        />
        {query.length > 0 ? (
          <>{isLoading ? <div>Loading...</div> : <MoviesCards movieData={queryData?.results} />}</>
        ) : (
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Films />} path="/films" />
          </Routes>
        )}
      </Layout>
    </>
  )
}

export default App

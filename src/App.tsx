import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Loader } from './components/loader'
import { Modal } from './components/modal'
import { MoviesCards } from './components/movies-cards'
import { Layout } from './layout'
import { Films } from './pages/films'
import { Home } from './pages/home'
import { Movie, Response } from './types/moviejson.type'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState<Movie>({} as Movie)
  const [queryData, setDataQuery] = useState<Response>({} as Response)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  return (
    <>
      {modalIsOpen && <Modal movieSelected={movieSelected} onClose={closeModal} />}
      <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
        <Header
          query={query}
          setDataQuery={setDataQuery}
          setIsLoading={setIsLoading}
          setIsOpen={setIsOpen}
          setQuery={setQuery}
        />
        {query.length > 1 ? (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <MoviesCards
                  movieData={queryData?.results}
                  setMovieSelected={setMovieSelected}
                  onOpenModal={openModal}
                />
                {queryData?.results.length === 0 && (
                  <p className="text-center font-bold text-gray-500 text-4xl">
                    Ups, No results found for {query}
                  </p>
                )}
              </>
            )}
          </>
        ) : (
          <Routes>
            <Route
              element={<Home setMovieSelected={setMovieSelected} onOpenModal={openModal} />}
              path="/"
            />
            <Route
              element={<Films setMovieSelected={setMovieSelected} onOpenModal={openModal} />}
              path="/films"
            />
          </Routes>
        )}
      </Layout>
    </>
  )
}

export default App

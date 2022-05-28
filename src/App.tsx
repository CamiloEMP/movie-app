import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Layout } from './layout'
import { Films } from './pages/films'
import { Home } from './pages/home'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [dataSearch, setDataSearch] = useState([])

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header setIsOpen={setIsOpen} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Films />} path="/films" />
      </Routes>
    </Layout>
  )
}

export default App

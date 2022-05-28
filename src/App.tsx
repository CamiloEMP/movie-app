import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './layout'
import { Films } from './pages/films'
import { Home } from './pages/home'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
      <section className="px-2 py-4">
        {/* <p>Oscuro BLacno</p> */}
        <FiMenu className="text-3xl lg:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
      </section>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Films />} path="/films" />
      </Routes>
    </Layout>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'

import { Layout } from './layout'
import { Films } from './pages/films'
import { Home } from './pages/home'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Films />} path="/films" />
        </Routes>
      </Layout>
    </>
  )
}

export default App

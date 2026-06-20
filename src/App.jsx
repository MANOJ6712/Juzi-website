import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroPage from './pages/HeroPage'
import MenuPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'
import Loader from './components/Loader'
import Scene3D from './components/Scene3D'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Scene3D currentPage={location.pathname} />
      <div className="content-overlay">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App

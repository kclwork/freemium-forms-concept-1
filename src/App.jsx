import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Homepage from './pages/Homepage/Homepage'
import FormsLanding from './pages/FormsLanding/FormsLanding'
import FormDetail from './pages/FormDetail/FormDetail'
import FormBuilder from './pages/FormBuilder/FormBuilder'
import Confirmation from './pages/Confirmation/Confirmation'
import './styles/global.css'

function FadeWrapper({ children }) {
  const location = useLocation()
  const [visible, setVisible] = useState(true)
  const prevKey = useRef(location.key)

  useEffect(() => {
    if (location.key !== prevKey.current) {
      setVisible(false)
      const t = setTimeout(() => {
        prevKey.current = location.key
        setVisible(true)
      }, 200)
      return () => clearTimeout(t)
    }
  }, [location])

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 200ms ease' }}>
      {children}
    </div>
  )
}

function AppRoutes() {
  return (
    <FadeWrapper>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/forms" element={<FormsLanding />} />
        <Route path="/forms/nda" element={<FormDetail />} />
        <Route path="/forms/nda/create" element={<FormBuilder />} />
        <Route path="/forms/nda/confirmation" element={<Confirmation />} />
      </Routes>
    </FadeWrapper>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

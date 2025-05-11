import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { StrictMode } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Layout from './components/layout/Layout'

function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </StrictMode>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import { AuthProvider } from '../context/AuthContext'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'

const RoutesIndex = () => {
  return (
  // <AuthProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<ProductDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />

    </Routes>
  // </AuthProvider>

  )
}
export default RoutesIndex

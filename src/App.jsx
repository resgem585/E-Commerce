import Navbar from './components/Header'
import RoutesIndex from './routes/Index'
import { ProductProvider } from './context/SearchContext'
import InputSearch from './components/InputSearch'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <InputSearch />
          <RoutesIndex />
        </ProductProvider>
      </AuthProvider>

    </>
  )
}

export default App

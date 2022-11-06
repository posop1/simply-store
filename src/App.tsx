import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import BinPage from './pages/BinPage'
import HomePage from './pages/HomePage'
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/bin"
            element={<BinPage />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App

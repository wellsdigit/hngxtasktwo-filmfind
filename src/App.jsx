import './App.css'
import Moviespage from './pages/MoviesPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetailPage from './pages/MovieDetailPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Moviespage />}/>
          <Route path="/movie/:id" element={<MovieDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

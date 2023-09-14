import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Moviespage from './pages/MoviesPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetailPage from './pages/MovieDetailPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hngxtasktwo-filmfind" element={<Moviespage />}/>
          <Route path="/hngxtasktwo-filmfind/movie/:id" element={<MovieDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

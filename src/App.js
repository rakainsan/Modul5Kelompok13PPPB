import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Buku from './pages/Buku'
import MovieDetail from './component/MovieDetail';
import Games from './pages/Games'
import { BiBookOpen, BiGame } from 'react-icons/bi'
function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 13</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/buku" element={<Buku />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/buku" className="iconWrapper">
          <BiBookOpen className="icon" /> Book
        </NavLink>
        <NavLink to="/games" className="iconWrapper">
          <BiGame className="icon" /> Games
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}
export default App
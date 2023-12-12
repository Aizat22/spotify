import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import RegisterSuccess from '../components/RegisterSuccess'
import Register from '../components/Register'
import LanguageSelector from '../components/LanguageSelector'
import Footer from '../components/Footer'
import { Card, Navbar } from 'react-bootstrap'
import Sidebar from '../components/SideBar/SideBAr'
import SidebarCard from '../components/SideBar/SideBarComponents'
import MusicBar from '../components/Section/MusicBar'
import PlayListSection from '../components/Section/PlayListSection'
import SongList from '../components/Section/SongList'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home page</h1>}/>
        <Route path='/sidebar' element={<Navbar/>}/>
        <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/language selector" element={<LanguageSelector />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/sidenarcompon" element={<SidebarCard />} />
      <Route path="/card" element={<Card />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/music" element={<MusicBar />} />
      <Route path="/plailist" element={<PlayListSection />} />
      <Route path="/songlist" element={<SongList />} />


      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
    </Routes>
  )
}

export default MainRoutes
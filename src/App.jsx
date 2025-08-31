import React from 'react'
import LandingPage from './pages/LandingPage'
import GeneratePage from './pages/GeneratePage'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Header/>
   <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/generate" element={<GeneratePage/>}/>
    </Routes>
    </>
  )
}

export default App
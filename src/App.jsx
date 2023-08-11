import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import Home from './componentes/Home/Home'
import Internet from './componentes/Internet/Internet'
import Streaming from './componentes/Streaming/Streaming'
import Combos from './componentes/Combos/Combos'
import Ayuda from './componentes/Ayuda/Ayuda'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/internet' element={<Internet />} />
          <Route path='/streaming' element={<Streaming />} />
          <Route path='/combos' element={<Combos />} />
          <Route path='/ayuda' element={<Ayuda />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
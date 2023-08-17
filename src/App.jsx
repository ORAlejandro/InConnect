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
          <Route path='/internet' element={<Internet
            velocidad1={600}
            velocidad2={800}
            velocidad3={1000}
            precio1={2500}
            precio2={3100}
            precio3={3700}
            tarjetaPromocion='Tarjeta VISA'
            costoInstalacion='Gratis' />} />
          <Route path='/streaming' element={<Streaming />} />
          <Route path='/combos' element={<Combos />} />
          <Route path='/ayuda' element={<Ayuda />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
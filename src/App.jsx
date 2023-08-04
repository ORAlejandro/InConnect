import React from 'react'
import './App.css'
import NavBar from './assets/componentes/NavBar/NavBar'
import PromocionPrincipal from './assets/componentes/PromocionPrincipal/PromocionPrincipal'
import MasBeneficios from './assets/componentes/MasBeneficios/MasBeneficios'

const App = () => {
  return (
    <div>
      <NavBar />
      <PromocionPrincipal />
      <MasBeneficios />
    </div>
  )
}

export default App
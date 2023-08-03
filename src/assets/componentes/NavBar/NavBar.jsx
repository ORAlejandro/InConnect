import './NavBar.css'

const NavBar = () => {
  return (
    <header className='contenedor-principal'>
      <nav className='contenedor-nav'>
        <h1 className='titulo'>InConnect</h1>
        <ul className='contenedor-li'>
          <li className='listado'>Internet</li>
          <li className='listado'>Streaming</li>
          <li className='listado'>Combos</li>
          <li className='listado'>Ayuda</li>
          <li className='listado'>Contactanos</li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
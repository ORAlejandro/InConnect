import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='contenedor-principal'>

      <nav className='contenedor-nav'>

        <NavLink to={'/'}>
          <h1 className='titulo'>InConnect</h1>
        </NavLink>

        <ul className='contenedor-li'>

          <Link to={'/internet'}>
            <li className='listado'>Internet</li>
          </Link>

          <Link to={'/streaming'}>
            <li className='listado'>Streaming</li>
          </Link>

          <Link to={'/combos'}>
            <li className='listado'>Combos</li>
          </Link>

          <Link to={'/ayuda'}>
            <li className='listado'>Ayuda</li>
          </Link>

        </ul>
      </nav>
    </header>
  )
}

export default NavBar
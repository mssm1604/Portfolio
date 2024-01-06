import { Link } from 'react-router-dom'
import './header.css'

export function Header({ position = 'absolute' }) {
  return (
    <header className='header' style={{ position }}>
      <div className='content_wrapper'>
        <div className='brand_wrapper'>
          <Link to='/'>SantiaGo M.</Link>
        </div>

        <nav className='navbar'>
          <Link to='/#projects_section'>Projects</Link>
          <Link to='/about'>About me</Link>
        </nav>

        <div className='mobile_menu_wrapper'>
          <h5 className='menu'>menu</h5>
        </div>
      </div>
    </header>
  )
}

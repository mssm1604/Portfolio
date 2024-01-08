import { Link } from 'react-router-dom'
import './header.css'
import { MobileHeader } from './mobile_header'
import { useState } from 'react'

export function Header({ position = 'absolute' }) {
  const [navVisible, setNavVisible] = useState(false)

  const handleShowMobileNav = () => {
    const elementToShow = document.getElementById('mobile_header')

    const ifVisible = elementToShow.getAttribute('data-visible')

    if (ifVisible === 'false') {
      elementToShow.setAttribute('data-visible', 'true')
      document.body.style.overflow = 'hidden'
      setNavVisible(true)
    } else {
      elementToShow.setAttribute('data-visible', 'false')
      document.body.style.overflow = 'auto'
      setNavVisible(false)
    }
  }

  return (
    <>
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
            <h5 onClick={handleShowMobileNav} className='menu'>
              {navVisible ? 'close' : 'menu'}
            </h5>
          </div>
        </div>
      </header>

      <MobileHeader />
    </>
  )
}

import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import './mobile_header.css'

export function MobileHeader() {
  const mobileHeader = useRef()
  const navigate = useNavigate()

  const handleNavOnClick = e => {
    const navigateTo = e.target.getAttribute('data-navigateto')
    const currentPage = window.location.pathname
    document.body.style.overflow = 'auto'

    if (navigateTo === currentPage) {
      mobileHeader.current.setAttribute('data-visible', false)
    } else {
      navigate(navigateTo)
    }
  }

  return (
    <div
      ref={mobileHeader}
      id='mobile_header'
      className='mobile_header_wrapper'
      data-visible='false'
    >
      <nav className='mobile_nav' onClick={handleNavOnClick}>
        <span data-navigateto='/'>Projects</span>
        <span data-navigateto='/about'>About</span>
      </nav>

      <footer className='mobile_footer'>
        <nav className='mobile_footer_nav'>
          <a href=''>GitHub</a>
          <a href=''>LinkedIn</a>
          <a href=''>Instagram</a>
        </nav>
      </footer>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './mobile_header.css'
import { IndicatorArrow } from '../icons/icons'

export function MobileHeader() {
  const mobileHeader = useRef()
  const navigate = useNavigate()

  const handleNavOnClick = e => {
    const navigateTo = e.target.getAttribute('data-name')
    const currentPage = window.location.pathname
    document.body.style.overflow = 'auto'

    if (navigateTo === currentPage) {
      mobileHeader.current.setAttribute('data-visible', false)
    } else {
      navigate(navigateTo)
    }
  }

  useEffect(() => {
    const currentPage = window.location.pathname
    const navLinks = document.querySelectorAll('.mobile_nav_item')

    navLinks.forEach(element => {
      element.getAttribute('data-name') === currentPage &&
        element.classList.add('active')
    })
  }, [])

  return (
    <div
      ref={mobileHeader}
      id='mobile_header'
      className='mobile_header_wrapper'
      data-visible='false'
    >
      <nav className='mobile_nav' onClick={handleNavOnClick}>
        <button className='mobile_nav_item' data-name='/'>
          <span>
            <IndicatorArrow />
          </span>
          Projects
        </button>

        <button className='mobile_nav_item' data-name='/about'>
          <span>
            <IndicatorArrow />
          </span>
          About
        </button>
      </nav>

      <footer className='mobile_footer'>
        <nav className='mobile_footer_nav'>
          <a href='https://github.com/mssm1604' target='_black'>
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/santiago-monsalve/'
            target='_black'
          >
            LinkedIn
          </a>
          <a href='https://www.instagram.com/santiago_hmz' target='_black'>
            Instagram
          </a>
        </nav>
      </footer>
    </div>
  )
}

import './header.css'

export function Header() {
  return (
    <header className='header'>
      <div className='content_wrapper'>
        <div className='brand_wrapper'>
          <h3>SantiaGo M.</h3>
        </div>

        <nav className='navbar'>
          <a href='#projects_section'>Projects</a>
          <a>About me</a>
        </nav>

        <div className='mobile_menu_wrapper'>
          <h5 className='menu'>menu</h5>
        </div>
      </div>
    </header>
  )
}

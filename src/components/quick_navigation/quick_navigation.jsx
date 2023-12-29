import { NoProjectSelected } from './project_preview'
import './quick_navigation.css'

export function QuickNavigation() {
  return (
    <section className='quick_navigation_wrapper'>
      <header className='navigation_header'>
        <h5 className='nav_header_string'>Quick navigation</h5>
      </header>

      <div className='navigation_body'>
        <nav className='qn_navbar'>
          <ul className='qn_list_items'>
            <li>
              <span></span> AtheShop
            </li>
            <li>
              <span></span>Henry Augustus
            </li>
            <li>
              <span></span>ToroSpanish
            </li>
            <li>
              <span></span>Colombia API
            </li>
          </ul>
        </nav>

        <div className='project_preview_wrapper'>
          <NoProjectSelected />
          <div className='prj_button_wrapper'>
            <button>Go to project</button>
          </div>
        </div>
      </div>
    </section>
  )
}

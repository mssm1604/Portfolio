import { IndicatorArrow } from '../icons/icons'
import { NoProjectSelected } from './project_preview'
import './quick_navigation.css'

export function QuickNavigation() {
  // const handlePClick = () => {
  //   const button = document.getElementById('buttonWrapper')
  //   button.classList.replace('disable', 'active')
  // }

  return (
    <section className='quick_navigation_wrapper'>
      <header className='navigation_header'>
        <h5 className='nav_header_string'>Quick navigation</h5>
      </header>

      <div className='navigation_body'>
        <nav className='qn_navbar'>
          <ul className='qn_list_items'>
            <li>
              <span>
                <IndicatorArrow />
              </span>
              AtheShop
            </li>
            <li>
              <span>
                <IndicatorArrow />
              </span>
              Henry Augustus
            </li>
            <li>
              <span>
                <IndicatorArrow />
              </span>
              ToroSpanish
            </li>
            <li>
              <span>
                <IndicatorArrow />
              </span>
              Colombia API
            </li>
          </ul>
        </nav>

        <div className='project_preview_wrapper'>
          <NoProjectSelected />
          <div id='buttonWrapper' className='prj_button_wrapper disable'>
            <button>Go to project</button>
          </div>
        </div>
      </div>
    </section>
  )
}

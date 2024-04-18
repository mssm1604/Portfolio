import { useState } from 'react'
import { IndicatorArrow } from '../../icons/icons'
import { Slider } from '../slider/slider'
import { NoProjectSelected } from './project_preview'
import { projects } from '../../../constants/projects_const'
import './quick_navigation.css'

const projectUrlImg = { images: [], url: [] }

projects.forEach(({ images: img, url: link }) => {
  projectUrlImg.images.push(img)
  projectUrlImg.url.push(link)
})

export function QuickNavigation() {
  const [selectedElementName, setSelectedElementName] = useState('')

  const elementSelected = document.getElementsByName(selectedElementName)[0]
  elementSelected && elementSelected.classList.add('active')

  const handleMove = e => {
    const imagesFocus = document.getElementById('slider_images_wrapper')
    const elementToFocus = e.target
    const elementName = elementToFocus.getAttribute('name')

    const index = elementToFocus.getAttribute('data-index')
    const moveValue = imagesFocus.offsetHeight * index

    if (index === null || elementName === selectedElementName) return

    imagesFocus.style.transform = `translateY(-${moveValue}px)`
    elementSelected?.classList?.remove('active')
    setSelectedElementName(elementName)
    changeButtonLink({ elementName })
  }

  const changeButtonLink = ({ elementName }) => {
    const button = document.getElementsByName('btn_2project')[0]
    button.setAttribute('href', `#${elementName}`)
  }

  return (
    <section className='quick_navigation_wrapper'>
      <header className='navigation_header'>
        <h5 className='nav_header_string'>Quick navigation</h5>
      </header>

      <div className='navigation_body'>
        <nav className='qn_navbar'>
          <ul onClick={handleMove} className='qn_list_items'>
            <li data-index='1' name='toroSpanish'>
              <span>
                <IndicatorArrow />
              </span>
              ToroSpanish
            </li>

            <li data-index='2' name='henry augustus'>
              <span>
                <IndicatorArrow />
              </span>
              Henry Augustus
            </li>

            <li data-index='3' name='css tools'>
              <span>
                <IndicatorArrow />
              </span>
              Css Tools
            </li>

            <li data-index='4' name='atheshop'>
              <span>
                <IndicatorArrow />
              </span>
              AtheShop
            </li>

            {/* <li data-index='4' name='colombia api'>
              <span>
                <IndicatorArrow />
              </span>
              Colombia API
            </li> */}
          </ul>
        </nav>

        <div className='project_preview_wrapper'>
          <div className='images_focus'>
            <NoProjectSelected />
            <Slider images={projectUrlImg.images} />
          </div>
          <div
            id='buttonWrapper'
            className={`prj_button_wrapper ${
              selectedElementName ? 'active' : 'disable'
            }`}
          >
            <a name='btn_2project' href='/' aria-disabled>
              Go to project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { IndicatorArrow } from '../icons/icons'
import { Slider } from '../slider/slider'
import { NoProjectSelected } from './project_preview'
import { projects } from '../../constants/projects_const'
import './quick_navigation.css'

const projectUrlImg = { images: [], url: [] }
projects.forEach(({ images: img, url: link }) => {
  projectUrlImg.images.push(img)
  projectUrlImg.url.push(link)
})

export function QuickNavigation() {
  const [selectedElementName, setSelectedElementName] = useState('')
  const elementSelected = document.getElementsByName(selectedElementName)[0]
  elementSelected?.classList?.add('active')

  const handleMove = e => {
    const imagesFocus = document.getElementById('slider_images_wrapper')
    const elementToFocus = e.target
    const elementName = elementToFocus.getAttribute('name')
    const index = elementToFocus.getAttribute('data-index')
    const moveValue = 100 / 4

    if (index === null || elementName === selectedElementName) return

    imagesFocus.style.transform = `translateY(-${index * moveValue}%)`
    elementSelected?.classList?.remove('active')
    setSelectedElementName(elementName)
    changeButtonLink({ elementName })
  }

  const changeButtonLink = ({ elementName }) => {
    const [{ url }] = projects.filter(
      ({ name }) => name.toLowerCase() === elementName
    )

    const button = document.getElementsByName('btn_2project')[0]
    button.setAttribute('href', url)
  }

  return (
    <section className='quick_navigation_wrapper'>
      <header className='navigation_header'>
        <h5 className='nav_header_string'>Quick navigation</h5>
      </header>

      <div className='navigation_body'>
        <nav className='qn_navbar'>
          <ul onClick={handleMove} className='qn_list_items'>
            <li data-index='1' name='atheshop'>
              <span>
                <IndicatorArrow />
              </span>
              AtheShop
            </li>
            <li data-index='2' name='henry augustus'>
              <span>
                <IndicatorArrow />
              </span>
              Henry Augustus
            </li>
            <li data-index='3' name='torospanish'>
              <span>
                <IndicatorArrow />
              </span>
              ToroSpanish
            </li>
            <li data-index='4' name='colombia api'>
              <span>
                <IndicatorArrow />
              </span>
              Colombia API
            </li>
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
            <a name='btn_2project' href='' target='_blank'>
              Go to project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

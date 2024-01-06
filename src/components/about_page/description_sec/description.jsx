import { DownArrow } from '../../icons/icons'
import './description.css'

export function DescriptionSection() {
  return (
    <>
      <section className='description_section_wrapper'>
        <div className='background'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='about_info_wrapper'>
          <picture className='img_wrapper'>
            <img
              src='/assets/about_me.jpg'
              alt="Santiago Monsalve's picture."
            />
          </picture>

          <div className='string_wrapper'>
            <p>
              Hey there! My name is Santiago Monsalve and I am from Colombia.{' '}
            </p>
            <p>
              I’ve always liked the technology. In school, this was my favorite
              subjet. However, once I finished, I dedided to study electricity
              and after working for almost{' '}
            </p>
          </div>
        </div>
      </section>

      <div className='pointer_experience_wrapper'>
        <p>Experience below</p>
        <span>
          <DownArrow />
        </span>
      </div>
    </>
  )
}

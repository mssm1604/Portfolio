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
              Hey there! My name is Santiago Monsalve and I am from{' '}
              <span>Colombia</span>. I have experience in fields such as
              electricity.
            </p>

            <p>
              {' '}
              Before becoming a web developer, I worked as an industrial
              electrician, thus acquiring almost two years in this field where I
              learned a lot.
            </p>

            <p>
              I am the person who always gives the best. When I develop
              projects, I put more than 100% to give the best results, which are
              based on good practices and beautiful designs.{' '}
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

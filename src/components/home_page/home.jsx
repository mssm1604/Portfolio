import { FinalSection } from './final_section/final_section'
import { ProjectsSection } from './projects/projects_section'
import './home.css'
import { useEffect } from 'react'
import { Header } from '../header/header'

export function Home() {
  useEffect(() => {
    document.title = 'Santiago Monsalve | Home'
  }, [])

  return (
    <>
      <Header />
      <div className='first_view_wrapper'>
        <section className='background_wrapper'>
          <picture className='background_image'></picture>
        </section>

        <section className='intro_stack'>
          <h2 className='title'>Web developer</h2>
          <div className='short_description'>
            <p className='description_string'>
              I love creating new things and <br />
              web development allows me to <br />
              put my creativity and effort into it.
            </p>
            {/* <p>
            I enjoy the results and customer satisfaction, it is what I
            appreciate most about my job. I also love table tennis.
          </p> */}
          </div>
        </section>
        <section className='name_section'>
          <h1 className='name_string'>
            Santiago <span className='lastname_span'> Monsalve</span>
          </h1>
        </section>
      </div>

      <ProjectsSection />

      <FinalSection />
    </>
  )
}

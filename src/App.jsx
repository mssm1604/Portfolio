import { useState, useEffect } from 'react'
import './App.css'
import { FinalSection } from './components/final_section/final_section'
import { Header } from './components/header/header'
import { ProjectsSection } from './components/projects/projects_section'

function App() {
  const [screenSizes, setScreeSizes] = useState()

  useEffect(() => {
    const windowSize = window.screen
    setScreeSizes(windowSize)
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
      <p>{screenSizes?.availWidth}</p>
      <p>{screenSizes?.width}</p>
      <p>{screenSizes?.availHeight}</p>
      <p>{screenSizes?.height}</p>
    </>
  )
}

export default App

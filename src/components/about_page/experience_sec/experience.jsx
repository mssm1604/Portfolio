import { experience } from '../../../constants/experience'
import { LocalHeader } from '../local_header/local_header'
import { ExperienceItem } from './experience_item'
import './experience.css'

export function ExperienceSection() {
  return (
    <>
      <section className='experience_section_wrapper'>
        <LocalHeader
          sectionName={'Experience'}
          extraInfo={'Company & Tittle'}
        />

        <div className='experience_body'>
          {experience.map(item => (
            <ExperienceItem
              key={item.title}
              duration={item.duration}
              positionDescriptionP1={item.positionDescriptionP1}
              positionDescriptionP2={item.positionDescriptionP2}
              company={item.company}
              title={item.title}
            />
          ))}
        </div>
      </section>
    </>
  )
}

import { frontend, backend, database } from '../../../constants/skills'
import { LocalHeader } from '../local_header/local_header'
import './skills.css'

export function SkillsSection() {
  return (
    <section className='skills_section_wrapper'>
      <LocalHeader sectionName={'Skills'} />

      <div className='skills_section_body'>
        <div className='skills'>
          {' '}
          <h5>Frontend</h5>
          <ul className='skills_list'>
            {frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className='skills'>
          {' '}
          <h5>Backend</h5>
          <ul className='skills_list'>
            {backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className='skills'>
          {' '}
          <h5>Database</h5>
          <ul className='skills_list'>
            {database.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

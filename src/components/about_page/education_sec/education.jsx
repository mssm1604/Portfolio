import { EducationItem } from './education_item'
import './education.css'
import { educationList } from '../../../constants/education'
import { LocalHeader } from '../local_header/local_header'

export function EducationSection() {
  return (
    <section className='education_section_wrapper'>
      <LocalHeader
        sectionName={'Education'}
        extraInfo={'University & concentrations'}
      />

      <div className='education_body'>
        {educationList.map(({ title, university, concentrations, status }) => (
          <EducationItem
            key={title}
            title={title}
            university={university}
            concentrations={concentrations}
            status={status}
          />
        ))}
      </div>
    </section>
  )
}

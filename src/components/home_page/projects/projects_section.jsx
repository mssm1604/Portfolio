import { QuickNavigation } from '../quick_navigation/quick_navigation'
import { ProjectsSummary } from './projects_summary'
import './projects.css'

export function ProjectsSection() {
  return (
    <section id='projects_section' className='projects_section'>
      <h2 className='projects_section_tittle'>Projects</h2>
      <QuickNavigation/>
      <ProjectsSummary />
    </section>
  )
}

import { Project } from './project_template'
import { projects as projectData } from '../../../constants/projects_const'

export function ProjectsSummary() {
  return (
    <section className='projects_summary'>
      <Project projectData={projectData} />
    </section>
  )
}

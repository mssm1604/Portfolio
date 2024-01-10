import { Project } from './project_template'
import { projects as projectData } from '../../../constants/projects_const'

export function ProjectsSummary() {
  return (
    <section className='projects_summary'>
      {projectData.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </section>
  )
}

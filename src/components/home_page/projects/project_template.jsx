export function Project({ project }) {
  return (
    <article id={project.name.toLowerCase()} className='project_card'>
      <div className='info_project_wrapper'>
        <div className='info_abt_project'>
          <h3 className='prj_title'>{project.name}</h3>
          <p className='prj_description'>{project.description}</p>
        </div>
        <a
          href={project.url}
          target='_blank'
          rel='noreferrer'
          className='button_project_card'
        >
          Visit site
        </a>
      </div>

      <section className='images_and_technologies_wrapper'>
        <picture className='image_project_wrapper'>
          <img
            className='image_project'
            src={project.images}
            alt={`Main picture of the project ${project.name}. Here we can see one of the sections of this project`}
          />
        </picture>

        <footer className='used_technologies'>
          <ul>
            {project.usedTechnologies?.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </footer>
      </section>
    </article>
  )
}

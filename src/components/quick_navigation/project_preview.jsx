import './quick_navigation.css'

export function ProjectPreview() {
  return <article></article>
}

export function NoProjectSelected() {
  return (
    <article className='no_project_selected_wrapper'>
      <h2 className='no_prj_string'>Select a project to preview</h2>
    </article>
  )
}

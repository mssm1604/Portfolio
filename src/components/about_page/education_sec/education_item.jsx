import './education.css'

export function EducationItem({ title, university, concentrations, status }) {
  return (
    <article className='ed_item_wrapper'>
      <h5 className='item_title'>{title}</h5>
      <div className='item_content'>
        <span className='university_string'>{university}</span>
        <p className='concentrations_string'>{concentrations}</p>
      </div>
      <div className='status_wrapper'>
        <span className='status_string'>{status}</span>
      </div>
    </article>
  )
}

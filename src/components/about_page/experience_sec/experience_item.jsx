export function ExperienceItem({
  duration,
  positionDescriptionP1,
  positionDescriptionP2,
  company,
  title
}) {
  return (
    <article className='exp_item_wrapper'>
      <div className='position_description_wrapper'>
        <h5 className='duration'>{duration}</h5>
        <p>{positionDescriptionP1}</p>
        {positionDescriptionP2 !== '' && <p>{positionDescriptionP2}</p>}
      </div>
      <div className='company_title'>
        <span className='company'>{company}</span>
        <h5 className='title'>{title}</h5>
      </div>
    </article>
  )
}

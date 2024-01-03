import { LeftArrow, ToTopIcon } from '../icons/icons'
import './conclusion.css'

export function Conclusion() {
  return (
    <section className='conclusion_section'>
      <h2 className='conclusion_section_string'>
        If you got here, do not forget to contact me.
      </h2>

      <div className='contact_me_pointer'>
        <h5 className='contact_me_pointer_string'>Reach out to me</h5>
        <LeftArrow />
      </div>

      <div className='to_top_wrapper'>
        <p>Want to go back to the top? Use the plane to get there.</p>
        <div className='icon_wrapper'>
          <a href='#' name='button_to_top'>
            <ToTopIcon />
          </a>
        </div>
      </div>

      <div className='rectangle'></div>
    </section>
  )
}

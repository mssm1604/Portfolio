import { Footer } from '../../footer/footer'
import { Conclusion } from './conclusion'
import { ContactMe } from './contact_me'

export function FinalSection() {
  return (
    <section className='final_section'>
      <div className='fs_first_row'>
        <ContactMe />
        <Conclusion />
      </div>
      <Footer />
    </section>
  )
}

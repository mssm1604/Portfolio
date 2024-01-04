import './final_section.css'

export function ContactMe() {
  return (
    <section className='contact_me_wrapper'>
      <h3 className='ctm_title'>Contact me</h3>
      <form action=''>
        <div className='input_wrapper'>
          <label className='label' htmlFor='name'>Name</label>
          <input id='name' type='text' className='box' />
        </div>
        <div className='input_wrapper'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='text' className='box' />
        </div>
        <div className='input_wrapper'>
          <label htmlFor='message'>Message</label>
          <textarea className='box textarea_box' id='message' rows='10' />
        </div>
        <button className='form_button' type='submit'>Send</button>
      </form>
    </section>
  )
}

import './final_section.css'

export function ContactMe() {
  return (
    <section className='contact_me_wrapper'>
      <h3 className='ctm_title'>Contact me</h3>
      <form action='https://formsubmit.co/smonsalve386@gmail.com' method='POST'>
        <div className='input_wrapper'>
          <label className='label' htmlFor='name'>
            Name
          </label>
          <input id='name' type='text' className='box' name='name' required />
        </div>
        <div className='input_wrapper'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='text' className='box' name='email' required />
        </div>
        <div className='input_wrapper'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='box textarea_box'
            id='message'
            rows='10'
            name='message'
            required
          />
        </div>
        <button className='form_button' type='submit'>
          Send
        </button>
      </form>
    </section>
  )
}

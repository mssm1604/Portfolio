import { DownArrow } from '../../icons/icons'
import './description.css'

export function DescriptionSection() {
  return (
    <>
      <section className='description_section_wrapper'>
        <div className='background'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='about_info_wrapper'>
          <picture className='img_wrapper'>
            <img
              src='/assets/about_me.jpg'
              alt="Santiago Monsalve's picture."
            />
          </picture>

          <div className='string_wrapper'>
            <p>Hey there!</p>

            <p className='first_paragraph'>
              My name is Santiago, from <span>Medellin, Colombia.</span> I have
              experience in fields such as electricity, video game support,
              and... of course, web develpment. I also love table tennis and a
              good{' '}
              <a
                target='_blank'
                href='https://www.pepesbbq.com/news-item/fast-authentic-salchipapas-recipe/'
              >
                salchipapa
              </a>
              .
            </p>

            <p>
              In my previous jobs I have learned how to work under pressure,
              teamwork and problem solving. I am proud to say that{' '}
              <span>
                I was able to improve the performance of several machines saving
                the company a lot of money
              </span>
              .
            </p>

            <p>
              When developing web projects, I always want to{' '}
              <span>
                {' '}
                make a difference with my designs by prioritizing good practices
                and excellent performance{' '}
              </span>{' '}
              giving a rewarding experience to customers.
            </p>
          </div>
        </div>

        <div></div>
      </section>

      <div className='pointer_experience_wrapper'>
        <p>More below</p>
        <span>
          <DownArrow />
        </span>
      </div>
    </>
  )
}

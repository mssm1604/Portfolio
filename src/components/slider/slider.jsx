import './slider.css'

export function Slider({ images }) {
  return (
    <section id='slider_images_wrapper' className='slider_images_wrapper'>
      {images.map((url, index) => (
        <img key={index} src={url} alt='imagen descriptiva' />
      ))}
    </section>
  )
}

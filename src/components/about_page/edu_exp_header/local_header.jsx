import './local_header.css'

export function LocalHeader({ sectionName, extraInfo }) {
  return (
    <header className='local_sec_header'>
      <h3 className='local_header_h3'>{sectionName}</h3>{' '}
      <span className='local_header_span'>{extraInfo}</span>
    </header>
  )
}

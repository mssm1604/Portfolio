import { Home } from './components/home_page/home'
import { Route, Routes } from 'react-router-dom'
import { About } from './components/about_page/about'
import { ErrorPage } from './error_page'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App

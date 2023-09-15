import { Outlet } from 'react-router-dom'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar/Navbar'
function App() {

  return (
    <div className=' overflow-x-hidden'>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App

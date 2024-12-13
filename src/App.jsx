
import './App.css'
import Navbar from './navbar/navbar'
import Rootmain from './main/rootmain'
import Footer from './navbar/footer/footer'
import About from './navbar/about/about'
import Services from './navbar/services/service'
import Rooms from './navbar/rooms/room'
import Testimonial from './navbar/testimonial/testimonial'
import Blogs from './navbar/blogs/blogs'
import Login from './navbar/book now'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (

     <>
     <Navbar/>
     
    <Routes>
      <Route  path="/" element={<Rootmain />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/Services" element={<Services />} />
      <Route  path="/rooms" element={<Rooms />} />
      <Route  path="/testimonial" element={<Testimonial />} />
      <Route  path="/blogs" element={<Blogs />} />
      <Route path='/booknow'element={<Login/>}/>
    </Routes>

    <Footer/>
     </>
  )
}

export default App;

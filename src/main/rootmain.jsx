import CarouselFadeExample from "../courasul/courausal"
import About from "../navbar/about/about"
import Services from "../navbar/services/service"
import Rooms from "../navbar/rooms/room"
import FadeExample from "../navbar/amenities/amenities"
import Testimonial from "../navbar/testimonial/testimonial"
// import Footer from "../navbar/footer/footer"
function Rootmain(){


    return(
        <>
        <CarouselFadeExample/>
       <About/>
       <Services/>
       <Rooms/>
       <FadeExample/>
      <Testimonial/>
      {/* <Footer/> */}
        </>
    )
}
export default Rootmain;
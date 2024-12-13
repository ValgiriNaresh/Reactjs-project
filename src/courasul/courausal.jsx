import Carousel from 'react-bootstrap/Carousel';
import carou from "./cour.module.css"

function CarouselFadeExample() {
  return (
    <>

<Carousel>
      <Carousel.Item className={carou.class1}>
        <img src={"https://images.lifestyleasia.com/wp-content/uploads/2019/11/22192820/Titlie-Picture-Option-3.jpg"} alt="" style={{ width: "100%", height: "100vh" }}/>
        <Carousel.Caption>
          <h3 className={carou.class}>Deluxe Hotel&Restaurant</h3>
          <h4 className={carou.class2}>Enjoy your <span>Dream</span> Time <br/>With <span>Beatiful</span> Nature And Hotel</h4>
          <p>call Now <span>0123456789</span></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={carou.class1}>
        <img src={'http://www.insplosion.com/blog/wp-content/uploads/2020/12/The-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg'} alt="" style={{ width: "100%", height: "100vh" }}/>
        <Carousel.Caption>
        <h3 className={carou.class}>Deluxe Hotel&Restaurant</h3>
        <h4 className={carou.class2}>Enjoy your <span>Dream</span> Time <br/>With <span>Beatiful</span> Nature And Hotel</h4>
        <p>call Now <span>0123456789</span></p>
    </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={carou.class1}>
        <img src={'https://decor10blog.com/wp-content/uploads/2017/04/stunning-restaurant-interior-design-View06.jpg'} alt="" style={{ width: "100%", height: "100vh" }}/>
        <Carousel.Caption>
        <h3 className={carou.class}>Deluxe Hotel&Restaurant</h3>
        <h4 className={carou.class2}>Enjoy your <span>Dream</span> Time <br/>With <span>Beatiful</span> Nature And Hotel</h4>
        <p>call Now <span>0123456789</span></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  );
}

export default CarouselFadeExample;
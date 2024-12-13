import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import testimoCSS from "./../testimonial/testimonial.module.css"
function Testimonial(){
    return (

        <div className={testimoCSS.testi}>
                    <small>Testimonies</small>
                    <h3>What Our Clients <span>says</span></h3>

        <Carousel data-bs-theme="dark">

          <Carousel.Item>

            <div>
            <img className={testimoCSS.root} src="http://www.areasofmyexpertise.com/wp-content/uploads/2020/01/00924AEA-B1C2-48A5-9B06-89B9008BEE8D.jpg" alt="" style={{width:"30%",height:"30%"}}/>
            <div>
                <h2 className={testimoCSS.root_h2}>Joe Root <span>Maneger</span></h2>
                <p className={testimoCSS.loram_p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ullam libero repudiandae. Exercitationem quos commodi illum explicabo mollitia unde quis ratione corporis! Velit minus voluptas eligendi adipisci perspiciatis, quasi maiores!</p>
            </div>
          </div>
          </Carousel.Item>
          
          <Carousel.Item>

            <div>
            <img className={testimoCSS.root} src="https://anthonygregg.com/wp-content/uploads/2019/04/Depositphotos_198409160_l-2015.jpg" alt="" style={{width:"30%",height:"30%"}}/>
            <div>
                <h2 className={testimoCSS.root_h3}>Brendon Taylor <span>Assistent Manager</span></h2>
                <p className={testimoCSS.loram_p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ullam libero repudiandae. Exercitationem quos commodi illum explicabo mollitia unde quis ratione corporis! Velit minus voluptas eligendi adipisci perspiciatis, quasi maiores!</p>
            </div>
          </div>
          </Carousel.Item>

          <Carousel.Item>
          <div>
            <img className={testimoCSS.root} src="https://thumbs.dreamstime.com/b/young-blond-beautiful-woman-manager-works-her-modern-office-looks-confident-busy-multitasking-work-concept-young-blond-177341481.jpg" alt="" style={{width:"30%",height:"30%"}}/>
            <div>
                <h2 className={testimoCSS.root_h4}>Alisa Perry <span>Sales Manager</span></h2>
                <p className={testimoCSS.loram_p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ullam libero repudiandae. Exercitationem quos commodi illum explicabo mollitia unde quis ratione corporis! Velit minus voluptas eligendi adipisci perspiciatis, quasi maiores!</p>
            </div>
          </div>
          </Carousel.Item>
 
        </Carousel>
        </div>

    )
}
export default Testimonial
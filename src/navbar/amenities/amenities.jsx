// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import animities from "./../amenities/amenities.module.css"

// function FadeExample() {


//   return (
//     <div className={`${animities.animini_wrapper}`}>
//     <h4 className={animities.animi_luxury}>Luxury Amenities</h4>
// <h2 className={animities.animi_our}>Our Best <span>Amenities</span></h2>

// <Carousel fade>
//       <Carousel.Item>
//         <div className={animities.animi_items}>
//         <img
//           src="https://i.pinimg.com/originals/cf/b4/31/cfb431c77c8ded82880473f541d8364a.jpg"
//           alt="Swimming Pool"
//           style={{ width: "100%", height: "80vh", objectFit: "cover" }}/>
//         <Carousel.Caption className={animities.amini_content}>
//           <h2 className={animities.swimm}>Swimming Pool</h2>
//           <p className={animities.ppp}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             eveniet? At exercitationem doloribus molestias eos, atque earum unde
//             delectus tempore! Nobis odit nulla debitis quisquam ut saepe aliquam
//             culpa ipsum!
//           </p>
//           <button style={{fontSize: '20px' }}>Book Now!</button>
//         </Carousel.Caption>
//         </div>
//       </Carousel.Item>

//       <Carousel.Item>
//         <div className={animities.animi_items}>
//         <img
//           src="https://healthandfitnesstravel.com/images/Gym20924a_copy.jpg"
//           alt="Swimming Pool"
//           style={{ width: "100%", height: "80vh", objectFit: "cover" }}/>
//         <Carousel.Caption className={animities.amini_content}>
//           <h2 className={animities.swimm}>GYM and Sports</h2>
//           <p className={animities.ppp}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             eveniet? At exercitationem doloribus molestias eos, atque earum unde
//             delectus tempore! Nobis odit nulla debitis quisquam ut saepe aliquam
//             culpa ipsum!
//           </p>
//           <button style={{fontSize: '16px' }}>Book Now!</button>
//         </Carousel.Caption>
//         </div>
//       </Carousel.Item>

//       <Carousel.Item>
//         <div className={animities.animi_items}>
//         <img
//           src="https://uniquekiosk.com/wp-content/uploads/2020/04/2-4-2-2048x2048.jpg"
//           alt="Swimming Pool"
//           style={{ width: "100%", height: "80vh", objectFit: "cover" }}/>
//         <Carousel.Caption className={animities.amini_content}>
//           <h2 className={animities.swimm}>Restro & Cafe</h2>
//           <p className={animities.ppp}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             eveniet? At exercitationem doloribus molestias eos, atque earum unde
//             delectus tempore! Nobis odit nulla debitis quisquam ut saepe aliquam
//             culpa ipsum!
//           </p>
//           <button style={{fontSize: '16px' }}>Book Now!</button>
//         </Carousel.Caption>
//         </div>
//       </Carousel.Item>
      
//     </Carousel>

//     </div>
//   );
// }

// export default FadeExample;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import animities from "./../amenities/amenities.module.css";

function FadeExample() {
  return (
    <div className={animities.animini_wrapper}>
      <h4 className={animities.animi_luxury}>Luxury Amenities</h4>
      <h2 className={animities.animi_our}>
        Our Best <span>Amenities</span>
      </h2>

      <Carousel fade>
        <Carousel.Item>
          <div className={animities.animi_items}>
            <img
              src="https://i.pinimg.com/originals/cf/b4/31/cfb431c77c8ded82880473f541d8364a.jpg"
              alt="Swimming Pool"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}/>
            <Carousel.Caption className={animities.amini_content}>
            <div>
            <h2 className={animities.swimm}>Swimming Pool</h2>
              <p className={animities.ppp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                eveniet? At exercitationem doloribus molestias eos, atque earum
                unde delectus tempore! Nobis odit nulla debitis quisquam ut
                saepe aliquam culpa ipsum!
              </p>
              <button className={animities.book_button}>Book Now!</button>
            </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={animities.animi_items}>
            <img
              src="https://healthandfitnesstravel.com/images/Gym20924a_copy.jpg"
              alt="Gym and Sports"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
            <Carousel.Caption className={animities.amini_content}>
              <h2 className={animities.swimm}>Gym and Sports</h2>
              <p className={animities.ppp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                eveniet? At exercitationem doloribus molestias eos, atque earum
                unde delectus tempore! Nobis odit nulla debitis quisquam ut
                saepe aliquam culpa ipsum!
              </p>
              <button className={animities.book_button}>Book Now!</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={animities.animi_items}>
            <img
              src="https://uniquekiosk.com/wp-content/uploads/2020/04/2-4-2-2048x2048.jpg"
              alt="Restro & Cafe"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}/>
            <Carousel.Caption className={animities.amini_content}>
              <h2 className={animities.swimm}>Restro & Cafe</h2>
              <p className={animities.ppp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                eveniet? At exercitationem doloribus molestias eos, atque earum
                unde delectus tempore! Nobis odit nulla debitis quisquam ut
                saepe aliquam culpa ipsum!
              </p>
              <button className={animities.book_button}>Book Now!</button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FadeExample;

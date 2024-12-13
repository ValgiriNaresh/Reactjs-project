import React from "react";
import roomscss from "./../rooms/room.module.css";
function Rooms() {
  return (
    <div className={`${roomscss.rooms_container}`}>
      <small className={roomscss.luxury}>Luxury Suites</small>
      <h2 className={roomscss.best}>
        Our Best<span>Rooms</span>
      </h2>

      <div className={roomscss.cards}>
        <div className={roomscss.card_container}>
          <div className={roomscss.card}>
            <div className={roomscss.card_front}>
              <button className={roomscss.button}>Juniour Suite</button>
            </div>

            <div className={roomscss.card_Back}>
              <div className={roomscss.price}>
                <p>$120/N</p>
              </div>

              <div className={roomscss.card_content}>
                <h3>Juniour Suite</h3>
                <p>- Daily Clening</p>
                <p>- Home Services</p>
                <p>- HouseKeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomscss.bookNow}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className={roomscss.card_container}>
          <div className={roomscss.card}>
            <div className={roomscss.card_front2}>
              <button className={roomscss.button1}>Twin room</button>
            </div>

            <div className={roomscss.card_Back2}>
              <div className={roomscss.price1}>
                <p>$120/N</p>
              </div>

              <div className={roomscss.card_content}>
                <h3>Twin room</h3>
                <p>- Daily Clening</p>
                <p>- Home Services</p>
                <p>- HouseKeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomscss.bookNow}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>

      <div className={roomscss.card_container}>
          <div className={roomscss.card}>
            <div className={roomscss.card_front3}>
              <button className={roomscss.button2}>Quad Room</button>
            </div>

            <div className={roomscss.card_Back3}>
              <div className={roomscss.price2}>
                <p>$150/N</p>
              </div>

              <div className={roomscss.card_content}>
                <h3>Quad Room</h3>
                <p>- Daily Clening</p>
                <p>- Home Services</p>
                <p>- HouseKeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomscss.bookNow}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className={roomscss.card_container}>
          <div className={roomscss.card}>
            <div className={roomscss.card_front4}>
              <button className={roomscss.button3}>Deluxe Room</button>
            </div>

            <div className={roomscss.card_Back4}>
              <div className={roomscss.price3}>
                <p>$150/N</p>
              </div>

              <div className={roomscss.card_content}>
                <h3>Deluxe Room</h3>
                <p>- Daily Clening</p>
                <p>- Home Services</p>
                <p>- HouseKeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomscss.bookNow}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>  
      
        <div className={roomscss.card_container}>
          <div className={roomscss.card}>
            <div className={roomscss.card_front5}>
              <button className={roomscss.button4}>Exclusive Room</button>
            </div>

            <div className={roomscss.card_Back5}>
              <div className={roomscss.price4}>
                <p>$220/N</p>
              </div>

              <div className={roomscss.card_content}>
                <h3>Exclusive Room</h3>
                <p>- Daily Clening</p>
                <p>- Home Services</p>
                <p>- HouseKeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomscss.bookNow}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div> 

        <div className={roomscss.card_container}>
          <div className={roomscss.card}>
            <div className={roomscss.card_front6}>
              <button className={roomscss.button5}>Personal Room</button>
            </div>

            <div className={roomscss.card_Back6}>
              <div className={roomscss.price5}>
                <p>$190/N</p>
              </div>

              <div className={roomscss.card_content}>
                <h3>Personal Room</h3>
                <p>- Daily Clening</p>
                <p>- Home Services</p>
                <p>- HouseKeeping</p>
                <p>- Wifi & Parking</p>
              </div>

              <div className={roomscss.bookNow}>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Rooms;

import React from "react";
import Servicescss from "./../services/service.module.css"
function  Services(){
    return(
        <div className={`${Servicescss.Service} section`}>
            <small className="section_heading">Facilities</small>
            <h2 className="section_title">Our Best <span>Services</span></h2>
            <div className={Servicescss.Service_cards}>
                
                <div className={Servicescss.Service_card}>
                {/* <span class="material-symbols-outlined"></span>     */}
                <h3>Basic Fecilities</h3>
                <p>-Reception /Front Desk</p>
                <p>-Room Services</p>
                <p>-House Keeping</p>
                <p>-Wifi & Parking</p>
                </div>

                <div className={Servicescss.Service_card}>
                {/* <span class="material-symbols-outlined"></span>     */}
                <h3>Romm Aminities</h3>
                <p>-Comfortable Bedding</p>
                <p>-Bed Room and Pool</p>
                <p>-TV and AC</p>
                <p>-Bar</p>
                </div>

                <div className={Servicescss.Service_card}>
                <h3>Dining Options</h3>
                <p>-Restarent Cafe</p>
                <p>-Bar & Lounge</p>
                <p>-Cafe & Canteen</p>
                <p>-Room Services</p>
                </div>

                <div className={Servicescss.Service_card}>
                <h3>Special Feautures</h3>
                <p>-Custom Rooms</p>
                <p>-Cricket Ground</p>
                <p>-Gym</p>
                </div>
            </div>
        </div>
        
    )


}
export default Services;
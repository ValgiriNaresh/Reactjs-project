import React from "react";
import h from "./about.module.css"
import aboutImg from './../../assets/about1img.jpg'

function About(){
    return(
        <div className={`${h.about_about}about`}>
            <div className={h.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={h.about_content}>
                <small className={h.delux}>The Deluxe Hotel</small>
                <h2 className={h.excellence}>Where Elegance Meets <span className={h.span}>Excellence</span></h2>
                <p className={h.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quam tempore officia minima, totam cum atque consequatur fuga, numquam delectus dolorum
                      similique earum hic ratione tenetur, id enim est sint odit?</p>

                    <div className={h.card}>
                    <p className={h.p1}>260+ <span style={{fontSize:"small"}}>Awrds Wins</span></p>
                    <p className={h.p2}>260k <span style={{fontSize:"small"}}>Visitors Visit</span></p>
                    <p className={h.p3}>150k+ <span style={{fontSize:"small"}}>Events</span></p>
                    </div>
                
            </div>
        </div>
    )
}

export default About;
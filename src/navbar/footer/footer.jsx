import React from "react";
import footCSS from "./../footer/footer.module.css"

function Footer(){
    return(
        <footer className={footCSS.foooter}>
            <div className={footCSS.footerlinks}>
                <div>
                    <h2>Deluxe</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ab corporis officiis odio omnis beatae dolore ducimus. Magni cupiditate, eligendi vitae impedit perferendis cumque aut magnam qui! Deleniti, excepturi numquam.</p>
                </div>
            </div>
                <div className={footCSS.footerlinks}>
                    <h2>Quick Links</h2>
                    <p>About</p>
                    <p>Contact US</p>
                    <p>Rooms</p>
                    <p>GYM</p>
                    <p>Restarent</p>
                </div>

                <div className={footCSS.footerlinks}>
                    <h2>City Branches</h2>
                    <p>Maxico</p>
                    <p>Bharat</p>
                    <p>Germany</p>
                    <p>Austrelia</p>
                    <p>California</p>
                </div>

                <div className={footCSS.footerlinks}>
                    <h2>Contact</h2>
                    <p>Address : <span>360 Street_Mumbai , India</span></p>
                    <p>Email : <span>ex@gmail.com</span></p>
                    <p>Phone : <span>7845963210</span></p>

                </div>
        </footer>
    )
}
export default Footer;
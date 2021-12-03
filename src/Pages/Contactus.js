import React from 'react';
import '../Styles/Contactus.css';

const Contactus = () => {

    return (
        <div className="contact-in">
        <div className="contact_container">
            <div className="contact_card">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15204.755687700637!2d74.0003081!3d17.6885333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ca48f982a74e045!2z4KS54KWL4KSf4KSyIOCkk-CkriDgpI_gpJXgpY3gpLjgpYfgpJXgpY3gpK_gpYHgpJ_gpL_gpLU!5e0!3m2!1shi!2sin!4v1638422308953!5m2!1shi!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="contact_card">
                <h2 className='contact_h2'>Contact Us</h2>
                <input type="text" className="text field"  placeholder="First Name"/>
                <input type="text" className="text field"  placeholder="Last Name"/>
                <input type="email" className="text field" placeholder="Enter Your Email'Id"/>
                <input type="number" className="text field" placeholder="Enter Your Mobile Number"/>
                <textarea placeholder="Message" name="message" className="field"></textarea>
                <button className="btn_contact">Send</button>
            </div>
        </div>
    </div>
    )
}

export default Contactus;
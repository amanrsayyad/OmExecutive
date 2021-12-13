import React from 'react';
import './Styles/BookMain.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BookMain = (props) => {
    return (
        <div class="aboutUs">
            <Helmet>
                <title>Om Executive</title>
                <meta name='description' content='best hotel in satara to make a buisness trip or vacation more relaxig & affordable' />
                <meta name='keyword' content='hotels ,hotels near me ,holiday inn ,booking ,google hotels ,booking hotel ,comfort suites ,hotel rooms' />
            </Helmet>
            <div class="aboutUs__container">
                <div>
                    <img src={props.image} class="aboutUs__img animate-img" />
                </div>
                <div className="about_card">
                    <h4 class="aboutUs__heading">Hotel Om Executive</h4>
                    <div class="aboutUs__features">
                        <h5 class="aboutUs__feature">
                            {props.roomName}
                        </h5>

                        <h3 className="facilities">Most Popular Facilities :</h3>
                        <ul className="feature">
                            <li><Link><i class="fas fa-parking"></i>Free Parking</Link></li>
                            {/* <li><Link><i class="fas fa-users"></i>Family Rooms</Link></li> */}
                            <li><Link><i class="fas fa-wifi"></i>Free Wifi</Link></li>
                            <li><Link><i class="fas fa-utensils"></i>Restaurant</Link></li>
                            {/* <li><Link><i class="fas fa-spa"></i>Spa & Wellnees Centre</Link></li> */}
                            <li><Link><i class="fas fa-concierge-bell"></i>Room Service</Link></li>
                            <li><Link><i class="fas fa-sink"></i>Clean Bathroom</Link></li>
                            <li><Link><i class="fab fa-envira"></i>Silent and meditation atmosphere</Link></li>
                        </ul>
                        <div className="btn_card">
                            <a href="https://wa.me/918600868600" target="_blank">Check Enquiry</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BookMain;

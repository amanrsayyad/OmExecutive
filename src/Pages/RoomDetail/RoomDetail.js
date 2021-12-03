import React from 'react';
import '../../Styles/RoomDetail.css';
import '../../Styles/BookMain.css';
import caro1 from '../../Assets/images/caro1.JPG';
import caro2 from '../../Assets/images/caro2.JPG';
import caro3 from '../../Assets/images/caro3.JPG';
import caro4 from '../../Assets/images/caro4.JPG';
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";

const Roomdetail = () => {

    return (
        <div class="about" id="about">
            <div class="about__container">
                <div>
                    <Carousel className="">
                        
                        <Carousel.Item>
                            <img className="d-block w-100 caro_img" src={caro1} alt="" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100 caro_img" src={caro2} alt="" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100 caro_img" src={caro3} alt="" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100 caro_img" src={caro4} alt="" />
                        </Carousel.Item>

                    </Carousel>
                </div>

                <div className="detail_div">
                    <p class="topline animate-about">Hotel Om Executive</p>
                    <h1 class="about__heading animate-about">Delux Room</h1>
                    <div class="about__features">
                        <p class="about__feature animate-about">
                            Size <span>19m2</span>
                        </p>
                        <p class="about__feature animate-about">
                            This double room has a tumble dryer, soundproofing and tea/coffee maker.
                        </p>
                        <ul className="feature">
                            <li><Link><i class="fas fa-home"></i>19 m2</Link></li>
                            <li><Link><i class="fas fa-tree"></i>Garden View</Link></li>
                            <li><Link><i class="fas fa-swimmer"></i>Pool View</Link></li>
                            <li><Link><i class="fas fa-swimming-pool"></i>Pool With View</Link></li>
                            <li><Link><i class="fas fa-fan"></i>Air conditioning</Link></li>
                            <li><Link><i class="fas fa-bath"></i>Ensuite Bathroom</Link></li>
                            <li><Link><i class="fas fa-tv"></i>Flat Screen TV</Link></li>
                            <li><Link><i class="fas fa-volume-up"></i>Sound Proffing</Link></li>
                            <li><Link><i class="fas fa-coffee"></i>Coffee Machine</Link></li>
                            <li><Link><i class="fas fa-wifi"></i>Free WiFi</Link></li>
                            <li><Link><i class="fas fa-car"></i>Free Parking</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <h2>View:</h2>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Garden view</Link></li>
                            <li><Link><i class="fas fa-check"></i>Pool view</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <h2>In your private bathroom:</h2>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Free toiletries</Link></li>
                            <li><Link><i class="fas fa-check"></i>Slippers</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link className="link"><i class="fas fa-check"></i>Shower</Link></li>
                            <li><Link><i class="fas fa-check"></i>Hairdryer</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link className="link"><i class="fas fa-check"></i>Bathrobe</Link></li>
                            <li><Link><i class="fas fa-check"></i>Towels/sheets (extra fee)</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link className="link"><i class="fas fa-check"></i>Toilet</Link></li>
                            <li><Link><i class="fas fa-check"></i>Toilet paper</Link></li>
                        </ul>

                        {/*--------------------------- Facilities  ----------------------------*/}

                        <ul className="feature_sec">
                            <h2>Facilities:</h2>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Entire unit located on ground floor</Link></li>
                            <li><Link><i class="fas fa-check"></i>Refrigerator</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Entire unit wheelchair accessible</Link></li>
                            <li><Link><i class="fas fa-check"></i>Coffee machine</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Entire unit wheelchair accessible</Link></li>
                            <li><Link><i class="fas fa-check"></i>Electric kettle</Link></li>
                        </ul>
                        {/* <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Linen</Link></li>
                            <li><Link><i class="fas fa-check"></i>Sofa</Link></li>
                        </ul> */}
                        {/* <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Dressing room</Link></li>
                            <li><Link><i class="fas fa-check"></i>Desk</Link></li>
                        </ul> */}
                        {/* <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Dressing room</Link></li>
                            <li><Link><i class="fas fa-check"></i>Desk</Link></li>
                        </ul> */}
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Wardrobe or closet</Link></li>
                            <li><Link><i class="fas fa-check"></i>Seating Area</Link></li>
                        </ul>
                        {/* <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Hand sanitiser</Link></li>
                            <li><Link><i class="fas fa-check"></i>TV</Link></li>
                        </ul> */}
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Tea/Coffee maker</Link></li>
                            <li><Link><i class="fas fa-check"></i>Flat-screen TV</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Air conditioning</Link></li>
                            <li><Link><i class="fas fa-check"></i>Cable channels</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Safety deposit box</Link></li>
                            <li><Link><i class="fas fa-check"></i>Outdoor dining area</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Tile/marble floor</Link></li>
                            <li><Link><i class="fas fa-check"></i>Air purifiers</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Soundproofing</Link></li>
                            <li><Link><i class="fas fa-check"></i>Socket near the bed</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Private entrance</Link></li>
                            <li><Link><i class="fas fa-check"></i>Clothes rack</Link></li>
                        </ul>
                        {/* <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Mosquito net</Link></li>
                            <li><Link><i class="fas fa-check"></i>Clothes rack</Link></li>
                        </ul>
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Ironing facilities</Link></li>
                            <li><Link><i class="fas fa-check"></i>Wake-up service</Link></li>
                        </ul> */}
                        <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Iron</Link></li>
                            <li><Link><i class="fas fa-check"></i>Single-room air conditioning for guest accommodation</Link></li>
                        </ul>
                        {/* <ul className="feature_sec">
                            <li><Link><i class="fas fa-check"></i>Fan</Link></li>
                        </ul> */}

                        {/* <p class="about__feature animate-about">
                            In your private bathroom:
                        </p> */}
                        <p class="about__feature animate-about">
                            Smoking: ​Smoking permitted
                        </p>
                        <p class="about__feature animate-about">
                            Parking :- Free private parking is possible on site (reservation is not needed).</p>
                        <div className="book_btn">
                            <a href="https://wa.me/" target="_blank">Check Enquiry</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Roomdetail;
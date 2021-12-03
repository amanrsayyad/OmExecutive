import React from 'react';
import './Caro.css';
import Carousel from "react-bootstrap/Carousel";
import caro1 from '../../Assets/images/caro1.JPG';
import caro2 from '../../Assets/images/caro2.JPG';
import caro3 from '../../Assets/images/caro3.JPG';
import caro4 from '../../Assets/images/caro4.JPG';
import caro5 from '../../Assets/images/caro5.JPG';

const Caro = () => {
    return (
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
                <Carousel.Item>
                    <img className="d-block w-100 caro_img" src={caro5} alt="" />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Caro;
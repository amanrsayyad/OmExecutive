import React from 'react';
import BookMain from './BookMain';
import caro4 from '../Assets/images/caro4.JPG';


const Resto = () => {
    return (
        <div>
            <BookMain image={caro4} roomName="Restaurant" links="/Roomdetail"/>
        </div>
    )
}

export default Resto

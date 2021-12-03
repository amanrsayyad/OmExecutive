import React from 'react';
import BookMain from './BookMain';
import caro1 from '../Assets/images/caro1.JPG';
import caro2 from '../Assets/images/caro2.JPG';
import caro3 from '../Assets/images/caro3.JPG';
import caro4 from '../Assets/images/caro4.JPG';

const BookNow = () => {
    return (
        <div>
            <BookMain image={caro1} roomName="Deluxe Room" size="Size 19m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={caro2} roomName="Superior King Room" size="Size 21m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={caro4} roomName="Superior Queen Room" size="Size 21m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={caro3} roomName="Executive Suite" size="Size 33m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain  image={caro4} roomName="Queen Room" size="Size 27m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain  image={caro4} roomName="King Room" size="Size 27m2" bed="1 Single Bed" links="/Roomdetail"/>
        </div>
    )
}

export default BookNow;
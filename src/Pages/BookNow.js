import React from 'react';
import BookMain from './BookMain';
import acClassic from '../Assets/room/acClassic.JPG';
import executive from '../Assets/room/executive.JPG';
import executiveAc from '../Assets/room/executiveAc.JPG';
import family from '../Assets/room/family.JPG';
import premium from '../Assets/room/premium.JPG';
import premiumDelux from '../Assets/room/premiumDelux.JPG';
import royalAc from '../Assets/room/royalAc.JPG';

const BookNow = () => {
    return (
        <div>
            <BookMain image={acClassic} roomName="Ac Classic" size="Size 19m2" bed="1 Large Double Bed"/>
            <BookMain image={executive} roomName="Executive" size="Size 21m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={executiveAc} roomName="Executive Ac" size="Size 21m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={family} roomName="Family" size="Size 33m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={premium} roomName="Premium" size="Size 27m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={premiumDelux} roomName="Premium Delux" size="Size 27m2" bed="1 Single Bed" links="/Roomdetail"/>
            <BookMain image={royalAc} roomName="Royal Ac" size="Size 27m2" bed="1 Single Bed" links="/Roomdetail"/>
        </div>
    )
}

export default BookNow;
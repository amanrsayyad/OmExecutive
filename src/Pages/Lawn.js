import React from 'react';
import BookMain from './BookMain';
import gallery2 from '../Assets/galleryImg/gallery2.JPG';

const Lawn = () => {
    return (
        <div>
            <BookMain image={gallery2} roomName="Lawns" links="/Roomdetail"/>      
        </div>
    )
}

export default Lawn;

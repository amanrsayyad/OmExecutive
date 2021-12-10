import React from 'react';
import BookMain from './BookMain';
import gallery8 from '../Assets/galleryImg/gallery8.jpg';

const Hall = () => {
    return (
        <div>
            <BookMain image={gallery8} roomName="Multipurpose Hall" links="/Roomdetail"/>      
        </div>
    )
}

export default Hall;

import React from 'react';
import Caro from '../Component/Caro/Caro';
import Contactus from './Contactus';
import Gallery from './Gallery';
import Review from '../Component/Review/Review';

const Home = () => {
    return (
        <div>
            <Caro />
            <Gallery />
            <Review />
            <Contactus />
        </div>
    )
}

export default Home;

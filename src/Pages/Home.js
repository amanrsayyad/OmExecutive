import React from 'react';
import Caro from '../Component/Caro/Caro';
import Gallery from './Gallery';
import Review from '../Component/Review/Review';
import Account from '../Component/Account/Account';

const Home = () => {
    return (
        <div>
            <Caro />
            <Gallery />
            <Review />
            <Account />
        </div>
    )
}

export default Home;

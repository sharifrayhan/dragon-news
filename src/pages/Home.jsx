import React from 'react';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import Leftbox from '../components/Leftbox';
import Middlebox from '../components/Middlebox';
import Rightbox from '../shared/Rightbox';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Navbar></Navbar>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <Leftbox></Leftbox>
                </div>
                <div className=' col-span-2'>
                    <Middlebox></Middlebox>
                </div>
                <div>
                    <Rightbox></Rightbox>
                </div>
            </div>
        </div>
    );
};

export default Home;
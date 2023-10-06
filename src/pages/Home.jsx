import React from 'react';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import Leftbox from '../components/Leftbox';
import Middlebox from '../components/Middlebox';
import Rightbox from '../shared/Rightbox';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   
const handleNewsCategoryinMiddlebox = () =>{
    Middlebox.localFunction()
}
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Banner></Banner>
            <Navbar></Navbar>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <Leftbox handleNewsCategoryinMiddlebox={handleNewsCategoryinMiddlebox}></Leftbox>
                </div>
                <div className=' col-span-2'>
                    <Middlebox ></Middlebox>
                </div>
                <div>
                    <Rightbox></Rightbox>
                </div>
            </div>
        </div>
    );
};

export default Home;
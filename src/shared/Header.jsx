import React from 'react';
import Datetime from '../components/Datetime';

const Header = () => {
    return (
       <center className=' mt-3'>
         <div className=' '>
            <img src='https://i.ibb.co/tJvrKZv/logo-dn.png' alt="" />
            <h1 className=' text-[#706F6F]'>Journalism Without Fear or Favour</h1>
            <div className=' font-medium '>
            <Datetime ></Datetime>
            </div>
        </div>
       </center>
    );
};

export default Header;
import React from 'react';
import {  Link } from "react-router-dom";

const Leftbox = () => {
    return (
        <div>
             <div className=' mb-5'>
            <h1 className=' mb-3 font-bold text-lg'>All Category</h1>
            <Link><button className='flex items-center gap-1 px-12 py-2  w-[270px] hover:btn focus:btn'>National News</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px] hover:btn focus:btn'>Breaking News</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px] hover:btn focus:btn'>Regular News</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px]  hover:btn focus:btn '>International News</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px] hover:btn focus:btn '>Sports</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px] hover:btn focus:btn '>Entertainment</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px] hover:btn focus:btn'>Culture</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px] hover:btn focus:btn'>Arts</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2  w-[270px] hover:btn focus:btn'>All News</button></Link>
        </div>

        <div>
            <div className='mb-5'>
                <img className='mb-2' src="https://i.ibb.co/zFVFSRS/1.png" alt="" />
                <h1 className='font-bold text-lg mb-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className='flex gap-3'>
                    <p className='font-bold text-md text-[#403F3F]'>Sports</p>
                    <div className='flex items-center  gap-2'>
                        <img className="w-4  avatar"  src="https://i.ibb.co/rFWy3S4/calendar-icon.png" alt="" />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <img className='mb-2' src="https://i.ibb.co/VM1fj94/2.png" alt="" />
                <h1 className='font-bold text-lg mb-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className='flex gap-3'>
                    <p className='font-bold text-md text-[#403F3F]'>Sports</p>
                    <div className='flex items-center  gap-2'>
                        <img className="w-4  avatar"  src="https://i.ibb.co/rFWy3S4/calendar-icon.png" alt="" />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>

            <div>
                <img className='mb-2' src="https://i.ibb.co/jhw3T6y/3.png" alt="" />
                <h1 className='font-bold text-lg mb-2'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className='flex gap-3'>
                    <p className='font-bold text-md text-[#403F3F]'>Sports</p>
                    <div className='flex items-center  gap-2'>
                        <img className="w-4  avatar"  src="https://i.ibb.co/rFWy3S4/calendar-icon.png" alt="" />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Leftbox;
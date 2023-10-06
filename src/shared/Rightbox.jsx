import React, { useContext } from 'react';
import {  Link } from "react-router-dom";
import { AuthContext } from '../context/context';



const Rightbox = () => {

    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=>{
            console.log(result.user);
           

        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
    <div >
        <div className=' mb-5'>
            <h1 className=' mb-3 font-bold text-lg'>Login with</h1>
            <Link><button onClick={handleGoogleSignIn} className='flex mb-2 items-center gap-1 rounded-md px-12 py-2 w-[270px] border-[1px] border-black'><img className="w-5 rounded-full avatar" src="https://i.ibb.co/wMJtbrm/google-icon.png" alt="" />Login with Google</button></Link>
            <Link><button className='flex items-center gap-1 rounded-md px-12 py-2 border-[1px] w-[270px] border-black'><img className="w-5 rounded-full avatar" src="https://i.ibb.co/ykq1q6D/github-circle-icon.png" alt="" />Login with Github</button></Link>
        </div>

        <div className=' mb-5'>
            <h1 className=' mb-3 font-bold text-lg'>Find Us On</h1>
            <Link><button className='flex items-center gap-1 rounded-t-md px-12 py-2 border-[0.5px] w-[270px]'><img className="w-5 rounded-full avatar" src="https://i.ibb.co/nz5QPSH/fb-circle-icon.png" alt="" />Facebook</button></Link>
            <Link><button className='flex items-center gap-1  px-12 py-2 border-[0.5px] w-[270px] '><img className="w-5 rounded-full avatar" src="https://i.ibb.co/jDvqn9C/twitter-square-icon.png" alt="" />Twitter</button></Link>
            <Link><button className='flex items-center gap-1 rounded-b-md px-12 py-2 border-[0.5px] w-[270px]'><img className="w-5 rounded-full avatar" src="https://i.ibb.co/30Y4Lxd/instagram-circle-icon.png" alt="" />Instagram</button></Link>
        </div>

        <div className='bg-[#F3F3F3] p-3 mb-5'>
            <h1 className=' mb-3 font-bold text-lg '>Q-Zone</h1>
            <img src="https://i.ibb.co/tZxd8hR/qZone1.png" alt="" />
            <img src="https://i.ibb.co/S00xpSH/qZone2.png" alt="" />
            <img src="https://i.ibb.co/JzSFx3H/qZone3.png" alt="" />
        </div>

        <div className=' p-10 text-center bg-[url(https://i.ibb.co/wd1N1Kj/bg.png)] '>
            <h1 className=' text-white font-bold text-2xl mb-6'>Create an Amazing Newspaper</h1>
            <p className=' text-white mb-6'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className=" bg-[#D72050] font-medium text-white px-4 py-1">Learn More</button>
        </div>
    </div>
    );
};

export default Rightbox;
import Navbar from "../shared/Navbar";
import {  Link } from "react-router-dom";


const Login = () => {
    return (
        // <center className=" ">
        <div className="  max-h-auto   bg-white md:bg-[#F3F3F3] lg:bg-[#F3F3F3] p-1">
            <div className="max-w-6xl mx-auto"><Navbar></Navbar></div>
            <div className="mx-auto  mb-9  w-[570px] h-[690px] bg-white p-12">
        <center className=" my-3"><h1 className=" text-2xl font-bold">Register your account</h1></center>
        <hr className=" my-3" />
        <form className="flex flex-col gap-4">
        <div>
            <h1 className=" mb-2 font-semibold" >Your Name</h1>
            <input className=" bg-[#F3F3F3] w-full py-3 px-3" type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
        <div>
            <h1 className=" mb-2 font-semibold" >Photo URL</h1>
            <input className=" bg-[#F3F3F3] w-full py-3 px-3" type="text" id="photo-url" name="photo-url" placeholder="Enter your photo url" />
          </div>
          <div>
            <h1 className=" mb-2 font-semibold" >Email</h1>
            <input className=" bg-[#F3F3F3] w-full py-3 px-3" type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <h1 className=" mb-2 font-semibold">Password</h1>
            <input className=" bg-[#F3F3F3] w-full py-3 px-3" type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" /> <p>Accept Term & Conditions</p>
          </div>
          <button className=" text-white py-3 bg-[#403F3F]" type="submit">Login</button>
        </form>
        <center><p className=" mt-4">Dont have an account? <Link className=" text-red-600" to="./Register">Register</Link> </p></center>
      </div>
        </div>
        // </center>
    );
};

export default Login;

// flex flex-col gap-2
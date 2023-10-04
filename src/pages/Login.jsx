import Navbar from "../shared/Navbar";
import {  Link } from "react-router-dom";


const Login = () => {
    return (
        // <center className=" ">
        <div className=" h-screen max-h-full max-width-full w-screen bg-white md:bg-[#F3F3F3] lg:bg-[#F3F3F3] p-1">
            <div className="max-w-6xl mx-auto"><Navbar></Navbar></div>
            <div className="mx-auto mt-12 w-[570px] h-[450px] bg-white p-12">
        <center className=" my-5"><h1 className=" text-2xl font-bold">Login To Your Account</h1></center>
        <hr className=" my-3" />
        <form className="flex flex-col gap-4">
          <div>
            <h1 className=" mb-2 font-semibold" >Email</h1>
            <input className=" bg-[#F3F3F3] w-full py-3 px-3" type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <h1 className=" mb-2 font-semibold">Password</h1>
            <input className=" bg-[#F3F3F3] w-full py-3 px-3" type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button className=" text-white py-3 bg-[#403F3F]" type="submit">Login</button>
        </form>
        <center><p className=" mt-4">Dont have an account? <Link className=" text-red-600" to="/Register">Register</Link> </p></center>
      </div>
        </div>
        // </center>
    );
};

export default Login;

// flex flex-col gap-2
import React from 'react';
import { Outlet } from 'react-router-dom';

const Rootpage = () => {
    return (
        <div className=' max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Rootpage;
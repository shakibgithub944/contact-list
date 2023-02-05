import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = () => {
    return (
        <div className='w-screen '>
            <Outlet></Outlet>
        </div>
    );
};

export default Content;
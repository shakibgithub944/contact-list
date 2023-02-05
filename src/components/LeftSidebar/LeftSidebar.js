import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame 1.png'

const LeftSidebar = () => {
    return (
        <div className='w-[200px] h-screen bg-[#111D2F]'>
            <ul className="w-full rounded-box text-white h-full">
                 
                <div className='flex justify-center py-3'>
                <Link to={'/contact'}><img className="" src={logo} alt='' /></Link>
                </div>

                <Link to={'/contact'}><li className="hover-bordered p-4 mt-48">Contact</li></Link>
                <Link to={'/massege'}><li className="hover-bordered px-4">Massege</li></Link>

            </ul>
        </div>
    );
};

export default LeftSidebar;
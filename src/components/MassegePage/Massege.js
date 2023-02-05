import React from 'react';
import leftArrow from '../../assets/leftArrow.png'

const Massege = () => {
    return (
        <div className='flex justify-center items-center border-b-2'>
            <div className='pl-3'>
                <img src={leftArrow} alt=''/>
            </div>
            <div className="navbar">
                <a href='/#' className="text-xl font-bold">Masseges</a>
            </div>
        </div>
    );
};

export default Massege;
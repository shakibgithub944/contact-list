import React from 'react';
import leftArrow from '../../assets/leftArrow.png'

const Contact = () => {
    return (
        <>
            <div className='flex justify-center items-center border-b-2'>
                <div className='pl-3'>
                    <img src={leftArrow} alt='' />
                </div>
                <div className="navbar">
                    <a href='/#' className="text-xl font-bold">Contacts</a>
                </div>
            </div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Rajesh Roy</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Contact;
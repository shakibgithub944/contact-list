import React from 'react';
import Content from './Content/Content';
import LeftSidebar from './LeftSidebar/LeftSidebar';

const Main = () => {
    return (
        <div className='flex'>
            <LeftSidebar />
            <Content />
        </div>
    );
};

export default Main;
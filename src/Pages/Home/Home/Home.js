import React from 'react';
import LeftContent from '../LeftContent/LeftContent';
import MiddleContent from '../MiddleContent/MiddleContent';
import RightContent from '../RightContent/RightContent';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <div style={{width:"25%"}}><LeftContent></LeftContent></div>
            <div style={{width:"50%"}}><MiddleContent></MiddleContent></div>
            <div style={{width:"25%"}}><RightContent></RightContent></div>
        </div>
    );
};

export default Home;
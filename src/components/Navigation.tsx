import React from 'react';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-mg bg-gray-500 text-white'>

            <h3 className='font-bold'>Github Search</h3>
            <span>
                 <NavLink className='mr-2' to={'/homePage'}>Home</NavLink>
                <NavLink to={'/favouritePage'}>Favourite</NavLink>
            </span>
        </nav>
    );
};
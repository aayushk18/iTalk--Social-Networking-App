import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Friends from './Friends'
import Photos from './Photos'
import Footer from '../../footer/Footer'
import Videos from './Videos'



const About = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='w-full bg-white p-5 rounded-lg flex-row  flex '>
                <div className='w-1/4 border-r-4 border-gray-300 flex flex-col gap-5 font-semibold text-gray-500'>
                    <div className='text-xl text-black'> About</div>

                    <NavLink to={'overview'} className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Overview</NavLink>
                    <NavLink to={'work'} className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Work</NavLink>
                    <NavLink to={'education'} className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Education</NavLink>
                    <NavLink to={'address'} className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Living place</NavLink>
                    <NavLink to={'basic_info'} className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Contact and Basic info</NavLink>



                </div>
                <div className='mx-10'>
                    <Outlet />

                </div>
            </div>


            <Friends />
            <Photos />
            <Videos />
            <Footer />



        </div>
    )
}

export default About
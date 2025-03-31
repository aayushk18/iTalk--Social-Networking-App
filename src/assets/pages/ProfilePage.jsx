import React from 'react'
import { NavLink, Outlet, Route, Routes, useOutletContext } from 'react-router-dom'
import Posts from '../components/other/profile/Posts'

const ProfilePage = () => {

    const users = useOutletContext()
    return (
        <div className='w-screen   '>
            {/* -------------Profile Area ---------------------------- */}

            <div className='mx-10 justify-items-center'>
                <div className='  bg-white  w-full px-10 rounded-b-md '>

                    <img src='https://i.abcnewsfe.com/a/fd751005-a167-478b-bba2-ccaf61e26bf6/iron-man-rdjr-1-ht-thg-231204_1701712078177_hpMain_16x9.jpg?w=992' className='w-full aspect-5/2 bg-gray-500' />


                    <div className=' flex flex-row justify-between w-full px-10 h-30 '>
                        <div>
                            <div className='relative'>
                                <div ></div>
                                <img src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png" className='absolute bg-fuchsia-300 aspect-square border-5 border-white shadow-sm rounded-full h-30 w-30 -translate-y-20' alt="Example" />
                            </div>
                            <div className='ml-45 text-4xl m-3'>{users.FirstName + ' ' + users.LastName}</div>
                        </div>
                        <div className=' flex flex-row '>
                            <button className='m-4 p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-sm h-fit' >Edit profile</button>
                            <button className='m-4 p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-sm h-fit' ><i class='uil uil-ellipsis-v'></i>
                                <div className='hidden'>
                                    <div className=''>
                                        <li>People you know</li>
                                        <li>See more</li>
                                    </div>
                                    <div>
                                        This div contain all the suggestion
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>



                <div className='flex flex-row w-full rounded-md gap-5  p-5 h-15 my-2 bg-white  text-xl'>
                    <NavLink to={'posts'} className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Post</NavLink>
                    <NavLink to={'about'} className={({ isActive }) => isActive ? 'text-blue-400' : ''}>About</NavLink>
                    <NavLink to={'friends'} className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Friends</NavLink>
                    <NavLink to={'photos'} className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Photos</NavLink>
                    <NavLink to={'videos'} className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Videos</NavLink>
                </div>
            </div>

            <div className='m-10 '>
                <Outlet />
            </div>


        </div>
    )
}

export default ProfilePage
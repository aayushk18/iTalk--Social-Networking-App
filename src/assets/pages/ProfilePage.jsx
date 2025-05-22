import React, { useRef, useState } from 'react'
import { NavLink, Outlet, useOutletContext } from 'react-router-dom'

import Posts from '../components/other/profile/Posts'
import Work from '../components/other/about/Work'
import Education from '../components/other/about/Education'
import Address from '../components/other/about/Address'
import BasicInfo from '../components/other/about/BasicInfo'

const ProfilePage = () => {


    const editProfileRef = useRef(null);
    const [editIndex, setEditIndex] = useState(0)
    const [dispEditProfile, setDispEditProfile] = useState(false)
    const editProfilehandler = () => {

        // editProfileRef.current.focus()

        if (!dispEditProfile) {

            editProfileRef.current.style.display = 'block'
        } else {
            editProfileRef.current.style.display = 'none'
        }
        setDispEditProfile(!dispEditProfile)

    }
    const users = useOutletContext()

    return (
        <div className='w-full'>
            {/* -------- Profile Cover Area -------- */}
            <div className='mx-auto max-w-screen-xl'>
                <div className='bg-white w-full rounded-b-md'>

                    {/* Cover Image */}
                    <img
                        src='https://i.abcnewsfe.com/a/fd751005-a167-478b-bba2-ccaf61e26bf6/iron-man-rdjr-1-ht-thg-231204_1701712078177_hpMain_16x9.jpg?w=992'
                        className='w-full aspect-[5/2] object-cover bg-gray-500'
                        alt='Cover'
                    />

                    {/* Profile Info & Buttons */}
                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 py-4 gap-4'>

                        {/* Profile Image and Name */}
                        <div className='relative'>
                            <img
                                src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png"
                                className='absolute border-4 border-white shadow-md rounded-full h-28 w-28 sm:h-32 sm:w-32 -top-16 left-4 object-cover'
                                alt='Profile'
                            />
                            <div className='ml-36 sm:ml-40 mt-8 text-2xl sm:text-3xl font-semibold'>
                                {users.FirstName + ' ' + users.LastName}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex flex-wrap gap-3 ml-36 lg:ml-0'>
                            <button onClick={editProfilehandler} className='bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-sm'>
                                Edit Profile
                            </button>

                            <div ref={editProfileRef} className='w-full hidden h-full  fixed left-0 top-10 sm:top-3  z-40  bg-[rgb(255,255,255,0.6)]'>
                                <div className='md:m-10 md:mx-20 sm:m-4 sm:mx-4 shadow-xl  rounded-md shadow-gray-500 bg-white'>
                                    <div className='py-15 md:p-10 sm:m-4 font-bold text-4xl'>Edit Profile</div>


                                    <div className='justify-items-start h-120 overflow-scroll md:mx-10 sm:mx-4 '>




                                        {editIndex == 1 ? <div className='flex w-full flex-row justify-between'>
                                            <Work />
                                            <span className='text-blue-500 cursor-pointer text-2xl m-10 font-semibold'>Edit</span>
                                        </div> :
                                            (editIndex == 2 ? <div className='flex w-full flex-row justify-between'>
                                                <Education />
                                                <span className='text-blue-500 cursor-pointer text-2xl m-10 font-semibold'>Edit</span>
                                            </div> :
                                                (editIndex == 3 ? <div className='flex w-full flex-row justify-between'>
                                                    <Address />
                                                    <span className='text-blue-500 cursor-pointer text-2xl m-10 font-semibold'>Edit</span>
                                                </div> :
                                                    <div className='flex w-full flex-row justify-between'>
                                                        <BasicInfo />
                                                        <span className='text-blue-500 cursor-pointer text-2xl m-10 font-semibold'>Edit</span>
                                                    </div>))}




                                    </div>
                                    <div className='flex flex-row w-full text-white justify-between p-5 '>
                                        <button onClick={editProfilehandler} className=' md:mx-10 sm:mx-4 rounded-sm bg-blue-500 text-xl p-2 hover:bg-blue-600 '>Close</button>


                                        <div className=' flex flex-row gap-5  md:mx-10 sm:mx-4 '>
                                            {editIndex >= 1 ? <button onClick={() => { if (editIndex >= 1) { setEditIndex(editIndex - 1) } }} className='  rounded-sm bg-blue-500 text-xl p-2 hover:bg-blue-600 '>Back</button> : ''}
                                            {editIndex < 3 ? <button onClick={() => { setEditIndex(editIndex + 1) }} className='  rounded-sm bg-blue-500 text-xl p-2 hover:bg-blue-600 '>Next</button> :
                                                <button className='  rounded-sm bg-blue-500 text-xl p-2 hover:bg-blue-600 '>Submit</button>

                                            }

                                        </div>
                                    </div>

                                </div>
                            </div>





                            <button className='bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-sm'>
                                <i className='uil uil-ellipsis-v'></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className='bg-white text-lg sm:text-xl flex flex-wrap sm:flex-row gap-4 p-4 rounded-md shadow-sm mt-5'>
                    <NavLink to='posts' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}>
                        Post
                    </NavLink>
                    <NavLink to='about' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}>
                        About
                    </NavLink>
                    <NavLink to='friends' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}>
                        Friends
                    </NavLink>
                    <NavLink to='photos' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}>
                        Photos
                    </NavLink>
                    <NavLink to='videos' className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'text-gray-600'}>
                        Videos
                    </NavLink>
                </div>

                {/* Outlet for sub-pages */}
                <div className='p-4 sm:p-6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

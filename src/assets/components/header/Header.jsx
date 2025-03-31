import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MessageBox from '../header/MessageBox'
import NotificationBox from '../header/NotificationBox'
import RequestBox from '../header/RequestBox'
import { useState } from 'react'

const Header = ({ users }) => {
    const [disp, setDisp] = useState(false)
    console.log(users);




    const dispValue = (val) => {
        const ele = document.getElementById(val)

        if (disp === false) {
            ele.style.display = 'block'
            setDisp(true)
        } else {
            ele.style.display = 'none'
            setDisp(false)
        }

    }


    return (
        <>
            <div className=' fixed bg-white flex flex-row w-full p-2 justify-between items-center text-2xl shadow-xs shadow-gray-500 h-16 z-50'>
                <div className='font-bold'>
                    <NavLink className='text-4xl ' to='/'><i class="uil uil-apple"> </i></NavLink>
                    <Link to='/'>iTalk</Link>
                </div>


                <form className='gap-5 flex flex-row'>
                    <input required type="search" name="" id="" placeholder='Search Here' className=' bg-gray-300 w-100 pl-5 p-2 rounded-full text-lg' />
                    <button type="submit" className=' bg-gray-300  aspect-square p-2 rounded-full text-gray-500 items-center text-center '><i class="uil uil-search-alt"></i></button>

                </form>


                <div className='flex flex-row gap-5 align-middle p-1'>


                    <div className='group cursor-pointer text-3xl' id='request' >
                        <div>
                            <i class="uil uil-users-alt"></i>
                        </div>
                        <div className='absolute hidden group-hover:block right-2' >
                            <RequestBox users={users} />
                        </div>
                    </div>


                    <div className=' group cursor-pointer text-3xl'>
                        <div>

                            <i class="uil uil-comment-alt"></i>
                        </div>
                        <div className='absolute hidden group-hover:block right-2'>
                            <MessageBox users={users} />
                        </div>
                    </div>


                    <div className=' group cursor-pointer text-3xl '>
                        <div>
                            <i class="uil uil-bell"></i>
                        </div>
                        <div className='absolute hidden group-hover:block right-2'>
                            <NotificationBox users={users} />
                        </div>
                    </div>
                    <div>
                        <NavLink className={({ isActive }) => isActive ? 'border-blue-500' : ''} to='profile' ><img src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png" className='absolute bg-fuchsia-300 border-2 border-white shadow-sm  rounded-full h-10 w-10 ' alt="Example" /></NavLink> ...
                    </div>




                    <div className=' group cursor-pointer text-3xl' >
                        <div>
                            <i class="uil uil-angle-down"></i>
                        </div>
                        <div className='absolute hidden group-hover:block  right-2   '>
                            <ul className='bg-white shadow-xl shadow-gray-500 translate-y-7 w-50 rounded-lg text-lg  p-3 right-2'>
                                <li className='cursor-pointer' >Report a Bug</li>
                                <li className='cursor-pointer' >Settings</li>
                                <li className='cursor-pointer' >Log out</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Header
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MessageBox from '../header/MessageBox'
import NotificationBox from '../header/NotificationBox'
import RequestBox from '../header/RequestBox'
import { useState, useEffect } from 'react'

const Header = ({ users }) => {
    const [disp, setDisp] = useState(false)
    console.log(users);

    const [showMenu, setShowMenu] = useState(false);
    const [showReq, setShowReq] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [showMesg, setShowMesg] = useState(false)
    const [showFullMenu, setShowFullMenu] = useState(true)


    useEffect(() => {

        if (showMesg || showNotification || showReq) {
            if (showNotification == true) {
                setShowMesg(false)
                setShowReq(false)
                setShowFullMenu(false)
            }

            if (showMesg == true) {
                setShowReq(false)
                setShowNotification(false)
                setShowFullMenu(false)
            }

            if (showReq == true) {
                setShowMesg(false)
                setShowNotification(false)
                setShowFullMenu(false)
            }
        } else setShowFullMenu(true)




    }, [showNotification, showMesg, , showReq])






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
        // <>
        //     <div className=' fixed bg-white flex flex-row w-full p-2 justify-between items-center text-2xl shadow-xs shadow-gray-500 h-16 z-50'>
        //         <div className='font-bold'>
        //             <NavLink className='text-4xl ' to='/'><i class="uil uil-apple"> </i></NavLink>
        //             <Link to='/'>iTalk</Link>
        //         </div>


        //         <form className='gap-5 flex flex-row'>
        //             <input required type="search" name="" id="" placeholder='Search Here' className=' bg-gray-300 w-100 pl-5 p-2 rounded-full text-lg' />
        //             <button type="submit" className=' bg-gray-300  aspect-square p-2 rounded-full text-gray-500 items-center text-center '><i class="uil uil-search-alt"></i></button>

        //         </form>


        //         <div className='flex flex-row gap-5 align-middle p-1'>


        //             <div className='group cursor-pointer text-3xl' id='request' >
        //                 <div>
        //                     <i class="uil uil-users-alt"></i>
        //                 </div>
        //                 <div className='absolute hidden group-hover:block right-2' >
        //                     <RequestBox users={users} />
        //                 </div>
        //             </div>


        //             <div className=' group cursor-pointer text-3xl'>
        //                 <div>

        //                     <i class="uil uil-comment-alt"></i>
        //                 </div>
        //                 <div className='absolute hidden group-hover:block right-2'>
        //                     <MessageBox users={users} />
        //                 </div>
        //             </div>


        //             <div className=' group cursor-pointer text-3xl '>
        //                 <div>
        //                     <i class="uil uil-bell"></i>
        //                 </div>
        //                 <div className='absolute hidden group-hover:block right-2'>
        //                     <NotificationBox users={users} />
        //                 </div>
        //             </div>
        //             <div>
        //                 <NavLink className={({ isActive }) => isActive ? 'border-blue-500' : ''} to='profile' ><img src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png" className='absolute bg-fuchsia-300 border-2 border-white shadow-sm  rounded-full h-10 w-10 ' alt="Example" /></NavLink> ...
        //             </div>




        //             <div className=' group cursor-pointer text-3xl' >
        //                 <div>
        //                     <i class="uil uil-angle-down"></i>
        //                 </div>
        //                 <div className='absolute hidden group-hover:block  right-2   '>
        //                     <ul className='bg-white shadow-xl shadow-gray-500 translate-y-7 w-50 rounded-lg text-lg  p-3 right-2'>
        //                         <li className='cursor-pointer' >Report a Bug</li>
        //                         <li className='cursor-pointer' >Settings</li>
        //                         <li className='cursor-pointer' >Log out</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>

        //     </div >
        // </>


        <>
            <div className="fixed bg-white w-full p-2 shadow-xs shadow-gray-500 h-16 z-50">
                <div className="flex items-center justify-between h-full px-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 font-bold text-2xl">
                        <NavLink className="text-4xl" to="/">
                            <i className="uil uil-apple"></i>
                        </NavLink>
                        <Link to="/">iTalk</Link>
                    </div>

                    {/* Hamburger for Mobile */}
                    <div className="md:hidden text-3xl cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                        <i className="uil uil-bars"></i>
                    </div>

                    {/* Desktop Search Bar */}
                    <form className="hidden md:flex gap-3 items-center">
                        <input
                            required
                            type="search"
                            placeholder="Search Here"
                            className="bg-gray-300 w-60 pl-5 p-2 rounded-full text-lg"
                        />
                        <button
                            type="submit"
                            className="bg-gray-300 aspect-square p-2 rounded-full text-gray-500"
                        >
                            <i className="uil uil-search-alt"></i>
                        </button>
                    </form>

                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center gap-5">
                        {/* Request */}
                        <div className="relative group cursor-pointer text-2xl">
                            <i className="uil uil-users-alt"></i>
                            <div className="absolute hidden group-hover:block right-0">
                                <div className='bg-white shadow-xl shadow-gray-500 translate-y-7 w-100 rounded-lg  p-3'>
                                    <RequestBox users={users} />
                                </div>

                            </div>
                        </div>

                        {/* Message */}
                        <div className="relative group cursor-pointer text-2xl">
                            <i className="uil uil-comment-alt"></i>
                            <div className="absolute hidden group-hover:block right-0">
                                <div className='bg-white shadow-xl w-100 h-full bottom-5 shadow-gray-500 translate-y-7 rounded-lg  p-3 '>
                                    <MessageBox users={users} />
                                </div>

                            </div>
                        </div>

                        {/* Notification */}
                        <div className="relative group cursor-pointer text-2xl">
                            <i className="uil uil-bell"></i>
                            <div className="absolute hidden group-hover:block right-0">
                                <div className='bg-white shadow-xl shadow-gray-500 translate-y-7 w-100 rounded-lg  p-3 right-2'>
                                    <NotificationBox users={users} />
                                </div>

                            </div>
                        </div>

                        {/* Profile */}
                        <NavLink
                            className={({ isActive }) => (isActive ? 'border-blue-500' : '')}
                            to="/profile"
                        >
                            <img
                                src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png"
                                className="bg-fuchsia-300 border-2 border-white shadow-sm rounded-full h-10 w-10"
                                alt="Profile"
                            />
                        </NavLink>

                        {/* Dropdown */}
                        <div className="relative group cursor-pointer text-2xl">
                            <i className="uil uil-angle-down"></i>
                            <div className="absolute hidden group-hover:block right-0 mt-2">
                                <ul className="bg-white shadow-xl shadow-gray-500 w-48 rounded-lg text-lg p-3">


                                    <li className="cursor-pointer">Report a Bug</li>
                                    <li className="cursor-pointer">Settings</li>
                                    <li className="cursor-pointer">Log out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (Hidden on md+) */}
                {showMenu && (
                    <div className="flex flex-col bg-white rounded-md shadow-gray-600 shadow-sm md:hidden gap-4 mt-3 px-4">
                        <form className="flex m-2 gap-2 items-center">
                            <input
                                required
                                type="search"
                                placeholder="Search Here"
                                className="bg-gray-300 w-full pl-5 p-2 rounded-full text-lg"
                            />
                            <button
                                type="submit"
                                className="bg-gray-300 aspect-square p-2 rounded-full text-gray-500"
                            >
                                <i className="uil uil-search-alt"></i>
                            </button>
                        </form>

                        <div className='flex flex-row  text-gray-500 flex-wrap justify-between'>

                            <Link to='/profile' onClick={() => setShowMenu(!showMenu)} className="  text-3xl cursor-pointer">Aayush Kumar</Link>

                        </div>



                        <div className="flex gap-5   text-3xl justify-between">
                            <i onClick={() => setShowReq(!showReq)} className={showReq ? "uil uil-users-alt text-green-500" : "uil uil-users-alt text-gray-500"}></i>
                            <i onClick={() => setShowMesg(!showMesg)} className={showMesg ? "uil uil-comment-alt text-green-500 " : "uil uil-comment-alt text-gray-500"}></i>
                            <i onClick={() => setShowNotification(!showNotification)} className={showNotification ? "uil uil-bell text-green-500" : "uil uil-bell text-gray-500"}></i>
                        </div>

                        <div>

                            {showReq ? <RequestBox users={users} /> : ''}
                            {showMesg ? <MessageBox users={users} /> : ''}
                            {showNotification ? <NotificationBox users={users} /> : ''}

                        </div>

                        {showFullMenu ? <div className='text-2xl flex flex-col  text-gray-500'>
                            <NavLink onClick={() => setShowMenu(!showMenu)} to={'/friends'} className=''><div><i class="uil uil-users-alt">  </i>  Friends</div></NavLink>
                            <NavLink onClick={() => setShowMenu(!showMenu)} to={'/saved'} className=''><div><i class="uil uil-bookmark-full">  </i>  Saved</div></NavLink>
                            <NavLink onClick={() => setShowMenu(!showMenu)} to={'/groups'} className=''><div><i class="uil uil-layer-group"></i>  Groups</div></NavLink>
                            <NavLink onClick={() => setShowMenu(!showMenu)} to={'/feeds'} className=''><div><i class="uil uil-postcard"></i>  Feeds</div></NavLink>
                            <NavLink onClick={() => setShowMenu(!showMenu)} to={'/feeds'} className=''><div><i class="uil uil-schedule"></i>  Events</div></NavLink>
                        </div> : ''}



                        {showFullMenu ? <div className="text-2xl flex flex-col my-4 text-gray-500">
                            <NavLink onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">Report a Bug</NavLink>
                            <NavLink onClick={() => setShowMenu(!showMenu)} to='/settings' className="cursor-pointer">Settings</NavLink>
                            <NavLink onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">Log out</NavLink>
                        </div> : ''}

                    </div>
                )}
            </div>
        </>

    )
}

export default Header

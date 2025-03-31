import React from 'react'
import MessageBox from '../components/header/MessageBox'
import { NavLink, useOutletContext } from 'react-router-dom'

const MainPage = () => {

    const users = useOutletContext()

    console.log(users);



    return (
        <div className=' flex flex-row justify-around   ' >
            <div className='w-60 mt-5 '>
                <div className='w-full text-gray-600 text-2xl fixed'>
                    <div className=' flex flex-col gap-3'>


                        <NavLink to={'/profile'} className='gap-3 w-fit mb-3 mt-5'><div><i class="uil uil-user-circle"></i>  {users.FirstName + ' ' + users.LastName}</div></NavLink>
                        <NavLink to={'/friends'} className='gap-3 w-fit mt-5'><div><i class="uil uil-users-alt">  </i>  Friends</div></NavLink>
                        <NavLink to={'/saved'} className='gap-3 w-fit mt-5'><div><i class="uil uil-bookmark-full">  </i>  Saved</div></NavLink>
                        <NavLink to={'/groups'} className='gap-3 w-fit mt-5'><div><i class="uil uil-layer-group"></i>  Groups</div></NavLink>
                        <NavLink to={'/feeds'} className='gap-3 w-fit mt-5'><div><i class="uil uil-postcard"></i>  Feeds</div></NavLink>
                        <NavLink to={'/feeds'} className='gap-3 w-fit mt-5'><div><i class="uil uil-schedule"></i>  Events</div></NavLink>





                    </div>
                </div>
            </div>



            <div className='m-5 top-20 z-40 w-200'>
                <div className='  '>

                    <form className='bg-white rounded-lg p-5 shadow-xs shadow-gray-500'>
                        <div className=' flex flex-row gap-3'>
                            <div className='bg-gray-200 text-gray-500 rounded-full aspect-square p-3 text-xl'>   +   </div>
                            <input required className='bg-gray-200 rounded-full w-full p-3 placeholder:text-gray-500' placeholder='Whats in your mind, Aayush?' type="form" name="" id="" />
                        </div>
                        <div className='w-full justify-around flex flex-row mt-5 font-semibold text-gray-400'>

                            <button className=' cursor-pointer  '><i class="uil uil-upload"></i><span className='mx-2'>Update Status </span ></button>
                            <button className='cursor-pointer'><i class="uil uil-image-plus "></i><span className='mx-2'>Upload Photos/Videos</span></button>

                        </div>
                    </form>
                    <div className='bg-white rounded-lg p-5 mt-5  shadow-xs shadow-gray-500'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-2' >
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXy7V4i0TVpWtkhNBFFWEvR8MpqdWhfPprw&s' className=' h-12 rounded-full  text-gray-400'>
                                    {/* <i class="uil uil-user-circle"></i> */}
                                </img>                                <div>
                                    <div>Error 69</div>
                                    <div className='text-gray-500 font-semibold'>March 28 5:34 am</div>
                                </div>
                            </div>
                            <div className='text-2xl'><i class="uil uil-ellipsis-v"></i></div>


                        </div>
                        <img src='https://i.pinimg.com/736x/23/8d/c3/238dc3bfa9785f3d3ab4e94e088955e1.jpg' className='w-full px-5 bg-amber-500  mt-3' />


                        <div className='w-full justify-around flex flex-row mt-5 font-semibold text-gray-400'>
                            <div><i class="uil uil-thumbs-up"></i><span className='mx-2'>Like </span ></div>
                            <div><i class="uil uil-comment-alt"></i><span className='mx-2'>Comment </span ></div>
                            <div><i class="uil uil-share"></i><span className='mx-2'>Share </span ></div>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg p-5 mt-5  shadow-xs shadow-gray-500'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-2' >
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXXRINFoZllQUYG4FRzqIVeYBJ_obkdB2Og&s' className=' h-12 rounded-full  text-gray-400'>
                                    {/* <i class="uil uil-user-circle"></i> */}
                                </img>                                <div>
                                    <div>Foofaji</div>
                                    <div className='text-gray-500 font-semibold'>March 28 5:34 am</div>
                                </div>
                            </div>
                            <div className='text-2xl'><i class="uil uil-ellipsis-v"></i></div>

                        </div>
                        <img src='https://i.pinimg.com/474x/a5/8e/91/a58e915ba6ecf2b1f4b4e513608eec05.jpg' className='w-full px-5 bg-amber-500  mt-3' />


                        <div className='w-full justify-around flex flex-row mt-5 font-semibold text-gray-400'>
                            <div><i class="uil uil-thumbs-up"></i><span className='mx-2'>Like </span ></div>
                            <div><i class="uil uil-comment-alt"></i><span className='mx-2'>Comment </span ></div>
                            <div><i class="uil uil-share"></i><span className='mx-2'>Share </span ></div>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg p-5 mt-5  shadow-xs shadow-gray-500'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-2' >
                                <img src='https://pbs.twimg.com/profile_images/1658770907471683585/XMryZWMt_400x400.jpg' className=' h-12 rounded-full  text-gray-400'>
                                    {/* <i class="uil uil-user-circle"></i> */}
                                </img>
                                <div>
                                    <div>Memehub</div>
                                    <div className='text-gray-500 font-semibold'>March 28 5:34 am</div>
                                </div>
                            </div>
                            <div className='text-2xl'><i class="uil uil-ellipsis-v"></i></div>

                        </div>
                        <img src='https://i.pinimg.com/736x/23/8d/c3/238dc3bfa9785f3d3ab4e94e088955e1.jpg' className='w-full px-5 bg-amber-500  mt-3' />

                        <div className='w-full justify-around flex flex-row mt-5 font-semibold text-gray-400'>
                            <div><i class="uil uil-thumbs-up"></i><span className='mx-2'>Like </span ></div>
                            <div><i class="uil uil-comment-alt"></i><span className='mx-2'>Comment </span ></div>
                            <div><i class="uil uil-share"></i><span className='mx-2'>Share </span ></div>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg p-5 mt-5  shadow-xs shadow-gray-500'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-2' >
                                <div className=' text-5xl  text-gray-400'><i class="uil uil-user-circle"></i></div>
                                <div>
                                    <div>RJVCJ Posts</div>
                                    <div className='text-gray-500 font-semibold'>March 28 5:34 am</div>
                                </div>
                            </div>
                            <div className='text-2xl'><i class="uil uil-ellipsis-v"></i></div>

                        </div>
                        <img src='https://i.pinimg.com/1200x/b8/37/23/b837235b36312092593868f05b9f9ede.jpg' className='w-full px-5 bg-amber-500  mt-3' />

                        <div className='w-full justify-around flex flex-row mt-5 font-semibold text-gray-400'>
                            <div><i class="uil uil-thumbs-up"></i><span className='mx-2'>Like </span ></div>
                            <div><i class="uil uil-comment-alt"></i><span className='mx-2'>Comment </span ></div>
                            <div><i class="uil uil-share"></i><span className='mx-2'>Share </span ></div>
                        </div>
                    </div>
                </div>
            </div>





            <div className='w-60 mt-5 flex flex-col '>
                <div className='fixed w-60'>
                    <div className=''>
                        <div className='bg-gray-300 rounded-md p-1 font-semibold '>
                            <NavLink className='text-gray-500' to={'/request'}>Requests</NavLink>
                        </div>
                        <div className='m-2'>
                            <div className='text-gray-500 m-1 text-sm '>
                                <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Aaksh Verna </span>
                                <span>want to be your friend</span>
                            </div>
                            <div className='text-gray-500 m-1 text-sm '>
                                <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Deep Singh </span>
                                <span>want to be your friend</span>
                            </div>
                            <div className='text-gray-500 m-1 text-sm '>
                                <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Anant Ambani </span>
                                <span>want to be your friend</span>
                            </div>
                        </div>



                        <br />


                    </div>
                    <div>
                        <div>
                            <div className='bg-gray-300 rounded-md p-1 font-semibold text-gray-500'>My Status</div>
                        </div>
                        <div className='m-2'>
                            <div className='text-gray-500 m-1 text-sm '>
                                <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'> </span>
                                <span>No status updated</span>
                            </div>

                        </div>
                        <br />

                    </div>
                    <div >
                        <div className='bg-gray-300 rounded-md p-1 font-semibold'>
                            <NavLink className='text-gray-500' to='/messages'>People Online</NavLink>
                        </div>
                        <div className='m-2'>
                            <div className='text-gray-500 m-1 text-sm '>
                                <span className='text-yellow-500'>*</span>
                                <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'> Aaksh Verna & 2 more </span>
                                <span>are Online</span>
                            </div>

                        </div>
                        <br />

                    </div>
                    <div >
                        <div className='bg-gray-300 rounded-md p-1 font-semibold'>
                            <NavLink className='text-gray-500' to={'/events'}>Birthdays</NavLink>
                        </div>
                        <div className='m-2'>
                            <div className='text-gray-500 m-1 text-sm '>
                                <span>Today is </span>
                                <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Aaksh Verna's</span>
                                <span> birthday. Wish him on his  birthday   </span>
                            </div>

                        </div>
                        <br />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainPage
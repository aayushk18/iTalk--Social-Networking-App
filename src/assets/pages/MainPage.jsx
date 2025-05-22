import React from 'react';
import MessageBox from '../components/header/MessageBox';
import { NavLink, useOutletContext } from 'react-router-dom';

const MainPage = () => {
    const users = useOutletContext();
    console.log(users);

    const post = [{
        Pagename: 'Error 69',
        Pagepic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXy7V4i0TVpWtkhNBFFWEvR8MpqdWhfPprw&s',
        postpic: 'https://i.pinimg.com/736x/23/8d/c3/238dc3bfa9785f3d3ab4e94e088955e1.jpg',
        postdesciption: 'Hehe welcome to 2023😂',
        postdate: 'March 28 5:34 am'
    },
    {
        Pagename: 'Foofaji',
        Pagepic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXXRINFoZllQUYG4FRzqIVeYBJ_obkdB2Og&s',
        postpic: 'https://i.pinimg.com/474x/a5/8e/91/a58e915ba6ecf2b1f4b4e513608eec05.jpg',
        postdesciption: 'Angry yamm 😈',
        postdate: 'March 28 5:34 am'
    },
    {
        Pagename: 'Memehub',
        Pagepic: 'https://pbs.twimg.com/profile_images/1658770907471683585/XMryZWMt_400x400.jpg',
        postpic: 'https://i.pinimg.com/736x/23/8d/c3/238dc3bfa9785f3d3ab4e94e088955e1.jpg',
        postdesciption: 'Hehe welcome to 2023😂',
        postdate: 'March 28 5:34 am'
    },
    {
        Pagename: 'RJVCJ Posts',
        Pagepic: 'ccc',
        postpic: 'https://i.pinimg.com/1200x/b8/37/23/b837235b36312092593868f05b9f9ede.jpg',
        postdesciption: 'Kya zamana aa gaya',
        postdate: 'March 28 5:34 am'
    },


    {
        Pagename: 'Foofaji',
        Pagepic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXXRINFoZllQUYG4FRzqIVeYBJ_obkdB2Og&s',
        postpic: 'https://i.pinimg.com/474x/a5/8e/91/a58e915ba6ecf2b1f4b4e513608eec05.jpg',
        postdesciption: 'Angry yamm 😈',
        postdate: 'March 28 5:34 am'
    },
    {
        Pagename: 'Memehub',
        Pagepic: 'https://pbs.twimg.com/profile_images/1658770907471683585/XMryZWMt_400x400.jpg',
        postpic: 'https://i.pinimg.com/736x/23/8d/c3/238dc3bfa9785f3d3ab4e94e088955e1.jpg',
        postdesciption: 'New year goals',
        postdate: 'March 28 5:34 am'
    },
    {
        Pagename: 'RJVCJ Posts',
        Pagepic: 'cc',
        postpic: 'https://i.pinimg.com/1200x/b8/37/23/b837235b36312092593868f05b9f9ede.jpg',
        postdesciption: 'Kya zamana aa gaya',
        postdate: 'March 28 5:34 am'
    },


    ]

    return (
        <div className='flex flex-col lg:flex-row justify-between px-4'>
            {/* Left Sidebar */}
            <aside className='hidden lg:block lg:w-1/5 mt-5'>
                <div className='fixed text-gray-600 text-md lg:text-lg'>
                    <div className='flex flex-col gap-4'>
                        <NavLink to={'/profile'} className='w-fit mb-3 mt-5'>
                            <div><i className='uil uil-user-circle'></i>  {users.FirstName + ' ' + users.LastName}</div>
                        </NavLink>
                        <NavLink to={'/friends'}><div><i className='uil uil-users-alt'></i> Friends</div></NavLink>
                        <NavLink to={'/saved'}><div><i className='uil uil-bookmark-full'></i> Saved</div></NavLink>
                        <NavLink to={'/groups'}><div><i className='uil uil-layer-group'></i> Groups</div></NavLink>
                        <NavLink to={'/feeds'}><div><i className='uil uil-postcard'></i> Feeds</div></NavLink>
                        <NavLink to={'/feeds'}><div><i className='uil uil-schedule'></i> Events</div></NavLink>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className='flex-1 mt-5 max-w-full lg:max-w-2xl mx-auto'>
                {/* Post Input */}
                <form className='bg-white rounded-lg p-4 shadow-sm'>
                    <div className='flex flex-row gap-3 items-center'>
                        <div className='bg-gray-200 text-gray-500 rounded-full aspect-square p-3 text-xl'>+</div>
                        <input
                            required
                            className='bg-gray-200 rounded-full w-full p-3 placeholder:text-gray-500'
                            placeholder={`What's in your mind, ${users.FirstName}?`}
                            type='text'
                        />
                    </div>
                    <div className='w-full justify-around flex flex-wrap mt-4 font-semibold text-gray-400'>
                        <button type='button'><i className='uil uil-upload'></i><span className='hidden md:inline mx-2'>Update Status</span></button>
                        <button type='button'><i className='uil uil-image-plus'></i><span className='hidden md:inline mx-2'>Upload Photos/Videos</span></button>
                    </div>
                </form>

                {/* Posts */}
                {post.map((el) => (
                    <div className='bg-white rounded-lg p-4 mt-5 shadow-sm'>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <img
                                    src={el.Pagepic}
                                    alt='Profile'
                                    className='h-12 w-12 rounded-full object-cover'
                                />
                                <div>
                                    <div className='font-semibold'>{el.Pagename}</div>
                                    <div className='text-gray-500 text-sm'>{el.postdate}</div>
                                </div>
                            </div>
                            <div className='text-2xl'><i className='uil uil-ellipsis-v'></i></div>
                        </div>
                        <img
                            src={el.postpic}
                            alt='Post'
                            className='w-full mt-4 rounded-md'
                        />
                        <div className='my-3'>{el.postdesciption}</div>
                        <div className='flex justify-around mt-4 font-semibold text-gray-400'>
                            <div><i className='uil uil-thumbs-up'></i><span className='mx-2'>Like</span></div>
                            <div><i className='uil uil-comment-alt'></i><span className='mx-2'>Comment</span></div>
                            <div><i className='uil uil-share'></i><span className='mx-2'>Share</span></div>
                        </div>
                    </div>
                ))}
            </main>

            {/* Right Sidebar */}
            <aside className='hidden lg:block lg:w-1/5 mt-5'>
                <div className='fixed w-60 space-y-6'>
                    <div className='bg-gray-300 rounded-md p-2 font-semibold text-gray-700'>
                        <NavLink to='/request'>Requests</NavLink>
                    </div>
                    <div className='text-sm text-gray-600 space-y-2'>
                        {['Aaksh Verna', 'Deep Singh', 'Anant Ambani'].map(name => (
                            <div key={name}><span className='text-blue-500 font-semibold'>{name}</span> wants to be your friend</div>
                        ))}
                    </div>

                    <div className='bg-gray-300 rounded-md p-2 font-semibold text-gray-700'>My Status</div>
                    <div className='text-sm text-gray-600'>No status updated</div>

                    <div className='bg-gray-300 rounded-md p-2 font-semibold text-gray-700'>
                        <NavLink to='/messages'>People Online</NavLink>
                    </div>
                    <div className='text-sm text-gray-600'>
                        <span className='text-yellow-500'>*</span> <span className='text-blue-500'>Aaksh Verna & 2 more</span> are Online
                    </div>

                    <div className='bg-gray-300 rounded-md p-2 font-semibold text-gray-700'>
                        <NavLink to='/events'>Birthdays</NavLink>
                    </div>
                    <div className='text-sm text-gray-600'>
                        Today is <span className='text-blue-500'>Aaksh Verna's</span> birthday. Wish him!
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default MainPage;

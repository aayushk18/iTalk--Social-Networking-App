import React from 'react'

const NotificationBox = () => {
    return (
        <div className=' bg-white shadow-xl shadow-gray-500 translate-y-7 w-100 rounded-lg  p-3 right-2 '>
            <div className=' p-2'>Notification
                <div className='text-sm my-2 px-5'>


                    <div className='my-3'>
                        <div className=' m-1 text-md text-justify '>
                            <span>No status updated since 2 month. </span>
                            <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Update your status </span>

                        </div>


                    </div>
                    <div className='my-3'>
                        <div className=' m-1 text-md text-justify '>

                            <span className='text-blue-500  hover:text-blue-700 font-semiboldcursor-pointer'> Aaksh Verna & 2 more </span>
                            <span>are Online. Have some good chat with them</span>
                        </div>
                    </div>
                    <div className='my-3'>
                        <div className=' m-1 text-md text-justify '>
                            <span>Today is </span>
                            <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Aaksh Verna's</span>
                            <span> birthday. Wish him on his  birthday   </span>
                        </div>
                    </div>
                    <div className=' m-1 text-md text-justify  my-3'>
                        <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Aaksh Verna </span>
                        <span>want to be your friend. Click here to see his profile</span>
                    </div>
                    <div className=' m-1 text-md text-justify my-3'>
                        <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Deep Singh </span>
                        <span>want to be your friend.  Click here to see his profil</span>
                    </div>
                    <div className=' m-1 text-md text-justify my-3'>
                        <span className='text-blue-500 hover:text-blue-700 font-semiboldcursor-pointer'>Anant Ambani </span>
                        <span>want to be your friend.  Click here to see his profil</span>
                    </div>







                </div>
                <div className='text-sm my-3 '>
                    See More
                </div>
            </div>
        </div>
    )
}

export default NotificationBox
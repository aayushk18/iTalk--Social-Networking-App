import React from 'react'
import Friends from '../components/other/profile/Friends'
import RequestBox from '../components/header/RequestBox'

const FriendsPage = () => {
    return (
        <div className='mx-20'>
            <div className='text-6xl my-10 font-bold'>Friends</div>
            <div className='my-10'>
                <div className='w-full bg-white p-5 rounded-lg'>
                    <div className='text-2xl'>Requests</div>

                </div>

            </div>
            <div>
                <Friends />
            </div>
        </div>
    )
}

export default FriendsPage
import React from 'react'

const RequestBox = ({ users }) => {

    console.log(users.friends.requests[0].name);

    return (
        <div className=' bg-white shadow-xl shadow-gray-500 translate-y-7 w-100 rounded-lg  p-3 '>
            <div className=' '>Requests
                <div className='text-sm my-2'>



                    {users.friends.requests.map((el) => {

                        return (<div className='flex flex-row justify-between gap-2 p-2'>
                            <div className='flex flex-row gap-2 text-xl'>
                                <div className=' text-4xl  text-gray-500'><i class="uil uil-user-circle"></i></div>
                                <div className='  flex-col'>
                                    <div className='text-sm font-semibold'>{el.name}</div>
                                    <div className='text-xs' >1 Mutual Friend</div>
                                </div>
                            </div>

                            <div className='flex flex-row gap-2 '>
                                <div className='text-white m-2 px-2   rounded-full text-2xl bg-blue-500 '><i class="uil uil-check"></i>  </div>
                                <div className='text-white m-2 px-2   rounded-full text-2xl bg-red-500'> <i class="uil uil-times"></i>  </div>
                            </div>
                        </div>)

                    })}









                </div>
                <div className='text-sm'>
                    See More
                </div>
            </div>
        </div>
    )
}

export default RequestBox
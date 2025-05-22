import React from 'react'

const MessageBox = ({ users }) => {
    return (
        <div className=' '>
            <div className=' flex flex-row justify-between p-2'>
                <div>Chats</div>
                <div className='text-2xl'><i class="uil uil-ellipsis-v"></i></div>            </div>
            <div>
                <input type='search' className=' bg-gray-200 p-2 px-5 w-full rounded-full placeholder:text-lg' name="" id="" placeholder='Search Messages..' />
            </div>
            <div className='p-2 text-sm'>
                <button type="submit" className='p-3 bg-gray-200 rounded-full'>Inbox</button>
                <button type="button" className='p-3 mx-2 bg-gray-200 rounded-full'>Group</button>

            </div>



            {users.friends.current.map((el) => {

                return (<div className='flex flex-row gap-2 p-2'>
                    <div className=' text-4xl  text-gray-400'><i class="uil uil-user-circle"></i></div>
                    <div className='flex flex-col  w-full text-sm'>
                        <div>{el.name}</div>
                        <div className='text-gray-700'>Send: haa bhai karra hu</div>
                    </div>
                    <div className='text-2xl'><i class="uil uil-ellipsis-v"></i></div>                </div>)
            }

            )}
























            <div className='w-full justify-self-center my-5 text-sm'> See More</div>
        </div>
    )
}

export default MessageBox

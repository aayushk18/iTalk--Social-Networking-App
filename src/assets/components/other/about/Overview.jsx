import React from 'react'
import Work from './Work'
import Education from './Education'
import Address from './Address'
import BasicInfo from './BasicInfo'

const Overview = () => {
    return (
        <div >
            <div className='font-semibold text-4xl mb-10 m-5'>Overview</div>
            <div>

                <Work />
                <Education />
                <Address />
                <BasicInfo />

            </div>
        </div>
    )
}

export default Overview

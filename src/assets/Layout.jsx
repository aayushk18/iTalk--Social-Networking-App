import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    const users = [
        {
            FirstName: 'Aayush',
            LastName: 'Kumar',
            profilePic: 'aayush_pic.jpg',
            profileCover: 'aayush_cover.jpg',
            acountInfo: {
                email: 'aayush@example.com',
                username: 'aayush23',
            },
            About: {
                age: 23,
                work: { position: 'Software Engineer', company: 'Google' },
                education: {
                    college: { name: 'IIT Delhi', degree: 'B.Tech CS' },
                    highSchool: { name: 'DPS RK Puram' },
                },
                address: {
                    currentCity: 'Delhi',
                    HomeTown: 'Patna',
                },
            },
            messages: {},
            friends: {
                requests:
                    [
                        {
                            name: 'Aaksh verma',
                            profilePic: {},
                        },
                        {
                            name: 'Deep singh',
                            profilePic: {},
                        },
                        {
                            name: 'Anant Ambani',
                            profilePic: {},
                        }
                    ]
                ,
                current: [{
                    name: 'Varun verma',
                    profilePic: {},
                    messages: {},
                },
                {
                    name: 'Aman singh',
                    profilePic: {},
                    messages: {},
                },
                {
                    name: 'Aanchal Ambani',
                    profilePic: {},
                    messages: {},
                }],
            },
            posts: {
                photos: {},
                videos: {},
            },
            suggestions: {},
            others: {},
        },
        {
            FirstName: 'Rahul',
            LastName: 'Sharma',
            profilePic: 'rahul_pic.jpg',
            profileCover: 'rahul_cover.jpg',
            acountInfo: {
                email: 'rahul@example.com',
                username: 'rahul_s',
            },
            About: {
                age: 25,
                work: { position: 'Data Analyst', company: 'Microsoft' },
                education: {
                    college: { name: 'IIM Bangalore', degree: 'MBA' },
                    highSchool: { name: 'KV Bangalore' },
                },
                address: {
                    currentCity: 'Bangalore',
                    HomeTown: 'Mumbai',
                },
            },
            messages: {},
            friends: {
                requests: [
                    {
                        name: 'Aaksh verma',
                        profilePic: {},
                    },
                    {
                        name: 'Deep singh',
                        profilePic: {},
                    },
                    {
                        name: 'Anant Ambani',
                        profilePic: {},
                    }
                ],
                current: {},
            },
            posts: {
                photos: {},
                videos: {},
            },
            suggestions: {},
            others: {},
        },
        {
            FirstName: 'Sneha',
            LastName: 'Gupta',
            profilePic: 'sneha_pic.jpg',
            profileCover: 'sneha_cover.jpg',
            acountInfo: {
                email: 'sneha@example.com',
                username: 'sneha_g',
            },
            About: {
                age: 22,
                work: { position: 'UI/UX Designer', company: 'Adobe' },
                education: {
                    college: { name: 'NID Ahmedabad', degree: 'B.Des' },
                    highSchool: { name: 'Modern School' },
                },
                address: {
                    currentCity: 'Pune',
                    HomeTown: 'Jaipur',
                },
            },
            messages: {},
            friends: {
                requests: [
                    {
                        name: 'Aaksh verma',
                        profilePic: {},
                    },
                    {
                        name: 'Deep singh',
                        profilePic: {},
                    },
                    {
                        name: 'Anant Ambani',
                        profilePic: {},
                    }
                ],
                current: {},
            },
            posts: {
                photos: {},
                videos: {},
            },
            suggestions: {},
            others: {},
        },
        {
            FirstName: 'Neha',
            LastName: 'Verma',
            profilePic: 'neha_pic.jpg',
            profileCover: 'neha_cover.jpg',
            acountInfo: {
                email: 'neha@example.com',
                username: 'neha_v',
            },
            About: {
                age: 24,
                work: { position: 'Cybersecurity Analyst', company: 'Cisco' },
                education: {
                    college: { name: 'IIIT Hyderabad', degree: 'B.Tech IT' },
                    highSchool: { name: 'DAV Public School' },
                },
                address: {
                    currentCity: 'Hyderabad',
                    HomeTown: 'Lucknow',
                },
            },
            messages: {},
            friends: {
                requests: [
                    {
                        name: 'Aaksh verma',
                        profilePic: {},
                    },
                    {
                        name: 'Deep singh',
                        profilePic: {},
                    },
                    {
                        name: 'Anant Ambani',
                        profilePic: {},
                    }
                ],
                current: {},
            },
            posts: {
                photos: {},
                videos: {},
            },
            suggestions: {},
            others: {},
        }
    ];

    return (
        <>
            <Header users={users[0]} />
            <div className='pt-16'></div>
            <Outlet context={users[0]} />

        </>
    )
}

export default Layout
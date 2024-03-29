import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner';
import React from 'react'
import AttendanceCalendar from 'components/attendance/AttendanceCalendar'
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const AttendPage = ({isAuthenticated, setAuthenticated}) => {


    return (
        <div style={{maxWidth: '1242px'}} className="relative flex flex-col justify-center">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='출석부' toPath='/main' />
            </div>


            <div style={{padding: '0 1.875rem'}} className="flex flex-col items-start h-full">


                <div className="w-full flex justify-center">
                    <AttendanceCalendar />                
                </div>


            </div>
            <BottomNavbar />
        </div>
    )
}

export default AttendPage

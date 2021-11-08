import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React from 'react'
import PlaceholderImage from '../images/liveCasino/placeholder.png'

const LiveCasinoPage = ({
    isAuthenticated,
    setAuthenticated
}) => {
    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden h-screen">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="w-full h-full bg-black flex justify-center limit1600:mt-92px mt-122px">
                <img className="h-full object-contain" src={PlaceholderImage} alt="" />
            </div>

        </div>
    )
}

export default LiveCasinoPage

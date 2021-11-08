import GameBanner from 'components/gameBanners/GameBanner'
import React, { useState } from 'react'
import Carousel from '../components/mainPage/Carousel'
import Navbar from '../components/mainPage/Navbar'
import NoticeBanner from '../components/mainPage/NoticeBanner'
import SubNavbar from '../components/mainPage/SubNavbar'

const MainPage = ({isAuthenticated, setAuthenticated}) => {

    const [isGameBanner, setGameBanner] = useState(0)

    return (
        <div className=" flex flex-col justify-center w-screen h-full overflow-x-hidden">

            <div className="sticky top-0 w-full z-50 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="flex justify-center items-center pb-16px">
                <Carousel />
            </div>

            <div className="overflow-x-scroll sticky top-0 flex w-full justify-around w-full shadow-subNavbar bg-gradient-to-b from-blue-lightGradLight to-white border-2 border-white">
                <SubNavbar setGameBanner={setGameBanner} isGameBanner={isGameBanner} />
            </div>
            

            <div className="static flex w-screen mt-16px h-full">
                <GameBanner selection={isGameBanner}/>
            </div>
            <div style={{height:"1000px"}} className="w-full bg-white"></div>

            <div className="h-60px w-full rounded-t-lg shadow-plain bg-white fixed bottom-0 z-20"></div>

        </div>
    )
}

export default MainPage

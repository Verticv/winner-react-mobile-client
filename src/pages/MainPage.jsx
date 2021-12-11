import GameBanner from 'components/gameBanners/GameBanner'
import React, { useState } from 'react'
import Carousel from '../components/mainPage/Carousel'
import Navbar from '../components/mainPage/Navbar'
import NoticeBanner from '../components/mainPage/NoticeBanner'
import SubNavbar from '../components/mainPage/SubNavbar'
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'

const MainPage = ({isAuthenticated, setAuthenticated}) => {
    const [isGameBanner, setGameBanner] = useState(0)

    return (
        <div className="relative flex flex-col h-full">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar /> 
            </div>

            <div className="flex justify-center items-center w-full -mt-3px mb-10px">
                <Carousel />
            </div>

            <div className="relative sticky  top-0 z-40">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff"}} className="absolute w-50px h-full right-0 z-50"></div>
                <div className=" sticky overflow-x-scroll overflow-y-hidden shadow-subNavbar bg-gradient-to-b from-blue-lightGradLight to-white border-2 border-white">
                    <div className=" flex flex-shrink-0 justify-around w-full">
                        <SubNavbar setGameBanner={setGameBanner} isGameBanner={isGameBanner} />
                    </div>
                </div>
            </div>
            
            
            

            <div className="flex mt-10px h-full pb-24">
                <GameBanner selection={isGameBanner}/>
            </div>

            <BottomNavbar />

        </div>
    )
}

export default MainPage

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

            <div style={{marginBottom: '10px'}} className="flex justify-center items-center w-full">
                <Carousel />
            </div>

            <div className="relative flex sticky top-0 z-40 w-screen">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                <div id='scroll-wrapper' style={{borderTopWidth: '0.1875rem',maxWidth: '1242px'}} className=" sticky overflow-x-scroll hide-scrollbar overflow-y-hidden shadow-subNavbar bg-gradient-to-b from-blue-lightGradLight to-white border-t border-white">
                    <div className=" flex flex-shrink-0 justify-around w-full pb-1">
                        <SubNavbar setGameBanner={setGameBanner} isGameBanner={isGameBanner} />
                    </div>
                </div>
                <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
            </div>
            
            
            

            <div style={{marginTop: '1.875rem'}} className="flex h-full pb-24">
                <GameBanner selection={isGameBanner}/>
            </div>

            <BottomNavbar />

        </div>
    )
}

export default MainPage

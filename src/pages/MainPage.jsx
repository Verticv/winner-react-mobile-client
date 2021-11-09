import GameBanner from 'components/gameBanners/GameBanner'
import React, { useState } from 'react'
import Carousel from '../components/mainPage/Carousel'
import Navbar from '../components/mainPage/Navbar'
import NoticeBanner from '../components/mainPage/NoticeBanner'
import SubNavbar from '../components/mainPage/SubNavbar'

const MainPage = ({isAuthenticated, setAuthenticated}) => {

    const [isGameBanner, setGameBanner] = useState(0)

    return (
        <div className="relative flex flex-col w-screen h-full">

            <div className="sticky w-full z-40 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                
            </div>

            <div className="flex justify-center items-center w-full -mt-3px mb-10px">
                <Carousel />
            </div>

            <div className="sticky top-0 z-50">
                <div className="sticky z-50 overflow-x-scroll overflow-y-hidden flex h-90px flex-shrink-0 justify-around w-full shadow-subNavbar bg-gradient-to-b from-blue-lightGradLight to-white border-2 border-white">
                    <SubNavbar setGameBanner={setGameBanner} isGameBanner={isGameBanner} />
                </div>
            </div>
            
            

            <div className="flex w-screen mt-16px h-full pb-24">
                <GameBanner selection={isGameBanner}/>
            </div>

            <div className="h-60px w-full rounded-t-lg shadow-plain bg-white fixed bottom-0 z-20"></div>

        </div>
    )
}

export default MainPage

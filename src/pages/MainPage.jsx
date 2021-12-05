import GameBanner from 'components/gameBanners/GameBanner'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Carousel from '../components/mainPage/Carousel'
import Navbar from '../components/mainPage/Navbar'
import NoticeBanner from '../components/mainPage/NoticeBanner'
import SubNavbar from '../components/mainPage/SubNavbar'
import TabIcon1 from '../images/tabbar/1.png'
import TabIcon2 from '../images/tabbar/2.png'
import TabIcon3 from '../images/tabbar/3.png'
import TabIcon4 from '../images/tabbar/4.png'
import TabIcon5 from '../images/tabbar/5.png'


const MainPage = ({isAuthenticated, setAuthenticated}) => {
    const history = useHistory();
    const [isGameBanner, setGameBanner] = useState(0)

    return (
        <div className="relative flex flex-col h-full">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} /> 
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

            <div style={{maxWidth: '1242px'}} className="w-full z-50 rounded-t-3xl shadow-plain bg-white fixed bottom-0">
                <div className="flex justify-around py-12 items-center h-full">
                    <button className="flex flex-col items-center space-y-3px">
                        <img className="w-16 pb-5 object-contain" src={TabIcon5} alt="" />
                        <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">출석부</p>
                    </button>
                    <button className="flex flex-col items-center space-y-3px">
                        <img className="w-20 pb-5 object-contain" src={TabIcon4} alt="" />
                        <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">게시판</p>
                    </button>
                    <button className="flex flex-col items-center space-y-3px">
                        <img className="w-20 pb-5 object-contain" src={TabIcon3} alt="" />
                        <p className="text-blue-r009edf text-5xl font-spoqaMedium">홈</p>
                    </button>
                    <button className="flex flex-col items-center space-y-3px">
                        <img className="w-16 pb-5 object-contain" src={TabIcon1} alt="" />
                        <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">문의</p>
                    </button>
                    <button 
                        className="flex flex-col items-center space-y-3px"
                        onClick={() => history.push('/mypage')}
                        >
                        <img className="w-16 pb-5 object-contain" src={TabIcon2} alt="" />
                        <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">마이인포</p>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default MainPage

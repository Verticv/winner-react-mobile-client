import WinLoseSettlementContent from 'components/myPage/WinLoseSettlement'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React from 'react'
import HomePageTopBanner from '../components/common/HomePageTopBanner';
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'


const WinLoseSettlement = ({isAuthenticated, setAuthenticated}) => {
    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center limit:overflow-x-hidden">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='윈루즈정산' />
            </div>
 
            <div style={{paddingBottom: '3.75rem'}} className="flex flex-col items-start limit:items-center w-full h-full">

                
                <div className="flex w-full">
                    <div className="w-full">
                        <WinLoseSettlementContent />
                        <BottomNavbar />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WinLoseSettlement

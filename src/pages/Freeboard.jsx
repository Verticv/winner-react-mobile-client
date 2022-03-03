import FreeBoardCompose from 'components/freeBoard/FreeBoardCompose'
import FreeBoardMain from 'components/freeBoard/FreeBoardMain'
import FreeBoardView from 'components/freeBoard/FreeBoardView'
// import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner'
import BottomNavbar from '../components/bottomNavbar/BottomNavbar'
import React from 'react'
import { Route } from 'react-router'
import FreeBoardView2 from 'components/freeBoard/FreeBoardView2'
import ScrollButton from 'components/common/ScrollButton'

const Freeboard = ({isAuthenticated, setAuthenticated}) => {

    return (
        <div style={{maxWidth: '1242px'}} className="w-full flex flex-col">

            <ScrollButton />

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='게시판' toPath={window.location.pathname.includes('/mypage') ? '/mypage' : '/main'} />
            </div>


            <div className="flex flex-col items-start limit:items-center w-full h-full">
                <div className="w-full">
                    <Route exact path="/freeboard">
                        <FreeBoardMain />
                        <BottomNavbar />
                    </Route>
                    <Route path="/freeboard/view">
                        <FreeBoardView />
                        <BottomNavbar />
                    </Route>
                    <Route path="/freeboard/view2">
                        <FreeBoardView2 />
                        <BottomNavbar />
                    </Route>
                    <Route path="/freeboard/compose">
                        <FreeBoardCompose />
                        <BottomNavbar />
                    </Route>
                    <Route exact path="/mypage/freeboard">
                        <FreeBoardMain />
                        <BottomNavbar />
                    </Route>
                    <Route path="/mypage/freeboard/view">
                        <FreeBoardView />
                        <BottomNavbar />
                    </Route>
                    <Route path="/mypage/freeboard/view2">
                        <FreeBoardView2 />
                        <BottomNavbar />
                    </Route>
                    <Route path="/mypage/freeboard/compose">
                        <FreeBoardCompose />
                        <BottomNavbar />
                    </Route>
                </div>

            </div>
        </div>
    )
}

export default Freeboard

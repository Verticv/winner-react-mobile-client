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

const Freeboard = ({isAuthenticated, setAuthenticated}) => {

    return (
        <div style={{maxWidth: '1242px'}} className="w-full flex flex-col">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                <HomePageTopBanner pageTitle='게시판' />
            </div>


            <div className="flex flex-col items-start limit:items-center w-full h-full">
                {/* <Route exact path="/freeboard">
                    <DirectoryComponent 
                        branch1="게시판" 
                        mainPath="/freeboard"
                    />
                </Route>
                <Route path="/freeboard/view">
                    <DirectoryComponent 
                        branch1="게시판" 
                        branch2="뷰"
                        mainPath="/freeboard/view"
                    />
                </Route>
                <Route path="/freeboard/view2">
                    <DirectoryComponent 
                        branch1="게시판" 
                        branch2="뷰"
                        mainPath="/freeboard/view"
                    />
                </Route>
                <Route path="/freeboard/compose">
                    <DirectoryComponent 
                        branch1="게시판" 
                        branch2="작성하기"
                        mainPath="/freeboard/compose"
                    />
                </Route>
                <div className="relative w-default h-225px">
                    <label style={{color: "#39674c"}} className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">게시판</label>
                    <img className="z-10" src={FreeBoardBanner} alt="" />
                </div> */}
                <div className="w-full">
                    <Route exact path="/freeboard">
                        <FreeBoardMain />
                        <BottomNavbar />
                    </Route>
                    <Route path="/freeboard/view">
                        <FreeBoardView />
                    </Route>
                    <Route path="/freeboard/view2">
                        <FreeBoardView2 />
                    </Route>
                    <Route path="/freeboard/compose">
                        <FreeBoardCompose />
                    </Route>
                </div>

                {/* <div>
                    <Footer2 />
                    <Footer />
                </div> */}

            </div>
        </div>
    )
}

export default Freeboard

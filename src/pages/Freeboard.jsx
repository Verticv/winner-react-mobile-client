import Footer from 'components/mainPage/Footer'
import Footer2 from 'components/mainPage/Footer2'
import FreeBoardCompose from 'components/freeBoard/FreeBoardCompose'
import FreeBoardMain from 'components/freeBoard/FreeBoardMain'
import FreeBoardView from 'components/freeBoard/FreeBoardView'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React from 'react'
import { Route } from 'react-router'
import FreeBoardBanner from '../images/freeBoard/free_board_banner.png'
import FreeBoardView2 from 'components/freeBoard/FreeBoardView2'

const Freeboard = ({isAuthenticated, setAuthenticated}) => {

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center limit1600:mt-92px mt-122px w-full h-full">
                <Route exact path="/freeboard">
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
                </div>

                <div className="mt-20px w-default">
                    <Route exact path="/freeboard">
                        <FreeBoardMain />
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

                <div>
                    <Footer2 />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default Freeboard

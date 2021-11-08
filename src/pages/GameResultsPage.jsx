import Footer from 'components/mainPage/Footer';
import Footer2 from 'components/mainPage/Footer2';
import DirectoryComponent from 'components/myPage/DirectoryComponent';
import LeftMenu from 'components/myPage/LeftMenu';
import Navbar from 'components/mainPage/Navbar';
import NoticeBanner from 'components/mainPage/NoticeBanner';
import React, { useState } from 'react'
import { Route, useLocation } from 'react-router';
import Icon1 from '../images/gameResults/leftMenu/icon_1.png'
import Icon2 from '../images/gameResults/leftMenu/icon_2.png'
import IconHighlight1 from '../images/gameResults/leftMenu/icon_1_highlight.png'
import IconHighlight2 from '../images/gameResults/leftMenu/icon_2_highlight.png'
import GameResultsBanner from '../images/gameResults/game_results_banner.png'
import WinDrawLose from 'components/gameResults/WinDrawLose';
import MinigameResults from 'components/gameResults/MinigameResults';

const GameResultsPage = ({isAuthenticated, setAuthenticated}) => {

    const LeftMenuArray = [
        { 
            text: "스포츠", 
            icon: Icon1, 
            iconHighlight: IconHighlight1, 
            id: 0, 
            path: "/gameresults/sports/win-draw-lose", 
            sub1: "승무패",
            sub2: "핸디캡",
            sub3: "언오버",
            sub4: "스페셜",
            path2: "/gameresults/sports/handicap",
            path3: "/gameresults/sports/unover",
            path4: "/gameresults/sports/special",
            mainPath: "/gameresults/sports"
        },
        { 
            text: "미니게임", 
            icon: Icon2, 
            iconHighlight: IconHighlight2, 
            id: 1, 
            path: "/gameresults/minigame/powerball", 
            mainPath: "/gameresults/minigame"
        },
    ];

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center limit1600:mt-92px mt-122px w-full h-full">

                <Route exact path="/gameresults/sports/win-draw-lose">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="승무패"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>
                <Route exact path="/gameresults/sports/handicap">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="핸디캡"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>
                <Route exact path="/gameresults/sports/unover">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="언오버"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>
                <Route exact path="/gameresults/sports/special">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="스페셜"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>

                <Route path="/gameresults/minigame">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="미니게임" 
                        mainPath="/gameresults/minigame"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>

                <div className="relative w-default h-225px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">경기결과</label>
                    <img className="z-10" src={GameResultsBanner} alt="" />
                </div>
                
                <div className="flex mt-20px w-default">
                    <div>
                        <LeftMenu
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            selectedSubTab={selectedSubTab} 
                            setSelectedSubTab={setSelectedSubTab}
                            array={LeftMenuArray}
                        />
                    </div>

                    <div className="ml-20px w-1040px">
                        <Route exact path="/gameresults/sports/win-draw-lose">
                            <WinDrawLose />
                        </Route>
                        <Route exact path="/gameresults/sports/handicap">
                            <WinDrawLose pageTitle="핸디캡" />
                        </Route>
                        <Route exact path="/gameresults/sports/unover">
                            <WinDrawLose pageTitle="언오버" />
                        </Route>
                        <Route exact path="/gameresults/sports/special">
                            <WinDrawLose pageTitle="스페셜" />
                        </Route>
                        <Route path="/gameresults/minigame">
                            <MinigameResults />
                        </Route>

                        <Route path="*">
                        </Route>
                    </div>
                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default GameResultsPage

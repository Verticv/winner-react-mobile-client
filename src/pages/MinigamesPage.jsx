import HorizontalMenu3 from 'components/horizontalMenus/HorizontalMenu3'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import Cart from 'components/bottomNavbar/Cart'
import React, { useEffect, useState } from 'react'
import PowerballIcon from '../images/minigames/powerball.png'
import PowerLadder from '../images/minigames/powerladder.png'
import SpeedKino from '../images/minigames/speedkino.png'
import KinoLadder from '../images/minigames/kinoladder.png'
// import MinigamesRightPanel from 'components/minigames/MinigamesRightPanel'
import MinigamesPanel from 'components/minigames/MinigamesPanel'
import { Route, useLocation } from 'react-router'
import "./IframeStyle.css"

const MinigamesPage = ({isAuthenticated, setAuthenticated}) => {

    const GameTypeArray = [
        { id: 0, img: PowerballIcon, text:"파워볼", textColor: '#d75bc3', time: "02:16", path: "/minigame/powerball" },
        { id: 1, img: PowerLadder, text:"파워사다리", textColor: '#4479be', time: "02:50", path: "/minigame/powerladder" },
        { id: 2, img: SpeedKino, text:"스피드키노", textColor: '#da644c', time: "02:50", path: "/minigame/speedkino" },
        { id: 3, img: KinoLadder, text:"키노사다리", textColor: '#d5a53f', time: "02:50", path: "/minigame/kinoladder" },
    ]

    const [selectedGame, setSelectedGame] = useState(window.location.pathname)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedOption, setSelectedOption] = useState([
        {
            type: "",
            name: "",
            selection: "",
            buttonType: "",
            subtitle: null
        }
    ])
    console.log(`selectedOption`, selectedOption)

    const location = useLocation();

    useEffect(() => {
        setSelectedTab(0)
    }, [location]);

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    return (
        <div style={{maxWidth: '1242px'}} className="relative flex flex-col justify-center">
            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div style={{marginBottom: "7rem"}} className="w-full flex flex-col items-center">
                <div className="w-full">
                
                <div style={{padding: '0 2.0625rem 0 2.0625rem'}}>
                <Route path="/minigame/powerball">
                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerball"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                </Route>
                <Route path="/minigame/powerladder">
                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerladder"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                </Route>
                <Route path="/minigame/speedkino">
                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/speedkino"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                </Route>
                <Route path="/minigame/kinoladder">
                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/kinoladder"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                </Route>
                </div>

                    <div className="flex w-full -mt-2">
                        <div 
                            style={{backgroundColor:"#e8e8e8", height: windowDimensions.width < 768 ? "60rem" : "42rem"}}
                            className="rounded-xl  flex justify-center overflow-hidden border border-gray-dddddd"
                        >
                            <Route path="/minigame/powerball">
                                <div className='powerball_top'>
                                    <div className='powerball_area'>
                                        <iframe id="game_frame" src="https://ntry.com/scores/powerball/live.php" scrolling="no" frameborder="0" title="powerball"></iframe>
                                    </div>
                                </div>
                            </Route>
                            <Route path="/minigame/powerladder">
                                <div className='powerball_top'>
                                    <div className='powerball_area'>
                                        <iframe id="game_frame" src="https://ntry.com/scores/power_ladder/live.php" scrolling="yes" frameborder="0" title="powerball"></iframe>
                                    </div>
                                </div>
                            </Route>
                            <Route path="/minigame/speedkino">
                                <div className='powerball_top'>
                                    <div className='powerball_area'>
                                        <iframe id="game_frame" src="https://ntry.com/scores/speedkeno/live.php" scrolling="yes" frameborder="0" title="powerball"></iframe>
                                    </div>
                                </div>
                            </Route>
                            <Route path="/minigame/kinoladder">
                                <div className='powerball_top'>
                                    <div className='powerball_area'>
                                        <iframe id="game_frame" src="https://ntry.com/scores/keno_ladder/live.php" scrolling="yes" frameborder="0" title="kinoladder"></iframe>                            
                                    </div>
                                </div>
                            </Route>
                        </div>
                        {/* <MinigamesRightPanel selectedGame={selectedGame} selectedOption={selectedOption}/> */}
                    </div>

                    <div className="mb-28">
                        <MinigamesPanel selectedGame={selectedGame} setSelectedGame={setSelectedGame} setSelectedOption={setSelectedOption} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    </div>

                    <Cart selectedOption={selectedOption} />


                </div>
            </div>

        </div>
    )
}

export default MinigamesPage

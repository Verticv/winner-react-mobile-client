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


const MinigamesPage = ({isAuthenticated, setAuthenticated}) => {

    const GameTypeArray = [
        { id: 0, img: PowerballIcon, text:"파워볼", textColor: '#d75bc3', time: "02:16", path: "/minigame/powerball" },
        { id: 1, img: PowerLadder, text:"파워사다리", textColor: '#4479be', time: "02:50", path: "/minigame/powerladder" },
        { id: 2, img: SpeedKino, text:"스피드키노", textColor: '#da644c', time: "02:50", path: "/minigame/speedkino" },
        { id: 3, img: KinoLadder, text:"키노사다리", textColor: '#키노사다리', time: "02:50", path: "/minigame/kinoladder" },
    ]

    const [selectedGame, setSelectedGame] = useState(window.location.pathname)
    const [selectedTab, setSelectedTab] = useState(0)
    const [iFrameWidth, setIFrameWidth] = useState(1242)
    const [iFrameHeight, setIFrameHeight] = useState(1242 * 1.34375)
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

    useEffect(() => {
        const body = document.querySelector('body');
        const bodyWidth = body.offsetWidth;
        if (bodyWidth <= 1242) {
            setIFrameWidth(bodyWidth)
            setIFrameHeight(bodyWidth * 1.34375)
        }
        window.addEventListener('resize', () => {
            const bodyWidth = body.offsetWidth
            if (bodyWidth <= 1242) {
                setIFrameWidth(bodyWidth)
                setIFrameHeight(bodyWidth * 1.34375)
              }
        });
    }, [])

    return (
        <div style={{maxWidth: '1242px'}} className="relative flex flex-col justify-center">

            <div className="w-full z-30 flex flex-col items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="w-full flex flex-col items-center">
                <div className="w-full">
                
                <div style={{padding: '0 2.0625rem'}}>
                    <Route path="/minigame/powerball">
                        <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerball"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                    </Route>
                </div>
                <Route path="/minigame/powerladder">
                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/powerladder"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                </Route>
                <Route path="/minigame/speedkino">
                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/speedkino"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                </Route>
                <Route path="/minigame/kinoladder">
                    <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={"/minigame/kinoladder"} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} />
                </Route>
                    {/* <HorizontalMenu3 itemsArray={GameTypeArray} selectedTab={selectedGame} setSelectedTab={setSelectedGame} setSelectedOption={setSelectedOption} setSelectedTab1={setSelectedTab} /> */}


                    <div className="flex w-full">
                        <div 
                            style={{backgroundColor:"#e8e8e8", height: `${iFrameHeight}px`}}
                            className="rounded-xl  flex justify-center overflow-hidden border border-gray-dddddd"
                        >
                            <Route path="/minigame/powerball">
                                <iframe src="https://ntry.com/scores/powerball/live.php" width={iFrameWidth} height={iFrameHeight} scrolling="yes" frameborder="0" style={{WebkitTransform:"scale(1)"}} title="powerball"></iframe>
                            </Route>
                            <Route path="/minigame/powerladder">
                                <iframe src="https://ntry.com/scores/power_ladder/live.php" width="860" height="640" scrolling="yes" frameborder="0" style={{WebkitTransform:"scale(0.795)", marginTop:"-66px"}} title="powerball"></iframe>
                            </Route>
                            <Route path="/minigame/speedkino">
                                <iframe src="https://ntry.com/scores/speedkeno/live.php" width="860" height="640" scrolling="yes" frameborder="0" style={{WebkitTransform:"scale(0.795)", marginTop:"-66px"}} title="powerball"></iframe>
                            </Route>
                            <Route path="/minigame/kinoladder">
                                <iframe src="https://ntry.com/scores/keno_ladder/live.php" width="860" height="640" scrolling="yes" frameborder="0" style={{WebkitTransform:"scale(0.795)", marginTop:"-66px"}} title="kinoladder"></iframe>                            
                            </Route>
                        </div>
                        {/* <MinigamesRightPanel selectedGame={selectedGame} selectedOption={selectedOption}/> */}
                    </div>

                    <div className="">
                        <MinigamesPanel selectedGame={selectedGame} setSelectedGame={setSelectedGame} setSelectedOption={setSelectedOption} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    </div>

                    <Cart selectedOption={selectedOption} />


                </div>
            </div>

        </div>
    )
}

export default MinigamesPage

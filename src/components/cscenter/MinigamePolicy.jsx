import React, { useState } from 'react'
import { Route, useHistory, useLocation } from 'react-router';
import HorizontalSubMenu1 from 'components/horizontalMenus/HorizontalSubMenu1'
import Icon1 from '../../images/cscenter/minigame/1.png'
import Icon2 from '../../images/cscenter/minigame/2.png'
import Icon3 from '../../images/cscenter/minigame/3.png'
import Icon4 from '../../images/cscenter/minigame/4.png'
import PowerballPolicy from '../../images/cscenter/minigame/powerball_policy.png'
import PowerladderPolicy from '../../images/cscenter/minigame/powerladder_policy.png'
import SpeedKinoPolicy from '../../images/newImages/new_speedkino_policy.png'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'


const HistoryMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {
    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    console.log(isHover)

    function TabsList({ items }) {

        
        return items.map((item, index) => {
            let isActive = pathname === item.path
            if (item.path.includes('/cscenter/all/policy/minigame')) {
                isActive = true
            }
           return (
                <button 
                    className={`${
                        isActive
                        ? "bg-blue-r0056a6" 
                        : "bg-white border border-gray-b7b7b7"
                    } w-1/2 rounded-full font-spoqaMedium`}
                    style={{height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '0.9375rem' : '' }`, borderWidth: `${pathname !== item.path && !isActive ? '0.1875rem' : ''}`}} 
                    key={item.id} 

                    onPointerDown={() => setHover(item.id)}
                    onPointerUp={() => {
                        history.push(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onPointerOut={() => setHover(null)}
                    onPointerCancel={() => setHover(null)}
                >
                    <div >
                        <div>
                            <span
                                className={`${
                                    isActive
                                    ? "text-white" 
                                    : "text-gray-r7b7b7b"
                                } font-spoqaMedium`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            )
        });
    }

    return (
        <div className="flex w-full font-spoqaMedium">
            <TabsList items={itemsArray} />
        </div>
    )
}

const MinigamePolicy = () => {

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(selectedSubTab, selectedTab)
    const tabsArray = [
        { text: "파워볼", icon: Icon1, id: 0, path: "/cscenter/all/policy/minigame/powerball" },
        { text: "파워사다리", icon: Icon2, id: 1, path: "/cscenter/all/policy/minigame/powerladder" },
        { text: "스피드키노", icon: Icon3, id: 2, path: "/cscenter/all/policy/minigame/speedkino" },
        { text: "키노사다리", icon: Icon4, id: 3, path: "/cscenter/all/policy/minigame/kinoladder" },
    ];

    const historyTabsArray = [
        { text: "스포츠게임", icon: Icon1, id: 0, path: "/cscenter/all/policy/sportsgame/soccer" },
        { text: "미니게임", icon: Icon2, id: 1, path: "/cscenter/all/policy/minigame/powerball" },
    ]
    
    return (
        <div>
            <div style={{margin: '1.875rem', marginTop: '0', marginBottom: '2.875rem'}}>
                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
            </div>
            <div className="w-full relative top-0">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                <div className="">
                    <div style={{marginLeft: '4.8rem'}} className=" flex flex-shrink-0 w-full font-spoqaMedium">
                        <HorizontalSubMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                    </div>
                </div>
            </div>

            

            <div style={{padding: '1.875rem'}} className="flex justify-center">

                <Route path="/cscenter/all/policy/minigame/powerball">
                    <img src={PowerballPolicy} alt="" />
                </Route>
                <Route path="/cscenter/all/policy/minigame/powerladder">
                    <img src={PowerladderPolicy} alt="" />
                </Route>
                <Route path="/cscenter/all/policy/minigame/speedkino">
                    <img src={SpeedKinoPolicy} alt="" />
                </Route>
                <Route path="/cscenter/all/policy/minigame/kinoladder">
                    <img src={PowerladderPolicy} alt="" />
                </Route>
            </div>

            <div style={{marginBottom: '14rem'}} />

            <BottomNavbar />

        </div>
    )
}

export default MinigamePolicy

import React, { useState } from 'react'
import HorizontalMenu2 from '../../horizontalMenus/HorizontalMenu2'

import Icon3 from '../../../images/newImages/minigameResults/1.png'
import Icon4 from '../../../images/newImages/minigameResults/2.png'
import Icon5 from '../../../images/newImages/minigameResults/3.png'
import Icon6 from '../../../images/newImages/minigameResults/4.png'

const tabsArray = [
  { text: "파워볼", path:"/mypage/gameresults/minigame/powerball", icon: Icon3, id: 0, number: 854 },
  { text: "파워사다리", path:"/mypage/gameresults/minigame/powerladder", icon: Icon4, id: 1, number: 234 },
  { text: "스피드키노", path:"/mypage/gameresults/minigame/speedkino", icon: Icon5, id: 2, number: 567 },
  { text: "키노사다리", path:"/mypage/gameresults/minigame/kinoladder", icon: Icon6, id: 3, custom: "mt-8px", number: 345 },
];


const MinigameTab = ({paddingLeft}) => {
    const [selectedTab, setSelectedTab] = useState(0)


    console.log(selectedTab)
 
    return (
        <div style={{maxWidth: '1242px'}} className="w-full flex flex-col -mt-8">
      
            <div className="w-full flex relative top-0">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                <div id='scroll-wrapper' style={{padding: '1.875rem', paddingRight: '0', paddingLeft: paddingLeft ? paddingLeft : '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full">
                        <HorizontalMenu2 width='18.325rem' imageWidth='8.6rem' itemsArray={tabsArray} isState={selectedTab} setSelectedTab={setSelectedTab} hasNumber={false} />
                    </div>
                </div>
                <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div>
              </div>
        </div>
    )
}

export default MinigameTab

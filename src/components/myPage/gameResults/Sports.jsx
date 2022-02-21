import React, { useState } from 'react'
import Icon1 from '../../../images/newImages/mainPage/icons/gameresults/icon_1.png'
import Icon2 from '../../../images/newImages/mainPage/icons/gameresults/icon_2.png'
import Icon3 from '../../../images/newImages/mainPage/icons/gameresults/icon_3.png'
import Icon4 from '../../../images/newImages/mainPage/icons/gameresults/icon_4.png'
import Icon5 from '../../../images/newImages/mainPage/icons/gameresults/icon_5.png'
import Icon6 from '../../../images/newImages/mainPage/icons/gameresults/icon_6.png'
import Icon7 from '../../../images/newImages/mainPage/icons/gameresults/icon_7.png'
import Icon8 from '../../../images/newImages/mainPage/icons/gameresults/icon_8.png'
import HorizontalMenu11 from 'components/horizontalMenus/HorizontalMenu11'

const tabsArray = [
  { text: "전체", icon: Icon1, id: 0, number: 854 },
  { text: "축구", icon: Icon2, id: 1, number: 567 },
  { text: "농구", icon: Icon3, id: 2, number: 227 },
  { text: "야구", icon: Icon4, id: 3, number: 407 },
  { text: "배구", icon: Icon5, id: 4, number: 0 },
  { text: "하키", icon: Icon6, id: 5, number: 0 },
  { text: "미식축구", icon: Icon7, id: 6, number: 0 },
  { text: "격투기", icon: Icon8, id: 7, number: 9 },
];


const Sports = ({paddingLeft}) => {
    const [selectedTab, setSelectedTab] = useState(0)


    console.log(selectedTab)
 
    return (
        <div style={{maxWidth: '1242px'}} className="w-full flex flex-col">
      
            <div className="w-full flex relative top-0">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                <div id='scroll-wrapper' style={{padding: '1.875rem', paddingRight: '0', paddingLeft: paddingLeft ? paddingLeft : '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full px-7">
                        <HorizontalMenu11 itemsArray={tabsArray} isState={selectedTab} setSelectedTab={setSelectedTab} />
                    </div>
                </div>
                {/* <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full left-0 z-50"></div> */}
              </div>
        </div>
    )
}

export default Sports

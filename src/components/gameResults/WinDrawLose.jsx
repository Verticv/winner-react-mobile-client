import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1';
import DateSearchBar from 'components/myPage/DateSearchBar';
import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination';
import React, { useState } from 'react'
import Icon1 from '../../images/gameResults/horizontalMenu/icon_1.png'
import Icon2 from '../../images/gameResults/horizontalMenu/icon_2.png'
import Icon3 from '../../images/gameResults/horizontalMenu/icon_3.png'
import Icon4 from '../../images/gameResults/horizontalMenu/icon_4.png'
import Icon5 from '../../images/gameResults/horizontalMenu/icon_5.png'
import Icon6 from '../../images/gameResults/horizontalMenu/icon_6.png'
import Icon7 from '../../images/gameResults/horizontalMenu/icon_7.png'
import Icon8 from '../../images/gameResults/horizontalMenu/icon_8.png'
import GameDetails from './GameDetails';

const WinDrawLose = ({pageTitle = "승무패"}) => {

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

    const [selectedTab, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)

    return (
        <div>
            <MyPageTitle title={pageTitle} />
            <div className="relative w-full mt-20px">
                <HorizontalMenu1 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
            </div>

            <DateSearchBar isGameResultsSearch={true} />

            <div className="mt-20px"/>
            <GameDetails />

            <div className="flex w-full justify-center mt-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default WinDrawLose

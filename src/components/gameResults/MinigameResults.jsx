import HorizontalMenu10 from 'components/horizontalMenus/HorizontalMenu10';
import DateSearchBar2 from 'components/myPage/DateSearchBar2';
import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination';
import React, { useState } from 'react'
import { Route } from 'react-router';
import Icon1 from '../../images/gameResults/minigame/1.png'
import Icon2 from '../../images/gameResults/minigame/2.png'
import Icon3 from '../../images/gameResults/minigame/3.png'
import Icon4 from '../../images/gameResults/minigame/4.png'
import PowerballResults from './PowerballResults';
import PowerladderResults from './PowerladderResults';
import PowerladderIcon from '../../images/gameResults/minigame/powerladder_icon.png'
import Sub3 from '../../images/myPage/betHistory/minigame/sub3.png'
import Sub4 from '../../images/myPage/betHistory/minigame/sub4.png'

const MinigameResults = ({pageTitle = "미니게임"}) => {

    const tabsArray = [
        { text: "파워볼", icon: Icon1, id: 0, path: "/gameresults/minigame/powerball" },
        { text: "파워사다리", icon: Icon2, id: 1, path: "/gameresults/minigame/powerladder" },
        { text: "스피드키노", icon: Icon4, id: 2, path: "/gameresults/minigame/speedkino" },
        { text: "키노사다리", icon: Icon3, id: 3, path: "/gameresults/minigame/kinoladder" },
    ];

    const [page, setPage] = useState(0)

    return (
        <div>
            <MyPageTitle title={pageTitle} />
            <div className="relative w-full mt-20px">
                <HorizontalMenu10 itemsArray={tabsArray}  />
            </div>

            <DateSearchBar2 />

            <div className="mt-20px"/>

            <Route path="/gameresults/minigame/powerball">
                <PowerballResults />
            </Route>
            <Route path="/gameresults/minigame/powerladder">
                <PowerladderResults icon={PowerladderIcon} />
            </Route>
            <Route path="/gameresults/minigame/speedkino">
                <PowerladderResults title="스피드키노" icon={Sub3} />
            </Route>
            <Route path="/gameresults/minigame/kinoladder">
                <PowerladderResults title="키노사다리" icon={Sub4} />
            </Route>

            <div className="flex w-full justify-center mt-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default MinigameResults

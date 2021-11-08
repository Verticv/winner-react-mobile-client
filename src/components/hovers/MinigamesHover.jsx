import React, { useState } from 'react'
import Powerball from '../../images/navbarHover/powerball_banner.png'
import PowerballHighlight from '../../images/navbarHover/powerball_banner_highlight.png'
import PowerLadder from '../../images/navbarHover/powerladder_banner.png'
import PowerLadderHighlight from '../../images/navbarHover/powerladder_banner_highlight.png'
import Speedkino from '../../images/navbarHover/speedkino_banner.png'
import SpeedkinoHighlight from '../../images/navbarHover/speedkino_banner_highlight.png'
import KinoLadder from '../../images/navbarHover/kinoladder_banner.png'
import KinoLadderHighlight from '../../images/navbarHover/kinoladder_banner_highlight.png'
import Expand from 'react-expand-animated'
import { useHistory } from 'react-router'

const MinigamesHover = ({selection}) => {

    const [selectedGame, setSelectedGame] = useState(false)
    const history = useHistory();

    const gamesArray = [
        { id: 0, background: Powerball, highlight: PowerballHighlight, imgText: "파워볼", color: "bg-purple-d03ab7 text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/powerball" },
        { id: 1, background: PowerLadder, highlight: PowerLadderHighlight, imgText: "파워사다리", color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/powerladder" },
        { id: 2, background: Speedkino, highlight: SpeedkinoHighlight, imgText: "스피드키노", color: "bg-red-db4a4a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/speedkino" },
        { id: 3, background: KinoLadder, highlight: KinoLadderHighlight, imgText: "키노사다리", color: "bg-green-e3ba3c text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/kinoladder" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className="relative group w-305px h-206px cursor-pointer limit:flex-shrink-1 flex-shrink-0 "
                onClick={() => history.push(item.path)}
                onMouseEnter={() => setSelectedGame(item.id)} 
                onMouseLeave={() => setSelectedGame(false)}
            >
                <img className={`opacity-100 group-hover:opacity-0 w-305px h-206px object-none object-left transition transition-opacity transform duration-200`} src={item.background} alt="game_image" />
                <img className={`opacity-0 group-hover:opacity-100 absolute top-0 transition transition-opacity transform duration-100 w-305px h-206px object-none object-left `} src={item.highlight} alt="game_image" />
                <div className="absolute bottom-0 h-20px w-170px right-0 flex items-center justify-center -mb-2px"><span className="group-hover:text-black font-spoqaBold tracking-tight text-12px text-gray-r616161">{item.imgText}</span></div>
                <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full shadow-plain4 ${selectedGame === item.id ? item.color : "bg-white text-gray-r888889"}`}>게임시작</div>
            </div>
        ));
    }

    return (
        <Expand
            open={selection === 4} 
            duration={200} 
            className="absolute w-full h-244px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px"
        >
            <div>
                <div className="flex limit:justify-center justify-start pt-6px h-244px">
                    <GamesList items={gamesArray} />
                </div>
            </div>
        </Expand>
    )
}

export default MinigamesHover

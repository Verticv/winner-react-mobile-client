import React from 'react'
import LolBanner from '../../images/navbarHover/lol_banner.png'
import LolBannerHighlight from '../../images/navbarHover/lol_banner_highlight.png'
import SuddenAttackBanner from '../../images/navbarHover/sudden_attack_banner.png'
import SuddenAttackBannerHighlight from '../../images/navbarHover/sudden_attack_banner_highlight.png'
import OverwatchBanner from '../../images/navbarHover/overwatch_banner.png'
import OverwatchBannerHighlight from '../../images/navbarHover/overwatch_banner_highlight.png'
import PubgBanner from '../../images/navbarHover/pubg_banner.png'
import PubgBannerHighlight from '../../images/navbarHover/pubg_banner_highlight.png'
import Expand from 'react-expand-animated'
import { useHistory } from 'react-router'

const EsportsHover = ({selection}) => {

    const history = useHistory();

    const gamesArray = [
        { id: 0, background: LolBanner, highlight: LolBannerHighlight, imgText: "게임시작", color: "group-hover:bg-purple-a898ee", btnText: "게임시작", class: "bg-opacity-25" },
        { id: 1, background: SuddenAttackBanner, highlight: SuddenAttackBannerHighlight, imgText: "화면구성설명", color: "group-hover:bg-red-db4a4a", btnText: "설명보기", class: "bg-opacity-25", path: "/esports/structure" },
        { id: 2, background: OverwatchBanner, highlight: OverwatchBannerHighlight, imgText: "단폴더베팅방법", color: "group-hover:bg-blue-r3384ca", btnText: "설명보기", class: "bg-opacity-25", path: "/esports/single" },
        { id: 3, background: PubgBanner, highlight: PubgBannerHighlight, imgText: "다폴더베팅방법", color: "group-hover:bg-teal-r4eb2ba", btnText: "설명보기", class: "bg-opacity-25", path: "/esports/multi" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className="relative group w-305px h-206px cursor-pointer limit:flex-shrink-1 flex-shrink-0" 
                onClick={() => history.push(item.path)}
            >
                <img className={`opacity-100 group-hover:opacity-0 w-305px h-206px object-none object-left`} src={item.background} alt="game_image" />
                <img className={`opacity-0 group-hover:opacity-100 absolute top-0 w-305px h-206px object-none object-left `} src={item.highlight} alt="game_image" />
                <div className="absolute bottom-0 h-20px w-175px right-0 flex items-center justify-center -mb-2px"><span className={`ml-10px group-hover:text-black font-spoqaBold tracking-tight text-12px text-gray-r616161 ${item.id === 0 && "ml-20px" }`}>{item.imgText}</span></div>
                <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full bg-white text-gray-r888889 group-hover:text-white shadow-plain4 ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <Expand
            open={selection === 3} 
            duration={200} 
            className="absolute w-full h-244px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px "
        >
            <div>
                <div className="flex limit:justify-center justify-start pt-6px h-244px">
                    <GamesList items={gamesArray} />
                </div>
            </div>
        </Expand>
    )
}

export default EsportsHover

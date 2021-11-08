import React from 'react'
import LebronBanner from '../../images/navbarHover/lebron_banner.png'
import LebronBannerHighlight from '../../images/navbarHover/lebron_banner_highlight.png'
import TennisBanner from '../../images/navbarHover/tennis_banner.png'
import TennisBannerHighlight from '../../images/navbarHover/tennis_banner_highlight.png'
import MessiBanner from '../../images/navbarHover/messi_banner.png'
import MessiBannerHighlight from '../../images/navbarHover/messi_banner_highlight.png'
import Expand from 'react-expand-animated'
import { useHistory } from 'react-router-dom'

const SportsHover = ({selection}) => {

    const gamesArray = [
        { 
            id: 0, 
            background: LebronBanner, 
            highlight: LebronBannerHighlight, 
            imgText: "라이브베팅", 
            color: "group-hover:bg-yellow-e3ba3c", 
            btnText: "게임시작", 
            class: "bg-opacity-25", 
        },
        { 
            id: 1, 
            background: TennisBanner, 
            highlight: TennisBannerHighlight, 
            imgText: "조합베팅", 
            color: "group-hover:bg-blue-r3384ca", 
            btnText: "게임시작", 
            class: "bg-opacity-25", 
            path: "/bet-combination" 
        },
        { 
            id: 2, 
            background: MessiBanner, 
            highlight: MessiBannerHighlight, 
            imgText: "스페셜", 
            color: "group-hover:bg-red-db4a4a", 
            btnText: "게임시작", 
            class: "bg-opacity-25", 
            path: "/bet-combination" 
        }
    ];

    function GamesList({ items }) {
        const history = useHistory();
        return items.map(item => (
            <>
                {item.external ? (
                    <a key={item.id} className="relative group w-305px h-206px cursor-pointer" href={item.external} >
                        <img className={`opacity-100 group-hover:opacity-0 w-305px h-206px object-none object-left`} src={item.background} alt="game_image" />
                        <img className={`opacity-0 group-hover:opacity-100 absolute top-0 w-305px h-206px object-none object-left`} src={item.highlight} alt="game_image" />
                        <div className="absolute bottom-0 h-20px w-170px right-0 flex items-center justify-center -mb-2px"><span className={`group-hover:text-black font-spoqaBold tracking-tight text-12px text-gray-r616161 ${item.id === 1 && "ml-6px"}`}>{item.imgText}</span></div>
                        <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full bg-white text-gray-r888889 group-hover:text-white group-hover:shadow-plain4 ${item.color}`}>게임시작</div>
                    </a>
                ) : (
                    <div key={item.id} className="relative group w-305px h-206px cursor-pointer" onClick={ () => history.push(item.path)} >
                        <img className={`opacity-100 group-hover:opacity-0 w-305px h-206px object-none object-left`} src={item.background} alt="game_image" />
                        <img className={`opacity-0 group-hover:opacity-100 absolute top-0 w-305px h-206px object-none object-left`} src={item.highlight} alt="game_image" />
                        <div className="absolute bottom-0 h-20px w-170px right-0 flex items-center justify-center -mb-2px"><span className={`group-hover:text-black font-spoqaBold tracking-tight text-12px text-gray-r616161 ${item.id === 1 && "ml-6px"}`}>{item.imgText}</span></div>
                        <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px ml-80px -mb-17px flex items-center justify-center rounded-full bg-white text-gray-r888889 group-hover:text-white shadow-plain4 ${item.color}`}>게임시작</div>
                    </div>
                )}
            
            </>
        ));
    }

    return (
        <Expand
            open={selection === 2} 
            duration={200} 
            className="absolute w-full h-244px bg-white bg-opacity-80 shadow-inner border-b-2 border-gray-300 space-y-50px"
        >
            <div style={{height: '244px'}}>
                <div className="flex justify-center pt-6px">
                    <GamesList items={gamesArray} />
                </div>
            </div>
        </Expand>
    )
}

export default SportsHover

import React from 'react'
import Expand from 'react-expand-animated'
import AugBanner from '../../images/navbarHover/aug_banner.png'
import AugBannerHighlight from '../../images/navbarHover/aug_banner_highlight.png'

const ARHover = ({selection}) => {

    const gamesArray = [
        { id: 0, background: AugBanner, highlight: AugBannerHighlight, imgText: "키론가상게임", color: "group-hover:bg-green-r7bd26a", btnText: "게임시작", class: "bg-opacity-25" }
    ];

    function GamesList({ items }) {
        return items.map(item => (
            <div key={item.id} className="relative group w-362px h-206px cursor-pointer flex justify-center" >
                <img className={`opacity-100 group-hover:opacity-0 w-362px h-206px object-none object-left`} src={item.background} alt="game_image" />
                <img className={`opacity-0 group-hover:opacity-100 absolute w-362px h-206px top-0 object-none object-left `} src={item.highlight} alt="game_image" />
                <div className="absolute bottom-0 h-20px w-170px right-0 flex items-center justify-center -mb-2px"><span className="ml-6px group-hover:text-black font-spoqaBold tracking-tight text-12px text-gray-r616161">{item.imgText}</span></div>
                <div className={`absolute bottom-0 font-spoqaBold text-12px w-80px h-25px -ml-60px -mb-17px flex items-center justify-center rounded-full bg-white text-gray-r888889 group-hover:text-white shadow-plain4 ${item.color}`}>게임시작</div>
            </div>
        ));
    }

    return (
        <Expand
            open={selection === 5} 
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

export default ARHover

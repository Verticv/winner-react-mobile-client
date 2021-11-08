import React from 'react'
import AsiaLogo from '../../images/gray/asia_gray_logo.png'
import BigLogo from '../../images/gray/big_gray_logo.png'
import DgLogo from '../../images/gray/dg_gray_logo.png'
import EvoLogo from '../../images/gray/evo_gray_logo.png'
import HabLogo from '../../images/gray/hab_gray_logo.png'
import MavLogo from '../../images/gray/mav_gray_logo.png'
import MicLogo from '../../images/gray/mic_gray_logo.png'
import NetLogo from '../../images/gray/net_gray_logo.png'
import PlgLogo from '../../images/gray/plg_gray_logo.png'
import PltLogo from '../../images/gray/plt_gray_logo.png'
import PraLogo from '../../images/gray/pra_gray_logo.png'
import QusLogo from '../../images/gray/qus_gray_logo.png'
import SexyLogo from '../../images/gray/sexy_gray_logo.png'
import SpaLogo from '../../images/gray/spa_gray_logo.png'
import TopLogo from '../../images/gray/top_gray_logo.png'
import WmLogo from '../../images/gray/wm_gray_logo.png'

const Footer2 = ({fullWidth = false}) => {

    const itemsClass = "flex items-center justify-center w-135px h-32px"

    const logosArray1 = [
        { logo: EvoLogo,  id: 0 },
        { logo: MicLogo, id: 1 },
        { logo: BigLogo, id: 2 },
        { logo: AsiaLogo, id: 3 },
        { logo: SexyLogo, id: 4 },
        { logo: DgLogo, id: 5 },
        { logo: PltLogo, id: 6 },
        { logo: PraLogo, id: 7 },
    ];

    const logosArray2 = [
        { logo: SpaLogo, id: 8 },
        { logo: TopLogo, id: 9 },
        { logo: HabLogo, id: 10 },
        { logo: WmLogo, id: 11 },        
        { logo: NetLogo, id: 12 },
        { logo: MavLogo, id: 13 },
        { logo: QusLogo, id: 14 },
        { logo: PlgLogo, id: 15 },
    ];

    function LogosList({ items }) {
        return items.map(item => (
            <div className={`${itemsClass} ${item.id === 7 && "-mt-8px"}`} key={item.id}><img src={item.logo} alt="logo" /></div>
        ));
    }

    return (
        <div className={`flex justify-center bg-gray-f9f9f9 h-114px ${fullWidth ? "w-1836px limit1836:w-screen" : "w-1300 limit:w-screen"} `}>
            <div className="flex flex-col w-default flex-shrink-0 items-center justify-center space-y-10px pl-20px">
                <div className="flex justify-between w-default pr-20px"><LogosList items={logosArray1} /></div>
                <div className="flex justify-between w-default pr-20px"><LogosList items={logosArray2} /></div>
            </div>
        </div>
    )
}

export default Footer2

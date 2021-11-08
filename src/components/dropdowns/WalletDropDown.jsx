import PointsApplyPopup from 'components/popups/PointsApplyPopup'
import PopupControls from 'components/popups/PopupControls'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import ChargeMoneyIcon from '../../images/wallet/charge_money_gradient.png'
import ChargeMoneyIconHighlight from '../../images/wallet/charge_money_highlight.png'
import ExchangeIcon from '../../images/wallet/exchange_icon_gradient.png'
import ExchangeIconHighlight from '../../images/wallet/exchange_icon_highlight.png'
import PointExchangeIcon from '../../images/wallet/point_exchange_gradient.png'
import PointExchangeIconHighlight from '../../images/wallet/point_exchange_highlight.png'

const WalletDropDown = () => {

    const [isPopupOpen, setPopupOpen] = useState(true)
    const history = useHistory();

    const menuArray = [
        { icon: ChargeMoneyIcon, iconHighlight: ChargeMoneyIconHighlight, text: "보유머니 충전", id: 0, path: "/money/charge" },
        { icon: ExchangeIcon, iconHighlight: ExchangeIconHighlight, text: "보유머니 환전", id: 1, path: "/money/exchange" },
        { icon: PointExchangeIcon, iconHighlight: PointExchangeIconHighlight, text: "포인트 전환", id: 2, path: "/mypage/points/points-apply" }
    ];

    const Cell = ({id, path,iconHighlight, icon, text}) => {
        const [selectedTab, setSelectedTab] = useState(null)
        return (
            <button 
                key={id} 
                className={`${selectedTab === id ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" : "bg-white"} flex w-full items-center p-4px h-40px rounded-full`} 
                onMouseOver={() => {setSelectedTab(id)}}
                onMouseLeave={() => setSelectedTab(null)}
                onPointerUp={() => {
                    if (id !== 2) {
                        history.push(path)
                        setSelectedTab(false)
                    }
                }}
            >
                <div className={`${selectedTab === id && "shadow-plain3"} bg-white rounded-full flex items-center justify-center flex-shrink-0`} >
                    <img className="object-none" src={selectedTab === id ? iconHighlight : icon} alt="icon"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label className={`${selectedTab === id ? "text-white" : "text-gray-subNavbar"} font-spoqaBold text-14px cursor-pointer tracking-tight`}>{text}</label>
                </div>
            </button>
        ) 
    }

    function MenuList({ items }) {
        return items.map(item => (
            <>
                {item.id === 2 ? (
                    <PopupControls 
                        buttonChild={<Cell id={item.id} path={item.path} iconHighlight={item.iconHighlight} icon={item.icon} text={item.text} />} 
                        isPopupOpen={isPopupOpen} 
                        setPopupOpen={setPopupOpen}
                    >
                        <PointsApplyPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                ) : (
                    <Cell id={item.id} path={item.path} iconHighlight={item.iconHighlight} icon={item.icon} text={item.text} />
                )}
                
            </>
        ));
    }

    return (
        <div className="relative bg-white shadow-plain rounded-20px bg-white w-184px h-126px p-2px flex flex-col items-center -mt-5px limit1600:-mr-28px mr-0px limit1600:-mt-5px -mt-16px">
            <div className="absolute top-0 -mt-2 ml-2 w-4 overflow-hidden inline-block">
                <div className="h-2 w-2 bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <div className="w-full space-y-px">
                <MenuList items={menuArray} />
            </div>
        </div>
    )
}

export default WalletDropDown

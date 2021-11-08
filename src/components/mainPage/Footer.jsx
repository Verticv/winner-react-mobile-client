import React from 'react'
import WinnerLogo from '../../images/gray/winner_dark_gray_logo.png'
import KakaoLogo from '../../images/footer/kakao.png'
import TelegramLogo from '../../images/footer/telegram.png'
import Adult from '../../images/footer/adult_icon.png'
import ClickBuy from '../../images/footer/click_buy.png'
import Click2Pay from '../../images/footer/click2pay.png'
import GameCare from '../../images/footer/game_care.png'
import MasterCard from '../../images/footer/master_card.png'
import Much from '../../images/footer/much.png'
import Net from '../../images/footer/net.png'
import PaySafe from '../../images/footer/pay_safe.png'
import Skrill from '../../images/footer/skrill.png'
import Visa from '../../images/footer/visa.png'
import { useHistory } from 'react-router'


const Footer = ({fullWidth = false}) => {

    const history = useHistory();

    const buttonClass = "text-gray-r8f8f8f hover:text-gray-600 text-left text-14px font-spoqaMedium tracking-tight"

    const logosArray = [
        { logo: Adult, size: "w-26px h-26px", id: 0 },
        { logo: Much, size: "", id: 1 },
        { logo: ClickBuy, size: "", id: 2 },
        { logo: Click2Pay, size: "", id: 3 },
        { logo: GameCare, size: "", id: 4 },
        { logo: Visa, size: "", id: 5 },
        { logo: MasterCard, size: "", id: 6 },
        { logo: PaySafe, size: "", id: 7 },
        { logo: Skrill, size: "", id: 8 },
        { logo: Net, size: "", id: 9 },
    ];

    function LogosList({ items }) {
        return items.map(item => (
            <div key={item.id} className={`flex items-center justify-center w-146px h-40px bg-gray-d2d2d2 rounded`}><img className={`${item.id === 6 && "-mb-px"} object-none w-full h-full`} src={item.logo} alt="logo" /></div>
        ));
    }

    return (
        <div className={`flex flex-col items-center bg-gray-ececec h-190px ${fullWidth ? "w-1836px limit1836:w-screen" : "w-1300 limit:w-screen"}`}>
            <div className="flex w-default h-138px mt-29px">
                {/* BREAK */}
                <div className="flex flex-col space-y-18px w-297px pr-24px flex-shrink-0">
                    <img className="w-130px h-32px object-none" src={WinnerLogo} alt="winner logo" />
                    <div className="grid grid-cols-3 w-265px gap-x-13px gap-y-2px">
                        <button className={buttonClass} onClick={() => history.push("/cscenter/contact/all")}>문의하기</button>
                        <button className={buttonClass} onClick={() => history.push("/cscenter/announcement")}>공지사항</button>
                        <button className={buttonClass} onClick={() => history.push("/cscenter/faq")}>자주묻는질문</button>
                        <button className={buttonClass} onClick={() => history.push("/cscenter/policy/sportsgame/soccer")}>베팅규정</button>
                        <button className={buttonClass} onClick={() => history.push("/gameresults/sports/win-draw-lose")}>경기결과</button>
                        <button className={buttonClass} onClick={() => history.push("/freeboard")}>게시판</button>
                    </div>
                </div>
                {/* BREAK */}
                <div className="flex flex-col items-center justify-start border-r border-l border-gray-d8d8d8 flex-shrink-0 pl-20px pr-30px h-91px w-163px">
                    <div className="flex items-center space-x-2px -mt-3px">
                        <img className="object-none w-59px h-53px" src={KakaoLogo} alt="kakao-icon" />
                        <span className="text-brown-r381d1e font-roboto text-12px tracking-wide mb-2px">test1234</span>
                    </div>
                    <div className="flex items-center space-x-2px">
                        <img className="object-none w-59px h-53px" src={TelegramLogo} alt="kakao-icon" />
                        <span className="text-blue-r2aa1d5 font-roboto text-12px tracking-wide mb-7px">test1234</span>
                    </div>
                </div>
                {/* BREAK */}
                <div className="flex justify-end w-801px h-90px">
                    <div className="grid grid-cols-5 gap-10px">
                        <LogosList items={logosArray} />
                    </div>
                </div>
                {/* BREAK */}
                
            </div>
            <div className="w-default flex justify-center mt-10px h-52px">
                <span className="font-roboto tracking-wide text-12px text-gray-a7a7a7">Copyright © WINNER. All rights reserved. </span>
            </div>
        </div>
    )
}

export default Footer

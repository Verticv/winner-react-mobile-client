import React, { useState } from 'react'
import { useLocation } from 'react-router';
import ArrowDown from '../../images/newImages/arrow-down.png'
import QIcon from '../../images/newImages/qa.png'
import Icon1 from '../../images/myPage/betHistory/ico_1.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/cscenter/8.png'
import Icon9 from '../../images/cscenter/9.png'
import Icon10 from '../../images/cscenter/10.png'
import HorizontalSubMenu from 'components/horizontalMenus/HorizontalSubMenu'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'

const Faq = () => {

    const tabsArray = [
        { text: "전체", icon: Icon1, id: 0, path: "/cscenter/faq" },
        { text: "카지노", icon: Icon2, id: 1, path: "/cscenter/faq/live-casino" },
        { text: "슬롯", icon: Icon3, id: 2, path: "/cscenter/faq/slot" },
        { text: "스포츠", icon: Icon4, id: 3, path: "/cscenter/faq/sports" },
        { text: "e-스포츠", icon: Icon5, id: 4, path: "/cscenter/faq/e-sports" },
        { text: "미니게임", icon: Icon6, id: 5, path: "/cscenter/faq/minigame" },
        { text: "키론가상게임", icon: Icon7, id: 6, path: "/cscenter/faq/ar-game" },
        { text: "충전/환전", icon: Icon8, id: 7, path: "/cscenter/faq/transaction" },
        { text: "베팅관련", icon: Icon9, id: 8, path: "/cscenter/faq/about-betting" },
        { text: "기타", icon: Icon10, id: 9, path: "/cscenter/faq/other" },
    ];

    const location = useLocation();
    const [openedCell, setOpenedCell] = useState(null)
    const [, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(`selectedSubTab`, selectedSubTab)

    const questionArray = [
        { id: 0, type: "충전/환전", text: "첫, 매충 10% 포인트를 받으면 롤링을 어떻게 해야 환전가능한가요?" },
        { id: 1, type: "충전/환전", text: "1,000원 단위도 충전/환전 신청이 가능한가요?" },
        { id: 2, type: "충전/환전", text: "충전시 은행 입금자명이 달라도 처리가 가능한가요?" },
        { id: 3, type: "충전/환전", text: "출금(환전)시 예금주 변경 및 타명의 사용이 가능한가요?" },
        { id: 4, type: "베팅관련", text: "최소 베팅금액, 최대 베팅금액, 최대 적중한도 금액은 얼마인가요?" },
        { id: 5, type: "충전/환전", text: "충전&환전 처리 시간은 어느 정도 소요되나요?" },
        { id: 6, type: "베팅관련", text: "베팅 취소는 가능한가요?" },
        { id: 7, type: "스포츠북", text: "스포츠북 라이브 베팅 목록 중, 경기 도중에 베팅한 경기가 사라지는 경우 베팅한 내역은 어떻게 처리되나요?" },
        { id: 8, type: "기타", text: "Winner 홈페이지에 접속이 잘 되지 않거나 사용도중 에러가 발생하는데 어떻게 해야 하나요?" },
        { id: 9, type: "기타", text: "이 사이트는 안전한가요?" },
        { id: 10, type: "기타", text: "중복 IP 또는 본인 아이디를 공유하여 사용이 가능한가요?" },
    ]

    const BodyText1 = '☞ 첫, 매충 10% 포인트를 받지 않을시 모든게임의 롤링은 단폴, 카지노 베팅 포함 100%만 해주시면 환전가능합니다.'
    const BodyText2 = '- 포인트 받지 않기를 원할시 : \n 충전 --> "보너스받기" 에서 "받지않기" 클릭하시고 충전신청해주시면 됩니다.'
    const BodyText3 = ' ☞ 첫, 매충 10%포인트를 받았을시 각게임당 아래와 같이 롤링해 주시면 됩니다. '
    const BodyText4 = '언제나 고객에게 최상의 서비스 제공을 할 수 있도록 노력하는 \n 『 Winner 』가 되겠습니다.'

    const QuestionCell = ({type, text, cellId}) => (
        <>
            <button 
                style={{zIndex: 2, padding: '2.625rem 0' , borderRadius: '2.8125rem', marginBottom: '1.875rem'}}
                className="bg-white relative shadow-subNavbar w-full flex items-center justify-between border z-20 group hover:shadow-plain" 
                onClick={() => {
                    if (openedCell === cellId) {
                        setOpenedCell(null) 
                    } else {
                        setOpenedCell(cellId)
                    }
                }}
            >
                <img style={{width: '5.5625rem', height: '5.0625rem', marginLeft: '2.375rem'}} className="object-contain" src={QIcon} alt="" />
                <div className="w-full h-full flex-col flex flex-wrap justify-center items-start ml-8"> 
                    <div 
                        style={{backgroundColor:"#8494a4", fontSize: '2.4375rem', padding: '0.35rem 1.8rem', paddingBottom: '0', width: 'fit-content', marginBottom: '0.7rem'}} 
                        className="rounded-full flex items-center w-full justify-center text-white font-spoqaMedium tracking-tight"
                    > 
                        {type}
                    </div>
                    <p style={{fontSize: '2.625rem', lineHeight: '1.2'}} className="font-spoqaMedium w-full text-left tracking-tight text-gray-r585858 group-hover:text-black">{text}</p>
                </div>
                <img style={{width: '3.1875rem', marginRight: '4.5rem', marginLeft: '3.125rem'}} className={`${openedCell === cellId && "transform rotate-180"} h-8`} src={openedCell === cellId ? ArrowDown : ArrowDown} alt="" />
            </button>
            {openedCell === cellId && (
                <div 
                    style={{zIndex: 1, backgroundColor: "#fcfcfc", paddingLeft: '1.875rem', paddingRight: '1.875rem', marginBottom: '1.875rem', borderRadius: '2.8125rem'}} 
                    className="flex h-full items-start justify-start w-full z-0 border border-gray-dddddd -mt-24 pt-24"
                >
                    <div style={{fontSize: '2.625rem'}} className="flex flex-col">
                        <div style={{marginBottom: '5.875rem'}} className="font-spoqa tracking-tight text-gray-r585858">
                            <span style={{color: "#2980b9"}} className="" >
                                No.1
                            </span> 
                            그 이상.! 최고를 넘어선 『 Winner 』입니다.
                        </div>

                        <div style={{marginBottom: '5.875rem'}} className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText1.split('\n').map((item, i) => 
                                <p key={i} className={`flex items-center`}>{item}</p>
                            )}
                        </div>
                        <div className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText2.split('\n').map((item, i) => 
                                <p key={i} className={`flex items-center`}>{item}</p>
                            )}
                        </div>
                        <div className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText3.split('\n').map((item, i) => 
                                <p key={i} className={`flex items-center`}>{item}</p>
                            )}
                        </div>
                        <div className="font-spoqa tracking-tight text-gray-r585858">
                            - 스포츠 : <span style={{color: "#c0392b"}} className="">두폴더 이상 </span> 롤링 100% 최대 30만원 
                        </div>
                        <div className="font-spoqa tracking-tight text-gray-r585858 ">
                            - 스포츠단폴더, 키론가상게임, 미니게임, 카지노 : <span style={{color: "#c0392b"}} className="">이용불가</span>
                        </div>
                        <div className="font-spoqa tracking-tight text-gray-r585858">
                            - 스포츠 2폴더 이상 100% 롤링 후 이용 가능
                        </div>
                           
                        <div style={{marginBottom: '5.875rem'}} className="font-spoqa tracking-tight text-gray-r585858">
                            스포츠 단폴더, 타 게임 이용 가능하며, 스포츠 2폴더 100% 롤링 전 타게임 이용시 보유금 <span style={{color: "#c0392b"}} className="">전액 몰수처리</span>
                        </div>

                        <div style={{marginBottom: '5.875rem'}} className="font-spoqa tracking-tight text-gray-r585858">
                            ※ 모든게임의 롤링적용시점은 게임이 끝나서 마감처리된 때입니다. 이후에 출금신청해주셔야 처리가능합니다.
                        </div>

                        <div className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText4.split('\n').map((item, i) => 
                                <span key={i} className={`flex items-center`}>{item}</span>
                            )}
                        </div>
                        <div style={{marginBottom: '4.625rem'}} className="font-spoqa  tracking-tight text-gray-r585858 flex items-center">
                            감사합니다.
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    )

    function MenuList({ items }) {
        
        return items.map(item => (
            <QuestionCell type={item.type} text={item.text} cellId={item.id} />
        )
    )}

    return (
        <div>
            <div className="w-full relative top-0 z-40">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                <div style={{paddingLeft: '1.875rem'}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full">
                    <HorizontalSubMenu itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                    </div>
                </div>
            </div>

            <div style={{margin: '1.875rem', marginBottom: '14rem'}} className="">
                <MenuList items={questionArray} />
            </div>

            <BottomNavbar />
        </div>
    )
}

export default Faq

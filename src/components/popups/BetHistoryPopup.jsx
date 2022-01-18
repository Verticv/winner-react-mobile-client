import React, { useState } from 'react'
import BoardComposeViewPanel from 'components/common/cards/BoardComposeViewPanel';
// import CloseIcon from '../../images/popups/close.png'
import CloseIcon from '../../images/newImages/points-close.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/myPage/betHistory/ico_8.png'
import Icon9 from '../../images/myPage/betHistory/ico_9.png'
// import SportsBetHistory from 'components/myPage/betHistory/SportsBetHistory'
import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu'
// import SubHorizontalMenu from 'components/myPage/betHistory/SubHorizontalMenu'
// import AllIcon from '../../images/myPage/betHistory/all.png'
// import EvoIcon from '../../images/myPage/betHistory/evolution.png'
// import AsiaIcon from '../../images/myPage/betHistory/asia.png'
// import PragIcon from '../../images/myPage/betHistory/pragmatic.png'
// import DgIcon from '../../images/myPage/betHistory/dg.png'
// import SexyIcon from '../../images/myPage/betHistory/sexy.png'
// import BigIcon from '../../images/myPage/betHistory/big.png'
// import AllIcon1 from '../../images/myPage/betHistory/all.png'
// import Sub1 from '../../images/myPage/betHistory/slotGame/sub1.png'
// import Sub2 from '../../images/myPage/betHistory/slotGame/sub2.png'
// import Sub3 from '../../images/myPage/betHistory/slotGame/sub3.png'
// import Sub4 from '../../images/myPage/betHistory/slotGame/sub4.png'
// import Sub5 from '../../images/myPage/betHistory/slotGame/sub5.png'
// import Sub6 from '../../images/myPage/betHistory/slotGame/sub6.png'
// import Sub7 from '../../images/myPage/betHistory/slotGame/sub7.png'
// import Sub8 from '../../images/myPage/betHistory/slotGame/sub8.png'
// import Sub9 from '../../images/myPage/betHistory/slotGame/sub9.png'
// import Sub10 from '../../images/myPage/betHistory/slotGame/sub10.png'
// import Sub11 from '../../images/myPage/betHistory/slotGame/sub11.png'
// import Sub12 from '../../images/myPage/betHistory/slotGame/sub12.png'
// import Sub13 from '../../images/myPage/betHistory/slotGame/sub13.png'
// import Sub14 from '../../images/myPage/betHistory/slotGame/sub14.png'
// import Sub15 from '../../images/myPage/betHistory/slotGame/sub15.png'
// import Sub16 from '../../images/myPage/betHistory/minigame/sub1.png'
// import Sub17 from '../../images/myPage/betHistory/minigame/sub2.png'
// import Sub18 from '../../images/myPage/betHistory/minigame/sub3.png'
// import Sub19 from '../../images/myPage/betHistory/minigame/sub4.png'
// import Sub20 from '../../images/myPage/betHistory/ARGame/sub1.png'
// import Sub21 from '../../images/myPage/betHistory/ARGame/sub2.png'
// import Sub22 from '../../images/myPage/betHistory/ARGame/sub3.png'
// import Sub23 from '../../images/myPage/betHistory/ARGame/sub4.png'
// import Sub24 from '../../images/myPage/betHistory/ARGame/sub5.png'
// import Sub25 from '../../images/myPage/betHistory/ARGame/sub6.png'
// import Sub26 from '../../images/myPage/betHistory/ARGame/sub7.png'
// import LiveCasinoBetHistory from 'components/myPage/betHistory/LiveCasinoBetHistory'
// import SlotBetHistory from 'components/myPage/betHistory/SlotBetHistory'
// import MinigameBetHistory from 'components/myPage/betHistory/MinigameBetHistory'
// import ARGameBetHistory from 'components/myPage/betHistory/ARGameBetHistory'
// import ESportsBetHistory from 'components/myPage/betHistory/ESportsBetHistory'
// import Pagination from 'components/myPage/Pagination'

const BetHistoryPopup = ({setPopupOpen, setAttachedArray, attachedArray}) => {

    const tabsArray = [
        { text: "라이브카지노", icon: Icon2, id: 0 },
        { text: "슬롯게임", icon: Icon3, id: 1 },
        { text: "스포츠", icon: Icon4, id: 2, path: '/freeboard/compose'  },
        { text: "e-스포츠", icon: Icon5, id: 3},
        { text: "미니게임", icon: Icon6, id: 4 },
        { text: "키론가상게임", icon: Icon7, id: 5 },
        { text: "피싱게임", icon: Icon8, id: 6 },
        { text: "로터리게임", icon: Icon9, id: 7 }
    ];

    // const subTabsArray1 = [
    //     { text: "전체", icon: AllIcon, id: 0 },
    //     { text: "에볼루션", icon: EvoIcon, id: 1 },
    //     { text: "아시아게이밍", icon: AsiaIcon, id: 2 },
    //     { text: "프레그메틱플레이", icon: PragIcon, id: 3, custom: "mt-8px" },
    //     { text: "드림게이밍", icon: DgIcon, id: 4 },
    //     { text: "섹시게이밍", icon: SexyIcon, id: 5 },
    //     { text: "빅게이밍", icon: BigIcon, id: 6 },
    // ];

    // const subTabsArray2 = [
    //     { text: "전체", icon: AllIcon1, id: 0 },
    //     { text: "마이크로게이밍", icon: Sub1, id: 1 },
    //     { text: "YGG드라실", icon: Sub2, id: 2 },
    //     { text: "드라군소프트", icon: Sub3, id: 3, custom: "mt-8px" },
    //     { text: "분고", icon: Sub4, id: 4 },
    //     { text: "플레이슨", icon: Sub5, id: 5 },
    //     { text: "넷엔트", icon: Sub6, id: 6 },
    //     { text: "프레그메틱플레이", icon: Sub7, id: 7 },
    //     { text: "퀵스핀", icon: Sub8, id: 8 },
    //     { text: "스페이드", icon: Sub9, id: 9 },
    //     { text: "하바네로", icon: Sub10, id: 10 },
    //     { text: "월드매치", icon: Sub11, id: 11 },
    //     { text: "메버릭", icon: Sub12, id: 12 },
    //     { text: "플레이앤고", icon: Sub13, id: 13 },
    //     { text: "YL게이밍", icon: Sub14, id: 14 },
    //     { text: "레드타이거", icon: Sub15, id: 15 },
    // ];

    // const subTabsArray3 = [
    //     { text: "전체", icon: AllIcon1, id: 0 },
    //     { text: "파워볼", icon: Sub16, id: 1 },
    //     { text: "파워사다리", icon: Sub17, id: 2 },
    //     { text: "스피드키노", icon: Sub18, id: 3, custom: "mt-8px" },
    //     { text: "키노사다리", icon: Sub19, id: 4 },
    // ];
    
    // const subTabsArray4 = [
    //     { text: "전체", icon: AllIcon, id: 0 },
    //     { text: "축구", icon: Sub20, id: 1 },
    //     { text: "경마", icon: Sub21, id: 2 },
    //     { text: "개경주", icon: Sub22, id: 3 },
    //     { text: "레이싱", icon: Sub23, id: 4 },
    //     { text: "탁구", icon: Sub24, id: 5 },
    //     { text: "배드민턴", icon: Sub25, id: 6 },
    //     { text: "양궁", icon: Sub26, id: 7 },
    // ];

    const [selectedTab, setSelectedTab] = useState(2)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    

    console.log(`selectedSubTab`, selectedSubTab)

    return (
        <div style={{height:"100vh", width: '77.625rem' ,borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem'}} className="flex flex-col rounded-lg overflow-hidden">
            <div style={{height: '9.5rem'}} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label style={{fontSize: '3.75rem'}} className="font-spoqaBold text-white tracking-tight mt-2">베팅내역</label>
                <button style={{marginRight: '4.625rem'}} className="absolute right-0 cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                    <img style={{width: '3.1875rem', height: '3.1875rem'}} src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div style={{paddingBottom: '1.875rem'}} className="w-full h-full bg-white">

            <div className="w-full relative top-0">
                <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                <div id='scroll-wrapper' style={{padding: '1.875rem 0.625rem', paddingRight: '0', paddingBottom: 0}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full">
                    {/* <HorizontalMenu itemsArray={tabsArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} /> */}
                    <HorizontalMenu withoutFirst={false} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                    {/* {(selectedTab !== 0 && selectedTab !== 3 && selectedTab !== 4 && selectedTab !== 7 && selectedTab !== 8) && (
                        <div style={{marginLeft: `${selectedTab * 116 + 49}px`}} className={`absolute bottom-0 w-20px -mb-10px overflow-hidden inline-block `}>
                            <div className="h-10px w-10px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
                        </div>
                    )} */}
                    </div>
                </div>
                <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full top-0 left-0 z-50"></div>
            </div>
                
               

                

                <div style={{padding: '1.25rem 0'}} className="w-full">
                    <div 
                        style={{
                            height: '100vh',
                            width: '77.625rem',
                        }} 
                        className="overflow-y-auto hide-scrollbar"
                    >
                        {selectedTab === 0 ? (
                            <div className="-mt-20px">
                                {/* <LiveCasinoBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} />
                                <Pagination page={page} setPage={setPage}/>    */}
                            </div>
                        ) : selectedTab === 1 ? (
                            <div className="-mt-20px">
                                {/* <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} />
                                <Pagination page={page} setPage={setPage}/>    */}
                            </div>
                        ) : selectedTab === 2 ? (
                            // <div className="-mt-20px space-y-20px">
                            //     <SportsBetHistory  checkedState={checkedState} setCheckedState={setCheckedState} showSub={false} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen} />
                            //     <Pagination page={page} setPage={setPage}/>   
                            // </div>
                            <div style={{marginBottom:'5.625rem'}} className="w-full h-full">
                            <div style={{paddingBottom: '100rem'}}>
                                    <BoardComposeViewPanel attachedArray={attachedArray} setAttachedArray={setAttachedArray} type={0} winAmount="0"  isAttached={true} noButtons={true}/>
                                </div>
                            </div>
                        ) : selectedTab === 3 ? (
                            <div className="-mt-20px">
                                {/* <ESportsBetHistory /> */}
                            </div>
                        ) : selectedTab === 4 ? (
                            <div className="-mt-20px">
                                {/* <MinigameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false}  attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen1={setPopupOpen}/>
                                <Pagination page={page} setPage={setPage}/>    */}
                            </div>
                        ) : selectedTab === 5 ? (
                            <div className="-mt-20px">
                                {/* <ARGameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} />
                                <Pagination page={page} setPage={setPage}/>    */}
                            </div>
                        ) : selectedTab === 6 ? (
                            <div className="-mt-20px">
                                {/* <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} />
                                <Pagination page={page} setPage={setPage}/>    */}
                            </div>
                        ) : (
                            <>
                            </>
                        )}
                        
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default BetHistoryPopup

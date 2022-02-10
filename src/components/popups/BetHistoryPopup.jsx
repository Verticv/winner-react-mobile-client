import React, { useEffect, useState } from 'react'
import BoardComposeViewPanel from 'components/common/cards/BoardComposeViewPanel';
import CloseIcon from '../../images/newImages/points-close.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/myPage/betHistory/ico_8.png'
import Icon9 from '../../images/myPage/betHistory/ico_9.png'

import HorizontalMenu from 'components/horizontalMenus/FreeboardCompose'
import LiveCasinoBetHistory from 'components/myPage/betHistory/LiveCasinoBetHistory';
import Pagination from 'components/myPage/Pagination';
import SlotBetHistory from 'components/myPage/betHistory/SlotBetHistory';
import ESportsBetHistory from 'components/myPage/betHistory/ESportsBetHistory';
import MinigameBetHistory from 'components/myPage/betHistory/MinigameBetHistory';
import ARGameBetHistory from 'components/myPage/betHistory/ARGameBetHistory';
import DateSearchBar from 'components/myPage/DateSearchBar';

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
    
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [historySelectedSubTab, setHistorySelectedSubTab] = useState(0)
    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))

    const [page, setPage] = useState(0)

    useEffect(() => {
      setHistorySelectedSubTab(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return () => {};
    }, [selectedSubTab]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      return () => {};
    }, [selectedSubTab,selectedTab, historySelectedSubTab]);
    
    

    console.log(`selectedSubTab`, selectedSubTab)

    return (
        <div style={{height:"100vh", width: '77.625rem' ,borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem'}} className="flex flex-col rounded-lg overflow-hidden">
            <div style={{height: '9.5rem'}} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label style={{fontSize: '3.75rem'}} className="font-spoqaBold text-white tracking-tight mt-2">베팅내역</label>
                <button style={{marginRight: '4.625rem'}} className="absolute right-0 cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                    <img style={{width: '3.1875rem', height: '3.1875rem'}} src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div className="w-full h-full bg-white">

                <div className="w-full">
                    <div 
                        style={{
                            height: '100vh',
                            width: '77.625rem',
                        }} 
                        className="overflow-y-auto hide-scrollbar"
                    >

                        <div style={{paddingBottom: '1.875rem'}}  className="w-full relative top-0">
                            <div style={{background:"linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full right-0 z-50"></div>
                            <div id='scroll-wrapper' style={{padding: '1.875rem 1.875rem', paddingRight: '0', paddingBottom: 0}} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                <div className=" flex flex-shrink-0 w-full">
                                    <HorizontalMenu withoutFirst={false} setSelectedTab={setSelectedTab} itemsArray={tabsArray} selectedSubTab={selectedSubTab} setSelectedSubTab={setSelectedSubTab}/>
                                </div>
                            </div>
                            <div style={{background:"linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem'}} className="absolute h-full top-0 left-0 z-50"></div>
                        </div>

                        {selectedTab === 0 ? (
                            <>
                                <LiveCasinoBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab} isPopup={true} checkedState={checkedState} setCheckedState={setCheckedState} />
                                <div style={{marginTop: '1.25rem'}}>
                                    <Pagination page={page} setPage={setPage}/>
                                </div>
                            </>
                        ) : selectedTab === 1 ? (
                            <>
                                <SlotBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab}  isPopup={true} />
                                <div style={{marginTop: '1.25rem'}}>
                                    <Pagination page={page} setPage={setPage}/>
                                </div>
                            </>
                        ) : selectedTab === 2 ? (
                            // <div className="-mt-20px space-y-20px">
                            //     <SportsBetHistory  checkedState={checkedState} setCheckedState={setCheckedState} showSub={false} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen} />
                            //     <Pagination page={page} setPage={setPage}/>   
                            // </div>
                            <div style={{marginBottom:'5.625rem'}} className="w-full h-full">
                                <DateSearchBar isGameResultsSearch={true} />
                                <div style={{paddingBottom: '0.1rem'}}>
                                    <BoardComposeViewPanel attachedArray={attachedArray} setAttachedArray={setAttachedArray} type={0} winAmount="0"  isAttached={true} noButtons={true} checkedState={checkedState} setCheckedState={setCheckedState}/>
                                </div>
                                <div style={{paddingBottom: '1rem'}}>
                                    
                                    <div style={{marginTop: '1.25rem'}}>
                                        <Pagination page={page} setPage={setPage} />
                                    </div>
                                </div>
                                
                            </div>
                        ) : selectedTab === 3 ? (
                            <>
                                <ESportsBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab}  isPopup={true} />
                                {/* <div style={{marginTop: '1.25rem'}}>
                                    <Pagination page={page} setPage={setPage}/>
                                </div> */}
                            </>
                        ) : selectedTab === 4 ? (
                            <>
                                <MinigameBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab}  isPopup={true} />
                                <div style={{marginTop: '1.25rem'}}>
                                    <Pagination page={page} setPage={setPage}/>
                                </div>
                            </>
                        ) : selectedTab === 5 ? (
                            <>
                                <ARGameBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab}  isPopup={true} />
                                <div style={{marginTop: '1.25rem'}}>
                                    <Pagination page={page} setPage={setPage}/>
                                </div>
                            </>
                        ) : selectedTab === 6 ? (
                            <>
                                <SlotBetHistory isState={historySelectedSubTab} setState={setHistorySelectedSubTab}  isPopup={true} />
                                <div style={{marginTop: '1.25rem'}}>
                                    <Pagination page={page} setPage={setPage}/>
                                </div>
                            </>
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

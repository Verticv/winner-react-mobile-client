import SportsBetHistory from 'components/myPage/betHistory/SportsBetHistoryPanel';
import BetHistoryPopup from 'components/popups/BetHistoryPopup';
import PopupControls from 'components/popups/PopupControls';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

const FreeBoardCompose = () => {

    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [attachedArray, setAttachedArray] = useState([]);
    const AttachButton = (
        <button 
            style={{width: "115px", height: "35px", backgroundColor: "#41b06c"}}
            className="flex items-center justify-center rounded-md text-white text-14px tracking-tight font-spoqaMedium pt-px"
        >
            베팅내역첨부
        </button>
    )

    return (
        <div>
            
            <div className="w-full rounded-2xl shadow-subNavbar overflow-hidden">

                <div className="h-56px w-full bg-gray-fafafa border-b border-gray-dddddd">
                    <input 
                        className="bg-gray-fafafa outline-none w-full h-full px-20px text-14px font-spoqa tracking-tight placeholder-gray-r454545"
                        placeholder="제목을 입력하세요."
                    />
                </div>

                <div className="h-56px w-full bg-gray-fafafa border-b border-gray-dddddd px-20px flex items-center">

                    <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <BetHistoryPopup setPopupOpen={setPopupOpen} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                    </PopupControls> 
                    
                </div>

                {attachedArray.map(id => 
                    <div className="py-20px border-b border-gray-dddddd px-30px space-y-28px"> 
                        <SportsBetHistory type={id} id={id} isAttached={true} attachedArray={attachedArray} setAttachedArray={setAttachedArray}/>
                    </div>
                )}
                

                <div style={{height:"401px"}} className="w-full bg-white">
                    <textarea 
                        style={{resize: "none"}}
                        className="outline-none w-full h-full  px-19px py-19px text-14px font-spoqa tracking-tight placeholder-gray-r454545"
                        placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                    />
                </div>
            </div>


            <div className="flex w-full items-center justify-center space-x-5px mb-60px mt-20px">
                <button onClick={() => history.push("/freeboard")} className="flex items-center justify-center h-52px w-192px rounded-4px bg-blue-r0070d9">
                    <div className="flex items-center justify-center h-50px w-190px bg-black rounded-4px border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer pt-2px">
                        <span className="font-spoqaMedium tracking-tight text-16px text-white">작성하기</span>
                    </div>
                </button>
                <button onClick={() => history.push("/freeboard")} className="flex items-center justify-center w-192px h-52px rounded-md bg-gray-r171a1d">
                    <div className="flex items-center justify-center h-50px w-190px rounded-4px border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer pt-2px">
                        <span className="font-spoqaMedium tracking-tight text-16px text-white">취소하기</span>
                    </div>
                </button>
            </div>
            
            
        </div>
    )
}

export default FreeBoardCompose

import BoardViewPanel from 'components/common/cards/BoardViewPanel';
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
            style={{width: "19.3125rem", height: "6.75rem", fontSize: '2.4375rem', borderRadius: '1.25rem', backgroundColor: "#41b06c"}}
            className="flex items-center justify-center rounded-2xl text-white tracking-tight font-spoqaMedium"
        >
            베팅내역첨부
        </button>
    )

    return (
        <div style={{padding: '1.875rem'}}>
            
            <div className="w-full rounded-2xl shadow-subNavbar overflow-hidden">

                <div style={{height: '9.1875rem', borderBottomWidth: '0.1875rem', paddingLeft: '2.6875rem'}} className="w-full text-5xl bg-gray-fafafa border-b border-gray-ededed">
                    <input 
                        className="bg-gray-fafafa outline-none w-full h-full font-spoqaMedium tracking-tight place-color-grey-1"
                        placeholder="제목을 입력하세요."
                    />
                </div>

                <div style={{height: '9.1875rem', paddingLeft: '2.8125rem',  borderBottomWidth: '0.1875rem'}} className="w-full bg-gray-fafafa border-b border-gray-dddddd flex items-center">

                    <PopupControls buttonChild={AttachButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <BetHistoryPopup setPopupOpen={setPopupOpen} attachedArray={attachedArray} setAttachedArray={setAttachedArray} />
                    </PopupControls> 
                    
                </div>

                {attachedArray.map((id, index) => 
                    <div 
                        className={`${attachedArray.length - 1 === index ? "border-b border-gray-dddddd": ""}`}
                        style={{paddingBottom: `${attachedArray.length - 1 === index ? "3.75rem": ""}`}}
                        > 
                        <BoardViewPanel type={id} id={id} isAttached={true} attachedArray={attachedArray} setAttachedArray={setAttachedArray}/>
                    </div>
                )}
                

                <div style={{height:"70.25rem",paddingTop: '3.125rem', paddingLeft: '2.6875rem', fontSize: '2.8125rem'}} className="w-full bg-white">
                    <textarea 
                        style={{resize: "none"}}
                        className="outline-none w-full h-full font-spoqa tracking-tight placeholder-gray-r454545 place-color-grey-1"
                        placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
                    />
                </div>
            </div>


            <div style={{marginTop: '3.75rem', marginBottom: '19.6875rem', fontSize: '2.8125rem'}} className="flex w-full items-center justify-center">
                <button style={{height: '7.3125rem', padding: '1px'}} onClick={() => history.push("/freeboard")} className="flex items-center justify-center w-1/2 mr-4 rounded-lg bg-blue-r0070d9">
                    <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">작성하기</span>
                    </div>
                </button>
                <button style={{height: '7.3125rem', padding: '1px', fontSize: '2.8125rem'}} onClick={() => history.push("/freeboard")} className="flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d">
                    <div className="flex items-center justify-center w-full h-full rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">취소하기</span>
                    </div>
                </button>
            </div>
            
            
        </div>
    )
}

export default FreeBoardCompose

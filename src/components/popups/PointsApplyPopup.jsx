import React, { useState } from 'react'
import CloseIcon from '../../images/newImages/points-close.png'
import { useHistory } from 'react-router'
import WarningMessage from 'components/common/WarningMessage'

const PointsApplyPopup = ({setPopupOpen}) => {

    const history = useHistory()
    var nf = new Intl.NumberFormat();
    const [inputValue, setInputValue] = useState(null)

    return (
        <div style={{width: '72.125rem', maxWidth: '1154px', borderRadius: '3rem'}} className="flex flex-col rounded-lg overflow-hidden">
            <div style={{height: '9.5rem'}} className="relative bg-blue-r5d799c flex items-center justify-center flex-shrink-0">
                <label style={{fontSize: '3.75rem'}} className="font-spoqaBold text-white tracking-tight">포인트 전환 신청</label>
                <button style={{marginRight: '4.4375rem'}} className="absolute right-0 cursor-pointer z-20 hover:opacity-75" onClick={()=> setPopupOpen(false)}>
                    <img style={{width: '3.1875rem', height: '3.1875rem'}} src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div style={{padding: '1.875rem'}} className="w-full h-full bg-white">

                <WarningMessage 
                    title='확인/필독사항'
                    message1='포인트 전환 시 보유머니로 충전됩니다.'
                    mr1='13.5rem'
                    message2='최소 10,000P 이상 신청 가능합니다.'
                    mr2='6.875rem'
                    message3='자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.'
                />

                <div style={{margin: '1.0625rem 0', fontSize: '2.8125rem'}} className="flex items-center justify-center font-spoqaMedium text-gray-r7c7c7c tracking-tight">
                    <span>사용 가능한 포인트:</span>
                    <span className="text-blue-r0056a6 ml-2px -mt-1 font-robotoBold">278</span>
                    <span className="text-black -mt-1">P</span>
                </div>

                <div style={{padding: "4.75rem 0"}} className="w-full bg-gray-f9f9f9 border border-gray-dddddd rounded-2xl flex flex-wrap flex-col items-center justify-center">
                    <div className='w-full text-center'>
                        <span style={{fontSize: '2.8125rem'}} className="tracking-tight font-spoqaMedium text-gray-r454545">전환포인트 입력</span>
                    </div>
                    <div className='w-full text-center mt-15px'>
                        <input 
                            placeholder="0"
                            style={{height: '6.75rem', width: '36.625rem', fontSize: '2.8125rem', padding: '0 1.875rem'}}
                            className="flex-shrink-0 outline-none rounded-md border border-gray-dddddd font-spoqaMedium tracking-tight text-gray-r8c8c8c" 
                            value={inputValue !==null ? nf.format(inputValue) : ""}
                            onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </div>

                </div>

                <div style={{marginTop: '3.75rem', marginBottom: '1.875rem'}} className="flex w-full">
                    <button style={{padding: '0.1875rem', height: '7.3125rem', fontSize: '2.8125rem'}} className="flex items-center justify-center mr-4 w-1/2 rounded-lg bg-blue-r0070d9 hover:opacity-75">
                        <div 
                            style={{background:"linear-gradient(to bottom, #1491fc, #0675db)"}} 
                            className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r3ba3fc cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white">포인트전환</span>
                        </div>
                    </button>
                    <button 
                        style={{padding: '0.1875rem', height: '7.3125rem', fontSize: '2.8125rem'}}
                        className="flex items-center justify-center w-1/2 rounded-lg bg-blue-r004b8a hover:opacity-75"
                        onClick={() => history.push('/mypage/points/points-transaction-history')}
                    >
                        <div 
                            style={{background:"linear-gradient(to bottom, #004b8a, #012d53)"}} 
                            className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r2a699c cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-white">상세내역</span>
                        </div>
                    </button>
                </div>
            </div>

            
        </div>
    )
}

export default PointsApplyPopup

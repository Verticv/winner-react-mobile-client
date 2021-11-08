import React, { useState } from 'react'
import CheckboxIcon from '../../images/betCombination/checkbox.png'
import CancelIcon from '../../images/betCombination/cancel.png'
import BetIcon from '../../images/betCombination/bet_icon.png'
import CancelIconGray from '../../images/betCombination/cancel_gray.png'

const BetCombinationRightPanelCart = ({addedCard ,setAddedCard}) => {

    const [showConfirm, setShowConfirm] = useState(false)
    const [inputValue, setInputValue] = useState(null)
    var nf = new Intl.NumberFormat();
    
    const ConfirmCard = () => (
        <div 
            style={{height: "58px", backgroundColor: "#ed2f59", borderColor: "#a11735", borderRadius:"8px"}} 
            className="relative w-full rounded-md border"
        >
            <div className="flex">
                <img src={CheckboxIcon} alt="" className="mt-8px ml-9px" />
                <p className="text-14px text-white tracking-tight font-spoqaMedium h-14px flex items-center mt-11px ml-6px">베팅이 수락되었습니다.</p>
            </div>

            <div className="flex">
                <p className="text-14px text-white tracking-tight font-spoqaMedium h-14px flex items-center mt-7px ml-9px">티켓번호</p>
                <p style={{color:"#fde1a4"}} className="text-14px text-white tracking-tight font-roboto h-11px flex items-center mt-8px ml-5px">189106964</p>
            </div>

            <img src={CancelIcon} alt="" className="absolute right-10px top-10px cursor-pointer" onClick={() => setShowConfirm(false)} />
        </div>
    )

    const handleRemoveItem = (e) => {
        const id = e.target.getAttribute("name")
        setAddedCard(addedCard.filter(item => item.id !== id));
    };

    function BetCard({ items }) {
        return items.map(item => (
            <div
                style={{height:"87px", borderRadius: "8px"}}
                className="w-full border border-gray-cccccc"
                key={item.id}
            >
                <div
                    style={{
                        borderRadius:"7px", 
                        borderColor:"#fbddb1",
                        background: "linear-gradient(120deg, #ffffff, #e0e2e6)"
                    }}
                    className="relative h-full w-full border border-gray-cccccc"
                >
                    <p 
                        style={{color: item.value === "right" ? "#d52e2e" : "#454545"}} 
                        className="text-14px font-spoqaBold tracking-tight text-gray-r454545 h-14px flex items-center mt-10px ml-9px"
                    >
                        {item.value === "right" ? "SV Kuchl" : "FK Haugesund"}
                    </p>
                    <p 
                        style={{color: item.value === "right" ? "#454545" : "#d52e2e"}} 
                        className="text-14px font-spoqaBold tracking-tight h-14px flex items-center mt-8px ml-8px"
                    >
                        {item.value === "right" ? "FC Blau Weiss Linz" : "스트룀스고세 IF"}
                    </p>
                    <p className="text-13px font-spoqaMedium tracking-tight text-gray-r454545 h-14px flex items-center mt-13px ml-8px">축구 - 승무패 (게임)</p>
                    <img src={CancelIconGray} alt="" name={item.id} className="absolute top-8px right-8px cursor-pointer hover:opacity-75" onClick={handleRemoveItem} />
                    <div className="flex absolute bottom-9px right-10px text-13px tracking-tight font-spoqaMedium h-13px items-center text-gray-r454545">
                        <p>{item.value === "right" ? "승 @" : "패 @"}</p> 
                        <p 
                            style={{color: item.value === "right" ? "#d52e2e" : "#0056a6"}}
                            className="ml-2px"
                        >
                            {item.value === "right" ? "2.26" : "3.47"}
                        </p>
                    </div>
                </div>
            </div>
        ));
    }

    const BetAmountButton = ({amount, inputValue, setInputValue}) => (
        <button 
            style={{
                width:"95px", 
                borderColor: "#b3bac1",
                height:"46px"
            }} 
            className="flex items-center justify-center rounded-4px border hover:opacity-75"
            onClick={() => setInputValue(inputValue + amount)}
        >
            <div 
                style={{
                    background: "linear-gradient(to bottom, #feffff, #cedeed)",
                    borderRadius: "3px",
                }}  
                className="flex items-center justify-center border border-white cursor-pointer w-full h-full"
            >
                <span className="font-roboto tracking-tight text-16px text-gray-r585858 pt-px">{nf.format(amount)}</span>
            </div>
        </button>
    )


    return (
        <div style={{width:"307px"}}>
            <div className="bg-white border-b border-gray-dddddd pb-5px px-3px flex flex-col">
                {showConfirm && (
                    <>
                        <ConfirmCard />
                        <div className="mb-2px"></div>
                    </>
                )}

                {!addedCard.length ? (
                    <div style={{height: "38px", backgroundColor: "#e8e8e8"}} className="w-full rounded-md border border-gray-dddddd flex items-center px-8px">
                        <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545">베팅을 선택하세요.</p>
                    </div>
                ) : (
                    <div className="space-y-4px">
                        <BetCard items={addedCard} />
                    </div>
                )}
            </div>
            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-16px pt-px">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-r454545">보유금액</p>
                <p className="text-16px font-robotoBold tracking-tight text-blue-r0056a6">3,522,170</p>
            </div>

            <div className="h-34px border-b border-gray-dddddd flex  pl-11px pr-16px items-center justify-between bg-gray-fafafa pt-px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최소금액</p>
                <p style={{color: "#d52e2e"}} className="text-14px font-robotoRegular tracking-tight">5,000</p>
            </div>
            
            <div className="h-34px border-b border-gray-dddddd flex pl-11px pr-16px items-center justify-between bg-gray-fafafa pt-px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최대금액</p>
                <p className="text-14px font-robotoRegular tracking-tight">7,000,000</p>
            </div>

            <div className="h-34px border-b border-gray-dddddd flex pl-11px pr-16px items-center justify-between bg-gray-fafafa pt-px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">적중 최대금액</p>
                <p className="text-14px font-robotoRegular tracking-tight">20,000,000</p>
            </div>

            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-16px pt-2px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545">배당률합계</p>
                <p style={{color: "#f26522"}} className="text-14px font-roboto tracking-tight text-blue-r0056a6">1.00</p>
            </div>

            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-10px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545 pt-2px">베팅금액</p>
                <input 
                    style={{color: "#d52e2e", width: "191px", height: "32px", backgroundColor: "#e8e8e8"}} 
                    className="flex items-center justify-end px-5px border rounded-4px border-gray-dddddd text-14px font-roboto tracking-tight outline-none text-right pt-2px"
                    placeholder="0"
                    value={nf.format(inputValue)}
                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                />
            </div>

            <div className="h-47px border-b border-gray-dddddd flex items-center justify-between pl-11px pr-16px pt-2px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r454545">적중예상금액</p>
                <p className="text-14px font-roboto tracking-tight text-blue-r0056a6">11,000</p>
            </div>

            <div style={{height:"213px"}} className="w-full bg-gray-fafafa p-10px rounded-b-xl">

                <div style={{width:"287px"}} className="flex flex-col space-y-2px w-full">
                    <div className="flex space-x-2px">
                        <BetAmountButton amount={5000} inputValue={inputValue} setInputValue={setInputValue}/>
                        <BetAmountButton amount={10000} inputValue={inputValue} setInputValue={setInputValue}/>
                        <BetAmountButton amount={50000} inputValue={inputValue} setInputValue={setInputValue}/>
                    </div>
                    <div className="flex space-x-2px">
                        <BetAmountButton amount={100000} inputValue={inputValue} setInputValue={setInputValue}/>
                        <BetAmountButton amount={500000} inputValue={inputValue} setInputValue={setInputValue}/>
                        <BetAmountButton amount={1000000} inputValue={inputValue} setInputValue={setInputValue}/>
                    </div>
                </div>
                
                <div className="flex space-x-2px mt-2px">
                    <button 
                        style={{
                            width:"95px",
                            borderColor: "#171a1d",
                            height:"46px"
                        }} 
                        className="flex items-center justify-center rounded-4px border hover:opacity-75"
                        onClick={() => setInputValue(inputValue/2)}
                    >
                        <div 
                            style={{
                                borderRadius:"3px",
                                background: "linear-gradient(to bottom, #585b5e, #303337)",
                                borderColor:"#747679"
                            }} 
                            className="flex items-center justify-center h-full w-full border cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-white pt-2px">하프</span>
                        </div>
                    </button>
                    <button 
                        style={{
                            width:"95px",
                            borderColor: "#171a1d",
                            height:"46px"
                        }} 
                        className="flex items-center justify-center rounded-4px border hover:opacity-75"
                        onClick={() => setInputValue(3522170)}
                    >
                        <div 
                            style={{
                                borderRadius:"3px",
                                background: "linear-gradient(to bottom, #585b5e, #303337)",
                                borderColor:"#747679"
                            }} 
                            className="flex items-center justify-center h-full w-full border cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-white pt-2px">최대</span>
                        </div>
                    </button>
                    <button 
                        style={{
                            width:"95px",
                            borderColor: "#171a1d",
                            height:"46px"
                        }} 
                        className="flex items-center justify-center rounded-4px border hover:opacity-75"
                        onClick={() => setInputValue(0)}
                    >
                        <div
                            style={{
                                borderRadius:"3px",
                                background: "linear-gradient(to bottom, #585b5e, #303337)",
                                borderColor:"#747679"
                            }} 
                            className="flex items-center justify-center h-full w-full border cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-white pt-2px">정정</span>
                        </div>
                    </button>
                </div>

                <button 
                    style={{width:"287px"}}
                    className="mt-5px flex items-center justify-center h-46px rounded-4px bg-blue-r2068b2 hover:opacity-75"
                    onClick={() => {
                        setAddedCard([])
                        setShowConfirm(true)
                    }}
                >
                    <div style={{width:"285px"}} className="flex items-center justify-center h-44px rounded-4px border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                        <img src={BetIcon} alt="" />
                        <span className="ml-5px font-spoqaMedium tracking-tight text-16px text-white pt-px">베팅하기</span>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default BetCombinationRightPanelCart

import React, { useState } from 'react'
import CheckboxIcon from '../../images/newImages/cart-checkbox.png'
import CancelIcon from '../../images/newImages/cart-confirm-cancel.png'
import BetIcon from '../../images/newImages/dollar.png'
import CancelIconGray from '../../images/newImages/cart-cancel.png'

const BetCombinationRightPanelCart = ({addedCard ,setAddedCard}) => {

    const [showConfirm, setShowConfirm] = useState(false)
    const [inputValue, setInputValue] = useState(null)
    var nf = new Intl.NumberFormat();
    
    const ConfirmCard = () => (
        <div 
            style={{height: "11.125rem", borderWidth: '0.1875rem', marginBottom: "1rem", padding: '1.875rem', fontSize: '2.625rem', backgroundColor: "#ed2f59", borderColor: "#a11735"}} 
            className="relative w-full rounded-xl border"
        >
            <div className="flex">
                <img style={{width: '3.8125rem', height: '3.1875rem'}} src={CheckboxIcon} alt="" className="" />
                <p className="text-white ml-4 tracking-tight font-spoqaMedium flex items-center">베팅이 수락되었습니다.</p>
            </div>

            <div className="flex">
                <p className="text-white tracking-tight font-spoqaMedium flex items-center">티켓번호</p>
                <p style={{color:"#fde1a4"}} className="text-white tracking-tight ml-4 font-roboto flex items-center">189106964</p>
            </div>

            <img style={{width: '2.3125rem', height: '2.3125rem', top: '4rem', right: '3rem'}} src={CancelIcon} alt="" className="absolute cursor-pointer" onClick={() => setShowConfirm(false)} />
        </div>
    )

    const handleRemoveItem = (e) => {
        const id = e.target.getAttribute("name")
        setAddedCard(addedCard.filter(item => item.id !== id));
    };

    function BetCard({ items }) {
        return items.map(item => (
            <div
                style={{width: '73.5rem', borderRadius: "1.125rem", borderWidth: '0.1875rem', marginBottom: '0.5625rem'}}
                className="border border-gray-cccccc"
                key={item.id}
            >
                <div
                    style={{
                        borderRadius:"0.95rem", 
                        borderColor:"#fbddb1",
                        borderWidth: '0.1875rem',
                        fontSize: '2.625rem',
                        background: "linear-gradient(120deg, #ffffff, #e0e2e6)"
                    }}
                    className="relative h-full w-full border pl-6 border-gray-cccccc py-5 flex flex-col justify-center"
                >
                    <p 
                        style={{color: item.value === "right" ? "#d52e2e" : "#454545"}} 
                        className="font-spoqaBold tracking-tight text-gray-r454545 flex items-center"
                    >
                        {item.value === "right" ? "SV Kuchl" : "FK Haugesund"}
                    </p>
                    <p 
                        style={{color: item.value === "right" ? "#454545" : "#d52e2e"}} 
                        className="font-spoqaBold tracking-tight flex items-center"
                    >
                        {item.value === "right" ? "FC Blau Weiss Linz" : "스트룀스고세 IF"}
                    </p>
                    <p style={{fontSize: '2.4375rem'}} className="font-spoqaMedium mt-4 tracking-tight text-gray-r454545 flex items-center">축구 - 승무패 (게임)</p>
                    <img style={{width: '2.7rem', height: '2.7rem', right: '2rem'}} src={CancelIconGray} alt="" name={item.id} className="absolute cursor-pointer hover:opacity-75 object-contain" onClick={handleRemoveItem} />
                    <div style={{fontSize: '2.4375rem', right: '9rem'}} className="flex absolute tracking-tight font-spoqaMedium items-center text-gray-r454545 bottom-5">
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

    // const BetAmountButton = ({amount, inputValue, setInputValue}) => (
    //     <button 
    //         style={{
    //             width:"24.375rem",
    //             height: '7.5rem',
    //             padding: '1px',
    //             fontSize: '2.625rem',
    //             borderColor: "#b3bac1"
    //         }} 
    //         className="flex items-center justify-center rounded-lg border hover:opacity-75"
    //         onClick={() => setInputValue(inputValue + amount)}
    //     >
    //         <div 
    //             style={{
    //                 background: "linear-gradient(to bottom, #feffff, #cedeed)",
    //                 borderWidth: '0.1875rem'
    //             }}  
    //             className="flex items-center justify-center rounded-lg border border-white cursor-pointer w-full h-full"
    //         >
    //             <span className="font-roboto tracking-tight text-gray-r585858">{nf.format(amount)}</span>
    //         </div>
    //     </button>
    // )
    const [buttonClicked, setButtonClicked] = useState("")

    const BetAmountButton = ({amount}) => (
        <button 
            style={{
                width:"24.4rem",
                height: '7.5rem',
                // padding: '0.2rem',
                fontSize: '2.625rem',
                borderColor: "#b3bac1",
                borderRadius: '0.75rem'
            }} 
            className="flex rounded-lg flex-shrink-0 border"
            onPointerDown={() => setButtonClicked(amount)}
            onPointerUp={() => {
                setInputValue(inputValue + amount)
                setButtonClicked(null)
            }}
            onPointerOut={() => setButtonClicked(null)}
        >
            <div 
                style={{
                    borderRadius:"0.75rem",
                    background: buttonClicked === amount ? "linear-gradient(to bottom, #a8defd, #8dc6ee)" : "linear-gradient(to bottom, #feffff, #cedeed)",
                    borderWidth: "0.1875rem",
                    borderColor: "#fff",
                    // borderWidth: '0.1875rem'
                }} 
                className="flex items-center justify-center w-full h-full cursor-pointer">
                <span className="font-roboto tracking-tight text-gray-r585858">{nf.format(amount)}</span>
            </div>
        </button>
    )

    const BetFixedAmountButton = ({amount, text}) => (
        <button 
            style={{
                width:"24.4rem",
                height: '7.5rem',
                fontSize: '2.625rem',
                borderColor: "#171a1d",
                borderRadius: '0.75rem',
                backgroundColor: '#747679',
                // padding: '0.2rem',
            }} 
            className="flex rounded-lg flex-shrink-0 border hover:opacity-75"
            onClick={() => setInputValue(amount)}
        >
            <div 
                style={{
                    width: "100%",
                    borderRadius:"0.75rem",
                    borderWidth: "0.1875rem",
                    borderColor: "#747679",
                    background: "linear-gradient(to bottom, #585b5e, #303337)",
                }} 
                className="flex items-center justify-center h-full cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-white">{text}</span>
            </div>
        </button>
    )

    return (
        <div >
            <div style={{borderBottomWidth: '0.1875rem'}} className="bg-white border-b border-gray-dddddd flex flex-col">
                {showConfirm && (
                    <>
                        <ConfirmCard />
                        <div className="mb-2px"></div>
                    </>
                )}

                {!addedCard.length ? (
                    <div style={{height: "6.3125rem", paddingLeft: '1.7rem', marginBottom: '1.875rem', fontSize: '2.625rem', backgroundColor: "#e8e8e8"}} className="w-full rounded-2xl border border-gray-dddddd flex items-center">
                        <p className="font-spoqaMedium tracking-tight text-gray-r454545 mt-1">베팅을 선택하세요.</p>
                    </div>
                ) : (
                    <div style={{marginBottom: '2.0625rem'}} className="mb-6">
                        <BetCard items={addedCard} />
                    </div>
                )}
            </div>
            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '2.0625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545">보유금액</p>
                <p style={{fontSize: '3rem'}} className="font-robotoBold tracking-tight text-blue-r0056a6">3,522,170</p>
            </div>

            <div style={{height: '6.875rem', paddingLeft: '2.75rem', paddingRight: '2.0625rem', fontSize: '2.525rem', borderBottomWidth: '0.1875rem'}} className="pt-1 border-b bg-gray-fafafa border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최소금액</p>
                <p style={{color: "#d52e2e"}} className="font-robotoRegular tracking-tight">5,000</p>
            </div>
            
            <div style={{height: '6.875rem', paddingLeft: '2.75rem', paddingRight: '2.0625rem', fontSize: '2.525rem', borderBottomWidth: '0.1875rem'}} className="pt-1 border-b bg-gray-fafafa border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최대금액</p>
                <p className="font-robotoRegular tracking-tight text-gray-r454545">7,000,000</p>
            </div>

            <div style={{height: '6.875rem', paddingLeft: '2.75rem', paddingRight: '2.0625rem', fontSize: '2.525rem', borderBottomWidth: '0.1875rem'}} className="pt-1 border-b bg-gray-fafafa border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r7b7b7b">적중 최대금액</p>
                <p className="font-robotoRegular tracking-tight text-gray-r454545">20,000,000</p>
            </div>

            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '2.0625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="pt-2 border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545">배당률합계</p>
                <p style={{color: "#f26522"}} className="font-roboto tracking-tight text-blue-r0056a6">1.00</p>
            </div>

            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '0rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545 mt-2">베팅금액</p>
                <input 
                    style={{color: "#d52e2e", width: "36.875rem", height: "5.375rem", backgroundColor: "#e8e8e8", borderWidth: '0.1875rem'}} 
                    className="flex items-center justify-end pr-8 border rounded-lg border-gray-dddddd font-roboto tracking-tight outline-none text-right"
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

            <div style={{height: '6.875rem', paddingLeft: '1.8125rem', paddingRight: '2.0625rem', fontSize: '2.625rem', borderBottomWidth: '0.1875rem'}} className="pt-2 border-b border-gray-dddddd flex items-center justify-between">
                <p className="font-spoqaMedium tracking-tight text-gray-r454545">적중예상금액</p>
                <p className="font-roboto tracking-tight text-blue-r0056a6">11,000</p>
            </div>

            <div style={{marginTop: '2.125rem'}} className="w-full bg-white rounded-b-xl">

                <div className="flex flex-col w-full">
                    <div className="flex">
                        <div style={{marginRight: '0.3rem'}}>
                            <BetAmountButton amount={5000} inputValue={inputValue} setInputValue={setInputValue}/>
                        </div>
                        <div style={{marginRight: '0.3rem'}}>
                            <BetAmountButton amount={10000} inputValue={inputValue} setInputValue={setInputValue}/>
                        </div>
                        <BetAmountButton amount={50000} inputValue={inputValue} setInputValue={setInputValue}/>
                    </div>
                    <div style={{marginTop: '0.375rem', marginBottom: '0.375rem'}} className="flex">
                        <div style={{marginRight: '0.3rem'}}>
                            <BetAmountButton amount={100000} inputValue={inputValue} setInputValue={setInputValue}/>
                        </div>
                        <div style={{marginRight: '0.3rem'}}>
                            <BetAmountButton amount={500000} inputValue={inputValue} setInputValue={setInputValue}/>
                        </div>
                        <BetAmountButton amount={1000000} inputValue={inputValue} setInputValue={setInputValue}/>
                    </div>
                </div>
                
                <div style={{marginBottom: '0.6rem'}} className="flex">
                        <div style={{marginRight: '0.3rem'}} className="flex-shrink-0">
                            <BetFixedAmountButton amount={inputValue/2} text="하프" />
                        </div>
                        <div style={{marginRight: '0.3rem'}} className="flex-shrink-0">
                            <BetFixedAmountButton amount={3522170} text="최대" />
                        </div>
                        <div className="flex-shrink-0">
                            <BetFixedAmountButton amount={0} text="정정" />
                        </div>
                </div>
                <button 
                    style={{height: '9rem', padding: '1px', fontSize: '3.1875rem'}}
                    className="flex items-center w-full justify-center rounded-lg bg-blue-r2068b2 hover:opacity-75"
                    onClick={() => {
                        setAddedCard([])
                        setShowConfirm(true)
                    }}
                >
                    <div className="flex items-center justify-center w-full h-full rounded-lg border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                        <img style={{width: '3.1875rem', height: '3.1875rem'}} src={BetIcon} alt="" />
                        <span style={{marginLeft: '1.3125rem'}} className="font-spoqaMedium tracking-tight text-white mt-1">베팅하기</span>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default BetCombinationRightPanelCart

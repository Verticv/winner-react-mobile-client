import React from 'react'
import BlueButton from '../../../images/minigames/blue.png'
import RedButton from '../../../images/minigames/red.png'
import YellowButton from '../../../images/minigames/yellow.png'
import GreenButton from '../../../images/minigames/green.png'
import RedButtonPressed from '../../../images/minigames/red_pressed.png'
import BlueButtonPressed from '../../../images/minigames/blue_pressed.png'
import GreenButtonPressed from '../../../images/minigames/green_pressed.png'
import YellowButtonPressed from '../../../images/minigames/yellow_pressed.png'

const PowerballGame = ({state, setChosen, setSelectedOption}) => {


    const BetOptions = ({
        width = 28.625, 
        height = 23.375,
        gradient1 = "#fffad8",
        gradient2 = "#ffe9bf",
        titleBg = "#b4a289",
        titleNumber = 1,
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
    }) => (
        <div
            style={{
                width: width + "rem", 
                height: height+ "rem",
                background: "linear-gradient(to bottom, #dddddd, #bcbcbc)",
                borderRadius:"6px",
                marginBottom: '0.375rem'
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{
                    width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    backgroundColor: "#fdfdf8",
                    borderRadius:"5px"
                }}
                className={`flex items-center`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                        borderRadius: "5px"
                    }}
                    className="w-full h-full rounded-b flex flex-wrap items-start justify-start border-t border-white"
                >

                    <div style={{height: '5.8125rem', borderBottomWidth: '0.1875rem'}} className="border-b border-gray-c7b9a6 flex flex-shrink-0 items-center justify-center w-full">
                        <div 
                            style={{height:"3.9375rem",width: '15.9375rem' , backgroundColor: titleBg, fontSize: '2.25rem'}} 
                            className="flex-shrink-0 shadow-plain2 rounded-md border border-white flex flex-col items-center justify-center tracking-tight text-white"
                        >
                            <p className="font-spoqaMedium">[{titleNumber}게임] 파워볼</p>
                        </div>

                        <div style={{fontSize: '2.625rem', marginLeft: '0.75rem'}} className="h-full flex flex-col items-center justify-center">
                            <div className="tracking-tight text-gray-r585858 font-spoqaMedium flex items-center">{subText} {subText2 ? `/${subText2}` : ''} </div>
                            {/* {subText2 !== null && (
                                <div className="tracking-tight text-gray-r585858 font-spoqaMedium flex items-center">{subText2}</div>
                            )} */}
                        </div>
                    </div>

                    {/* <div style={{height:"76px", width:"2px"}} className="flex flex-shrink-0 pt-3px">
                        <div style={{backgroundColor: dividerColor}} className="h-full w-px"></div>
                        <div style={{backgroundColor:"#ffffff"}} className="h-full w-px"></div>
                    </div> */}

                    {titleNumber === 1 || titleNumber === 6 ? (
                        <div className="flex justify-center w-full items-center">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{type:"파워볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">홀</p>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">1.95</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{type:"파워볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">짝</p>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">1.95</p>
                            </div>
                        </div>
                    ) : titleNumber === 2 || titleNumber === 7 ? (
                        <div className="flex justify-center w-full items-center">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        if (titleNumber === 2) {
                                            setSelectedOption([{type:"파워볼", name:"언오버", selection:"언더", buttonType:"blue", subtitle: "4.5"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"언오버", selection:"언더", buttonType:"blue", subtitle: "72.5"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">언더</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                            {titleNumber === 2 ? "4.5" : "72.5"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">1.95</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        if (titleNumber === 2) {
                                            setSelectedOption([{type:"파워볼", name:"언오버", selection:"오버", buttonType:"red", subtitle: "4.5"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"언오버", selection:"오버", buttonType:"red", subtitle: "72.5"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">오버</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                            {titleNumber === 2 ? "4.5" : "72.5"}
                                        </p>
                                    </div>  
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">1.95</p>
                            </div>
                        </div>
                    ) : titleNumber === 3 || titleNumber === 8 ? (
                        <div className="flex justify-center w-full items-center">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{type:"파워볼", name:"홀짝/언오버", selection:"홀언더", buttonType:"blue", subtitle: "4.5"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"홀짝/언오버", selection:"홀언더", buttonType:"blue", subtitle: "72.5"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀언더</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                            {titleNumber === 3 ? "4.5" : "72.5"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">3.75</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{type:"파워볼", name:"홀짝/언오버", selection:"홀오버", buttonType:"blue", subtitle: "4.5"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"홀짝/언오버", selection:"홀오버", buttonType:"blue", subtitle: "72.5"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀오버</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                            {titleNumber === 3 ? "4.5" : "72.5"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">3.75</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{type:"파워볼", name:"홀짝/언오버", selection:"짝언더", buttonType:"red", subtitle: "4.5"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"홀짝/언오버", selection:"짝언더", buttonType:"red", subtitle: "72.5"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝언더</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                            {titleNumber === 3 ? "4.5" : "72.5"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">3.75</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        if (titleNumber === 3) {
                                            setSelectedOption([{type:"파워볼", name:"홀짝/언오버", selection:"짝오버", buttonType:"red", subtitle: "4.5"}])
                                        } else {
                                            setSelectedOption([{type:"일반볼", name:"홀짝/언오버", selection:"짝오버", buttonType:"red", subtitle: "72.5"}])
                                        }
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝오버</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                            {titleNumber === 3 ? "4.5" : "72.5"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">3.75</p>
                            </div>
                        </div>
                    ) : titleNumber === 4 ? (
                        <div className="flex justify-center w-full items-center">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"A", buttonType:"yellow", subtitle: "(0~2)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">A</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(0~2)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">3.15</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"B", buttonType:"yellow", subtitle: "(3~4)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">B</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(3~4)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.10</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"C", buttonType:"yellow", subtitle: "(5~6)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">C</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(5~6)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.10</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"D", buttonType:"yellow", subtitle: "(7~9)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">D</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(7~9)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">3.15</p>
                            </div>
                        </div>
                    ) : titleNumber === 5 ? (
                        <div className="flex flex-wrap justify-center w-full items-center">
                            <div className="flex justify-center w-full items-center">
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-1`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"0", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-1` ? "z-20" : "z-10"}  object-contain`} src={state === `${titleNumber}-1` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">0</p>
                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-2`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"1", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-2` ? "z-20" : "z-10"}  object-contain`} src={state === `${titleNumber}-2` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">1</p>

                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-3`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"2", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-3` ? "z-20" : "z-10"}  object-contain`} src={state === `${titleNumber}-3` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">2</p>

                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-4`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"3", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-4` && "z-20"}  object-contain`} src={state === `${titleNumber}-4` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">3</p>

                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-5`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"4", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-5` && "z-20"}  object-contain`} src={state === `${titleNumber}-5` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">4</p>

                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                            </div>
                            <div className="flex justify-center w-full items-center">
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-6`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"5", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-6` && "z-20"}  object-contain`} src={state === `${titleNumber}-6` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">5</p>

                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-7`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"6", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-7` && "z-20"}  object-contain`} src={state === `${titleNumber}-7` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">6</p>
                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-8`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"7", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-8` && "z-20"}  object-contain`} src={state === `${titleNumber}-8` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">7</p>
                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-9`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"8", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-9` && "z-20"}  object-contain`} src={state === `${titleNumber}-9` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">8</p>
                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-10`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"9", buttonType:"yellow"}])
                                        }} 
                                        style={{paddingTop: "3px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '9.5rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-10` && "z-20"}  object-contain`} src={state === `${titleNumber}-10` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px absolute">9</p>
                                    </div>
                                    <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">9.00</p>
                                </div>
                            </div>
                            
                        </div>
                    ) : titleNumber === 9 ? (
                        <div className="flex justify-center w-full items-center">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{type:"일반볼", name:"구간", selection:"소", buttonType:"green", subtitle:"(15~64)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">소</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(15~64)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">2.90</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{type:"일반볼", name:"구간", selection:"중", buttonType:"green", subtitle:"(65~80)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">중</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(65~80)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">2.60</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{type:"일반볼", name:"구간", selection:"대", buttonType:"green", subtitle:"(81~130)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">대</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(81~130)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">2.90</p>
                            </div>
                        </div>
                    ) : titleNumber === 10 ? (
                        <div className="flex justify-center w-full items-center">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"홀소", buttonType:"green", subtitle:"(15~64)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀소</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(15~64)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.85</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"홀중", buttonType:"green", subtitle:"(65~80)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀중</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(65~80)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.55</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"홀대", buttonType:"green", subtitle:"(81~130)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀대</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(81~130)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.85</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"짝소", buttonType:"green", subtitle:"(15~64)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝소</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(15~64)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.85</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-5`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"짝중", buttonType:"green", subtitle:"(64~80)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-5` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝중</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(65~80)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.55</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-6`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"짝대", buttonType:"green", subtitle:"(81~130)"}])
                                    }} 
                                    style={{paddingTop: "3px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-6` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center -space-y-6px -ml-px -mt-4px absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝대</p>
                                        <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">(81~130)</p>
                                    </div>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-gray-r585858">4.85</p>
                            </div>
                        </div>
                    ) : <></> }
                    
                </div>
            </div>
        </div>
    )

    return (
        <div 
            style={{width:"1260px"}}
            className="flex flex-wrap w-full"
        >
            <div className="w-full flex flex-col">
                {/* <PanelTitle title="파워볼" /> */}
                <div className="flex flex-col">
                    <div className="flex">
                        <div style={{marginRight: '0.375rem'}} className="flex">
                            <BetOptions />
                        </div>
                        <BetOptions titleNumber={3} width={48.625} subText2="언오버" />
                    </div>
                    <div className="flex">
                        <div style={{marginRight: '0.375rem'}} className="flex">
                            <BetOptions titleNumber={2} subText="언오버" />
                        </div>
                        <BetOptions titleNumber={4} width={48.625} subText="구간" />
                    </div>
                    <BetOptions titleNumber={5} width={77.625} height={37.5} subText="숫자" />
                </div>
            </div>
            <div className="w-full flex flex-col">
                {/* <PanelTitle title="일반볼" /> */}
                <div className="space-y-2px flex flex-col">
                    <div className="flex space-x-2px">
                        <BetOptions 
                            titleNumber={6} 
                            titleBg="#85a598" 
                            gradient1="#e5ffea" 
                            gradient2="#bfdccc" 
                            dividerColor="#a3bbb1"
                        />
                        <BetOptions 
                            titleNumber={8} 
                            titleBg="#85a598" 
                            gradient1="#e5ffea" 
                            gradient2="#bfdccc" 
                            width={48.625}
                            subText2="언오버"
                            dividerColor="#a3bbb1"
                        />
                    </div>
                    <div className="flex space-x-2px">
                        <BetOptions 
                            titleNumber={7} 
                            titleBg="#85a598" 
                            gradient1="#e5ffea" 
                            gradient2="#bfdccc" 
                            subText="언오버" 
                            dividerColor="#a3bbb1"
                        />
                        <BetOptions 
                            titleNumber={9} 
                            titleBg="#85a598" 
                            gradient1="#e5ffea" 
                            gradient2="#bfdccc" 
                            width={48.625} 
                            subText="구간"
                            dividerColor="#a3bbb1"
                        />
                    </div>
                    <BetOptions 
                        titleNumber={10} 
                        titleBg="#85a598" 
                        gradient1="#e5ffea" 
                        gradient2="#bfdccc" 
                        width={77.625} 
                        subText2="소중대"
                        dividerColor="#a3bbb1"
                    />
                </div>
            </div>
        </div>
    )
}

export default PowerballGame

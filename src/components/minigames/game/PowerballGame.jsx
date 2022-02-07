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
        borderColor = "#c7b9a6",
    }) => (
        <div
            style={{
                width: width + "rem", 
                height: height + "rem",
                marginBottom: '0.375rem'
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{ 
                    backgroundColor: "#fdfdf8",
                    width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                }}
                className={`flex items-center`} 
            >
                <div 
                    style={{ background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})` }}
                    className="w-full h-full rounded-b flex flex-wrap items-start justify-start"
                >

                    <div style={{height: '5.8125rem', borderWidth: '0.1875rem', borderColor: borderColor}} className="border border-gray-c7b9a6 flex flex-shrink-0 items-center justify-center w-full pb-px">
                        <div 
                            style={{height:"4.3rem",width: '15.9375rem', borderWidth: '0.1875rem' , backgroundColor: titleBg, fontSize: '2.25rem'}} 
                            className="flex-shrink-0 shadow-plain2 rounded-2xl border border-white flex flex-col items-center justify-center tracking-tight text-white"
                        >
                            <p style={{marginTop: '0.4rem'}} className="font-spoqaMedium">[{titleNumber}게임] 파워볼</p>
                        </div>

                        <div style={{fontSize: '2.625rem', marginLeft: '0.75rem'}} className="h-full flex flex-col items-center justify-center pb-1">
                            <div className="tracking-tight text-gray-r585858 font-spoqaMedium flex items-center mt-2">{subText} {subText2 ? `/${subText2}` : ''} </div>
                        </div>
                    </div>


                    {titleNumber === 1 || titleNumber === 6 ? (
                        <div style={{
                            height: '17.375rem', 
                            borderWidth: '0.1875rem', 
                            borderTopColor: 'white', 
                            padding: '0 3.875rem', 
                            borderRightColor: borderColor,
                            borderLeftColor: borderColor,
                            borderBottomColor: borderColor,
                            }} 
                            className="flex justify-between w-full items-center border border-gray-c7b9a6"
                        >
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
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">홀</p>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">1.95</p>
                                </div>
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
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white absolute">짝</p>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">1.95</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 2 || titleNumber === 7 ? (
                        <div style={{
                            height: '17.375rem',
                            borderWidth: '0.1875rem', 
                            borderTopColor: 'white', 
                            padding: '0 3.875rem',
                            borderRightColor: borderColor,
                            borderLeftColor: borderColor,
                            borderBottomColor: borderColor,
                            }} 
                             className="flex justify-between w-full items-center border border-gray-c7b9a6"
                        >
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
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="flex flex-col items-center absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white">언더</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">
                                                {titleNumber === 2 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">1.95</p>
                                </div>
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
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="flex flex-col items-center absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white">오버</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">
                                                {titleNumber === 2 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>  
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">1.95</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 3 || titleNumber === 8 ? (
                        <div style={{
                            height: '17.375rem', 
                            borderWidth: '0.1875rem', 
                            borderTopColor: 'white',
                            padding: '0 1.475rem',
                            borderRightColor: borderColor,
                            borderLeftColor: borderColor,
                            borderBottomColor: borderColor,
                            }} className="flex justify-between w-full items-center border border-gray-c7b9a6">
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
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="flex flex-col items-center absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white">홀언더</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                                </div>
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
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? BlueButtonPressed : BlueButton} alt="" />
                                    <div className="flex flex-col items-center absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">홀오버</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                                </div>
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
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="flex flex-col items-center  absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">짝언더</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                                </div>
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
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? RedButtonPressed : RedButton} alt="" />
                                    <div className="flex flex-col items-center  absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">짝오버</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">
                                                {titleNumber === 3 ? "4.5" : "72.5"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.75</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 4 ? (
                        <div style={{
                            height: '17.375rem', 
                            borderWidth: '0.1875rem', 
                            borderTopColor: 'white', 
                            padding: '0 1.475rem',
                            borderRightColor: borderColor,
                            borderLeftColor: borderColor,
                            borderBottomColor: borderColor,
                            }} className="flex justify-between w-full items-center border border-gray-c7b9a6">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"A", buttonType:"yellow", subtitle: "(0~2)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">A</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(0~2)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.15</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"B", buttonType:"yellow", subtitle: "(3~4)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">B</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(3~4)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.10</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"C", buttonType:"yellow", subtitle: "(5~6)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">C</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(5~6)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.10</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        setSelectedOption([{type:"파워볼", name:"구간", selection:"D", buttonType:"yellow", subtitle: "(7~9)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? YellowButtonPressed : YellowButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">D</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(7~9)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.15</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 5 ? (
                        <div style={{
                            height: '31.5rem' ,
                            borderWidth: '0.1875rem', 
                            borderTopColor: 'white', 
                            padding: '0 3.875rem',
                            borderRightColor: borderColor,
                            borderLeftColor: borderColor,
                            borderBottomColor: borderColor,
                            }} className="flex flex-wrap justify-between w-full items-center border border-gray-c7b9a6">
                            <div className="flex justify-between w-full items-center">
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-1`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"0", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-1` ? "z-20" : "z-10"}  object-contain`} src={state === `${titleNumber}-1` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">0</p>
                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-2`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"1", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-2` ? "z-20" : "z-10"}  object-contain`} src={state === `${titleNumber}-2` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">1</p>

                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-3`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"2", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-3` ? "z-20" : "z-10"}  object-contain`} src={state === `${titleNumber}-3` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">2</p>

                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-4`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"3", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-4` && "z-20"}  object-contain`} src={state === `${titleNumber}-4` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">3</p>

                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-5`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"4", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-5` && "z-20"}  object-contain`} src={state === `${titleNumber}-5` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">4</p>

                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-6`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"5", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-6` && "z-20"}  object-contain`} src={state === `${titleNumber}-6` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">5</p>

                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-7`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"6", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-7` && "z-20"}  object-contain`} src={state === `${titleNumber}-7` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">6</p>
                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-8`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"7", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-8` && "z-20"}  object-contain`} src={state === `${titleNumber}-8` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">7</p>
                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-9`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"8", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-9` && "z-20"}  object-contain`} src={state === `${titleNumber}-9` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">8</p>
                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setChosen(`${titleNumber}-10`)
                                            setSelectedOption([{type:"파워볼", name:"숫자", selection:"9", buttonType:"yellow"}])
                                        }} 
                                        // style={{paddingTop: "3px"}} 
                                        style={{height: '11.375rem'}}
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img style={{width: '11.375rem', maxWidth: 'unset'}} className={`${state === `${titleNumber}-10` && "z-20"}  object-contain`} src={state === `${titleNumber}-10` ? YellowButtonPressed : YellowButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">9</p>
                                    </div>
                                    <div style={{height: '3.65rem'}}>
                                        <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">9.00</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ) : titleNumber === 9 ? (
                        <div style={{
                            height: '17.375rem', 
                            borderWidth: '0.1875rem', 
                            borderTopColor: 'white',
                            padding: '0 3.875rem',
                            borderRightColor: borderColor,
                            borderLeftColor: borderColor,
                            borderBottomColor: borderColor,
                            }} className="flex justify-between w-full items-center border border-gray-c7b9a6">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{type:"일반볼", name:"구간", selection:"소", buttonType:"green", subtitle:"(15~64)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">소</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(15~64)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">2.90</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{type:"일반볼", name:"구간", selection:"중", buttonType:"green", subtitle:"(65~80)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">중</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(65~80)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">2.60</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{type:"일반볼", name:"구간", selection:"대", buttonType:"green", subtitle:"(81~130)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">대</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(81~130)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">2.90</p>
                                </div>
                            </div>
                        </div>
                    ) : titleNumber === 10 ? (
                        <div style={{
                            height: '17.375rem', 
                            borderWidth: '0.1875rem', 
                            borderTopColor: 'white', 
                            padding: '0 3.875rem',
                            borderRightColor: borderColor,
                            borderLeftColor: borderColor,
                            borderBottomColor: borderColor,
                            }} className="flex justify-between w-full items-center border border-gray-c7b9a6">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-1`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"홀소", buttonType:"green", subtitle:"(15~64)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">홀소</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(15~64)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.85</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-2`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"홀중", buttonType:"green", subtitle:"(65~80)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">홀중</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(65~80)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.55</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-3`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"홀대", buttonType:"green", subtitle:"(81~130)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-3` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">홀대</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(81~130)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.85</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-4`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"짝소", buttonType:"green", subtitle:"(15~64)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-4` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">짝소</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(15~64)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.85</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-5`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"짝중", buttonType:"green", subtitle:"(64~80)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-5` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">짝중</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(65~80)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.55</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setChosen(`${titleNumber}-6`)
                                        setSelectedOption([{type:"일반볼", name:"홀짝/소중대", selection:"짝대", buttonType:"green", subtitle:"(81~130)"}])
                                    }} 
                                    // style={{paddingTop: "3px"}} 
                                    style={{height: '11.375rem'}}
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img style={{width: '11.375rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-6` ? GreenButtonPressed : GreenButton} alt="" />
                                    <div className="flex flex-col items-center    absolute">
                                        <p style={{textShadow: "2px 2px 2px #00000060", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white ">짝대</p>
                                        <div className='h-10'>
                                            <p style={{fontSize:"1.6rem"}} className="z-20 font-spoqa text-white tracking-tight -mt-4">(81~130)</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '3.65rem'}}>
                                    <p style={{fontSize: '2.4375rem'}} className=" font-robotoRegular tracking-tight text-gray-r585858 -mt-3">4.85</p>
                                </div>
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
                        <BetOptions titleNumber={4} width={48.625}  subText="구간" />
                    </div>
                    <div style={{marginBottom: '1.5rem'}} className="flex mt-0">
                        <BetOptions titleNumber={5} width={77.625} height={37.5} subText="숫자" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col">
                {/* <PanelTitle title="일반볼" /> */}
                <div className="flex flex-col">
                    <div className="flex">
                        <div style={{marginRight: '0.375rem'}}>
                            <BetOptions 
                                titleNumber={6} 
                                titleBg="#85a598" 
                                gradient1="#e5ffea" 
                                gradient2="#bfdccc" 
                                borderColor='#a3bbb1'
                            />
                        </div>
                        <BetOptions 
                            titleNumber={8} 
                            titleBg="#85a598" 
                            gradient1="#e5ffea" 
                            gradient2="#bfdccc" 
                            width={48.625}
                            subText2="언오버"
                            borderColor='#a3bbb1'
                        />
                    </div>
                    <div className="flex">
                        <div style={{marginRight: '0.375rem'}}>
                            <BetOptions 
                                titleNumber={7} 
                                titleBg="#85a598" 
                                gradient1="#e5ffea" 
                                gradient2="#bfdccc" 
                                subText="언오버" 
                                borderColor='#a3bbb1'
                            />
                        </div>
                        <BetOptions 
                            titleNumber={9} 
                            titleBg="#85a598" 
                            gradient1="#e5ffea" 
                            gradient2="#bfdccc" 
                            width={48.625} 
                            subText="구간"
                            borderColor='#a3bbb1'
                        />
                    </div>
                    <BetOptions 
                        titleNumber={10} 
                        titleBg="#85a598" 
                        gradient1="#e5ffea" 
                        gradient2="#bfdccc" 
                        width={77.625} 
                        subText2="소중대"
                        borderColor='#a3bbb1'
                    />
                </div>
            </div>
        </div>
    )
}

export default PowerballGame

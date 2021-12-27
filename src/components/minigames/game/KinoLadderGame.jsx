import React, { useState } from 'react'
import BlueButton from '../../../images/minigames/blue_sq.png'
import RedButton from '../../../images/minigames/red_sq.png'
import BlueSMButton from '../../../images/minigames/blue_sm.png'
import RedSMButton from '../../../images/minigames/red_sm.png'
import BlueButtonPressed from '../../../images/minigames/blue_sq_pressed.png'
import RedButtonPressed from '../../../images/minigames/red_sq_pressed.png'
import RedSMButtonPressed from '../../../images/minigames/red_pressed.png'
import BlueSMButtonPressed from '../../../images/minigames/blue_pressed.png'

const KinoLadderGame = ({setSelectedOption}) => {

    const [state, setState] = useState("")

    const PanelTitle = ({title, titleNumber, subText, subText2, titleBg, isTopBorder = false}) => (
        <div style={{height: '5.8125rem', borderTopColor: '#b8d5e6'}} className={`border-b ${isTopBorder ? 'border-t' : '' } border-brown-c7b8a4 flex flex-shrink-0 items-center justify-center w-full`}>
            <div 
                style={{height:"3.9375rem",width: '8.4375rem', borderRadius: '0.5625rem', borderWidth: '0.1875rem' , backgroundColor: titleBg, fontSize: '2.25rem'}} 
                className="flex-shrink-0 shadow-plain2 border border-white flex flex-col items-center justify-center tracking-tight text-white"
            >
                <p style={{marginTop: '0.4rem'}} className="font-spoqaMedium">{titleNumber}{title}</p>
            </div>

            <div style={{fontSize: '2.625rem', marginLeft: '0.75rem'}} className="h-full flex flex-col items-center justify-center">
                <div className="tracking-tight text-gray-r585858 font-spoqaMedium flex items-center mt-2">{subText} {subText2 ? `/${subText2}` : ''} </div>
            </div>
        </div>
    )


    const SingleCard = ({
        width = 28.625, 
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#fff8ae",
        gradient2 = "#ffda8a",
        titleBg = "#bd9960",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
        button1Text = "홀",
        button2Text = "짝",
    }) => (
        <div
            style={{
                width: width + "rem", 
                height: height+ "rem",
                background: "#c7b8a4",
                marginBottom: '0.375rem',
                padding: '0.1875rem'
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{
                    width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    backgroundColor: "#fdfdf8",
                }}
                className={`flex items-center`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="w-full h-full flex flex-wrap items-start justify-start"
                >
                    <PanelTitle title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} />

                    <div style={{height: '17.375rem', borderTopWidth: '0.1875rem', borderTopColor: 'white', padding: '0 3.875rem', paddingLeft: `${extraLeftPadding + 3.875}rem`, paddingRight: `${extraRightPadding + 3.875}rem`}} className="flex justify-center w-full items-center">
                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: state === `${titleNumber}-1` ? '11.375rem' : '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px #00000050", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">{button1Text}</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 mt-0">1.95</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: state === `${titleNumber}-2` ? '11.375rem' : '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px #00000050", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white absolute">{button2Text}</p>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 mt-0">1.95</p>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    )

    const ThreeCard = ({
        width = 81.125, 
        height = 23.375,
        extraLeftPadding = 0,
        extraRightPadding = 0,
        gradient1 = "#fff8ae",
        gradient2 = "#ffda8a",
        titleBg = "#bd9960",
        titleNumber = 1,
        title = '게임',
        subText = "홀짝",
        subText2 = null,
        dividerColor = "#c7b9a6",
    }) => (
        <div
            style={{
                width: width + "rem", 
                height: height+ "rem",
                background: "#c7b8a4",
                marginBottom: '0.375rem',
                padding: '0.1875rem'
            }}
            className={`flex justify-center items-center flex-shrink-0`} 
        >
            <div
                style={{
                    width: width - 0.1875 + "rem", 
                    height: height - 0.1875 + "rem",
                    backgroundColor: "#fdfdf8",
                }}
                className={`flex items-center border-b border-brown-c7b8a4`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                    }}
                    className="w-full h-full flex flex-wrap items-start justify-start"
                >
                    <PanelTitle isTopBorder title={title} titleNumber={titleNumber} subText={subText} subText2={subText2} titleBg={titleBg} />

                    <div style={{height: '17.375rem', borderTopWidth: '0.1875rem', borderTopColor: 'white', padding: '0 3.875rem', paddingLeft: `${extraLeftPadding + 3.875}rem`, paddingRight: `${extraRightPadding + 3.875}rem`}} className="flex justify-between w-full items-center">
                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: state === `${titleNumber}-1` ? '11.375rem' : '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px #00000050", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">짝</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black z-20 left-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">3</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: state === `${titleNumber}-2` ? '11.375rem' : '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px #00000050", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white absolute">홀</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black z-20 right-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">3</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-1`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"홀", buttonType:"blue"}])
                                    }
                                }} 
                                // style={{paddingTop: "3px"}} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                <img style={{width: state === `${titleNumber}-1` ? '11.375rem' : '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-1` ? RedSMButtonPressed : RedSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px #00000050", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white  absolute">홀</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black z-20 left-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">4</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
                            </div>
                        </div>

                        <div style={{marginRight: '1.875rem'}} className="flex flex-col items-center">
                            <div 
                                onClick={() => {
                                    setState(`${titleNumber}-2`)
                                    if (titleNumber === 1) {
                                        setSelectedOption([{type:"파워볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    } else {
                                        setSelectedOption([{type:"일반볼", name:"홀짝", selection:"짝", buttonType:"red"}])
                                    }
                                }} 
                                style={{height: '11.375rem'}}
                                className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                            >
                                
                                <img style={{width: state === `${titleNumber}-2` ? '11.375rem' : '9.5rem', maxWidth: 'unset'}} className=" object-contain" src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                <p style={{textShadow: "2px 2px 2px #00000050", fontSize: '3.75rem', marginTop: '0.625rem'}} className="z-20 font-swagger text-white absolute">짝</p>
                                <div style={{width: '3.75rem', height: '3.75rem'}} className="absolute rounded-full bg-black z-20 right-0 top-2 flex items-center justify-center">
                                    <div style={{fontSize: '2.0625rem'}} className="text-white tracking-tight font-spoqaMedium">4</div>
                                </div>
                            </div>
                            <div style={{height: '3.65rem'}}>
                                <p style={{fontSize: '2.4375rem'}} className="font-robotoRegular tracking-tight text-gray-r585858 -mt-3">3.80</p>
                            </div>
                        </div>
                    </div>               
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
                <div className="flex flex-col">
                    <div className="flex">
                        <div style={{marginRight: '0.375rem', marginLeft: '-1.625rem'}} className="flex">
                            <SingleCard width={27.1875} height={23.375} extraLeftPadding={1.875} titleNumber={1} title = '게임' subText = "홀짝" />
                        </div>
                        <div style={{marginRight: '0.375rem'}} className="flex">
                            <SingleCard width={25.5625} button1Text='좌' button2Text='우' height={23.375} titleNumber={2} title = '게임' subText = "출발점" />
                        </div>
                        <div style={{marginRight: '-1.625rem'}}>
                            <SingleCard width={27.1875} button1Text='3줄' button2Text='4줄' height={23.375} extraRightPadding={1.875} titleNumber={3} title = '게임' subText = "줄갯수" />
                        </div>
                    </div>
                </div>
                <div>
                    <ThreeCard titleNumber={4} subText='좌우 출발 3/4줄' extraLeftPadding={1.75} extraRightPadding={1.75} />
                </div>
            </div>
        </div>
    )
}

export default KinoLadderGame

import React, { useState } from 'react'
import LeftIcon from '../../images/newImages/mypage/live-casino/left-arrow.png'
import RightIcon from '../../images/newImages/mypage/live-casino/right-arrow.png'
import DoubleLeftIcon from '../../images/newImages/mypage/live-casino/two-left-arrow.png'
import DoubleRightIcon from '../../images/newImages/mypage/live-casino/two-right-arrow.png'
import './Pagination.css'

const Pagination = ({page, setPage, withMarginBottom = true}) => {

    const LeftArrow = () => (
        <button 
            style={{backgroundColor:selectedPage !==1 && "#fff", width: '2.125rem', height: '2.125rem', marginRight: '3.1875rem'}} 
            className="flex items-center justify-center rounded-lg  hover:opacity-75"
            onClick={() => selectedPage !== 1 && setSelectedPage(selectedPage - 1)}
        >
            <img style={{width: '2.125rem', height: '2.125rem'}} className="cursor-pointer object-contain max-w-none" src={LeftIcon} alt="arrow" />
        </button>
    )
    const RightArrow = () => (
        <button 
            style={{backgroundColor:selectedPage !==1 && "#fff", width: '2.125rem', height: '2.125rem', marginLeft: '3.1875rem'}} 
            className="flex items-center justify-center rounded-lg  hover:opacity-75"
            onClick={() => selectedPage !== 5 && setSelectedPage(selectedPage + 1)}
        >
            <img style={{width: '2.125rem', height: '2.125rem'}} className="cursor-pointer max-w-none object-contain" src={RightIcon} alt="arrow" />
        </button>
    )

    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <div style={{margin: '0 7.8125rem', marginBottom: withMarginBottom ? '19.625rem' : '0'}} className="relative flex mb-60px items-center justify-center">
            <button 
                style={{width: '2.125rem', height: '2.125rem', marginRight: '5.8125rem'}}
                className="flex items-center justify-center rounded-lg  hover:opacity-75"
                onClick={() => setSelectedPage(1)}
            >
                <img className="cursor-pointer object-contain max-w-none" src={DoubleLeftIcon} alt="" />
            </button>
                <LeftArrow />
                <div className="space-x-px flex items-center">
                    <button 
                        style={{backgroundColor:selectedPage !==1 && "#fff", width: '7.3125rem', height: '7.3125rem', padding: '1px'}} 
                        className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(1)}
                    >
                        <div className={`${selectedPage === 1 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center w-full h-full rounded-lg  cursor-pointer`}>
                            <span style={{fontSize: '2.4375rem'}} className={`${selectedPage === 1 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>1</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==2 && "#fff", width: '7.3125rem', height: '7.3125rem', padding: '1px'}} 
                        className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(2)}
                    >
                        <div className={`${selectedPage === 2 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center w-full h-full rounded-lg  cursor-pointer`}>
                            <span style={{fontSize: '2.4375rem'}} className={`${selectedPage === 2 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>2</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==3 && "#fff", width: '7.3125rem', height: '7.3125rem', padding: '1px'}} 
                        className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(3)}
                    >
                        <div className={`${selectedPage === 3 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center w-full h-full rounded-lg  cursor-pointer`}>
                            <span style={{fontSize: '2.4375rem'}} className={`${selectedPage === 3 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>3</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==4 && "#fff", width: '7.3125rem', height: '7.3125rem', padding: '1px'}} 
                        className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(4)}
                    >
                        <div className={`${selectedPage === 4 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center w-full h-full rounded-lg  cursor-pointer`}>
                            <span style={{fontSize: '2.4375rem'}} className={`${selectedPage === 4 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>4</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==5 && "#fff", width: '7.3125rem', height: '7.3125rem', padding: '1px'}} 
                        className="flex items-center justify-center rounded-lg bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(5)}
                    >
                        <div className={`${selectedPage === 5 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center w-full h-full rounded-lg  cursor-pointer`}>
                            <span style={{fontSize: '2.4375rem'}} className={`${selectedPage === 5 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>5</span>
                        </div>
                    </button>
                </div>
                

                <RightArrow />                
                <button
                    style={{width: '2.125rem', height: '2.125rem', marginLeft: '5.8125rem'}}
                    className="flex items-center justify-center rounded-lg  hover:opacity-75"
                    onClick={() => setSelectedPage(5)}
                >
                    <img className=" cursor-pointer object-contain max-w-none" src={DoubleRightIcon} alt="" />
                </button>
            </div>
    )
}

export default Pagination

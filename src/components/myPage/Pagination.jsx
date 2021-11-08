import React, { useState } from 'react'
import LeftIcon from '../../images/myPage/betHistory/left.png'
import RightIcon from '../../images/myPage/betHistory/right.png'
import DoubleLeftIcon from '../../images/myPage/betHistory/double_left.png'
import DoubleRightIcon from '../../images/myPage/betHistory/double_right.png'
import './Pagination.css'

const Pagination = ({page, setPage}) => {

    const LeftArrow = () => (
        <button 
            style={{backgroundColor:selectedPage !==1 && "#fff"}} 
            className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
            onClick={() => selectedPage !== 1 && setSelectedPage(selectedPage - 1)}
        >
            <img src={LeftIcon} alt="arrow" />
        </button>
    )
    const RightArrow = () => (
        <button 
            style={{backgroundColor:selectedPage !==1 && "#fff"}} 
            className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
            onClick={() => selectedPage !== 5 && setSelectedPage(selectedPage + 1)}
        >
            <img src={RightIcon} alt="arrow" />
        </button>
    )

    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <div className="relative flex h-32px mb-60px items-center justify-center space-x-6px">
            <button 
                className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
                onClick={() => setSelectedPage(1)}
            >
                <img className="cursor-pointer h-32px object-none hover:bg-blend-darken" src={DoubleLeftIcon} alt="" />
            </button>
                <LeftArrow />
                <div className="space-x-px flex items-center">
                    <button 
                        style={{backgroundColor:selectedPage !==1 && "#fff"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(1)}
                    >
                        <div className={`${selectedPage === 1 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center h-30px w-30px rounded-4px  cursor-pointer`}>
                            <span className={`${selectedPage === 1 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>1</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==2 && "#fff"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(2)}
                    >
                        <div className={`${selectedPage === 2 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center h-30px w-30px rounded-4px  cursor-pointer`}>
                            <span className={`${selectedPage === 2 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>2</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==3 && "#fff"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(3)}
                    >
                        <div className={`${selectedPage === 3 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center h-30px w-30px rounded-4px  cursor-pointer`}>
                            <span className={`${selectedPage === 3 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>3</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==4 && "#fff"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(4)}
                    >
                        <div className={`${selectedPage === 4 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center h-30px w-30px rounded-4px  cursor-pointer`}>
                            <span className={`${selectedPage === 4 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>4</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage !==5 && "#fff"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px bg-blue-r0070d9 hover:opacity-75"
                        onClick={() => setSelectedPage(5)}
                    >
                        <div className={`${selectedPage === 5 ? "border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db" : "bg-white"} flex items-center justify-center h-30px w-30px rounded-4px  cursor-pointer`}>
                            <span className={`${selectedPage === 5 ? " text-white" : " text-gray-r454545"} font-roboto tracking-tight text-14px pt-2px`}>5</span>
                        </div>
                    </button>
                </div>
                

                <RightArrow />                
                <button 
                    className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
                    onClick={() => setSelectedPage(5)}
                >
                    <img className=" cursor-pointer h-32px object-none hover:bg-blend-darken" src={DoubleRightIcon} alt="" />
                </button>
            </div>
    )
}

export default Pagination

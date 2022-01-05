import React from 'react'
import Bank1 from '../../images/newImages/mainPage/icons/banks/1.png'
import Bank2 from '../../images/newImages/mainPage/icons/banks/2.png'
import Bank3 from '../../images/newImages/mainPage/icons/banks/3.png'
import Bank4 from '../../images/newImages/mainPage/icons/banks/4.png'
import Bank5 from '../../images/newImages/mainPage/icons/banks/5.png'
import Bank6 from '../../images/newImages/mainPage/icons/banks/6.png'
import Bank7 from '../../images/newImages/mainPage/icons/banks/7.png'
import Bank8 from '../../images/newImages/mainPage/icons/banks/8.png'
import Bank9 from '../../images/newImages/mainPage/icons/banks/9.png'
import Bank10 from '../../images/newImages/mainPage/icons/banks/10.png'
import Bank11 from '../../images/newImages/mainPage/icons/banks/11.png'
import Bank12 from '../../images/newImages/mainPage/icons/banks/12.png'
import Bank13 from '../../images/newImages/mainPage/icons/banks/13.png'
import Bank14 from '../../images/newImages/mainPage/icons/banks/14.png'
import Bank15 from '../../images/newImages/mainPage/icons/banks/15.png'
import Bank16 from '../../images/newImages/mainPage/icons/banks/16.png'
import Bank17 from '../../images/newImages/mainPage/icons/banks/17.png'

const BankTable = () => {
    return (
        <div style={{marginBottom: '16rem', borderWidth: '0.1875rem'}} className="relative w-full rounded-2xl border border-gray-dddddd flex flex-col" >
            <div className="h-full w-full flex bg-gray-f9f9f9 rounded-t-2xl">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-20px m-auto w-121px'  src={Bank1} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-7px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:30 ~ 00:05</p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-13px m-auto w-102px'  src={Bank2} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-7px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:55 ~ 00:05</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f1f1f1">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-21px m-auto w-75px'  src={Bank3} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-7px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00 ~ 01:00</p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-15px m-auto w-107px'  src={Bank4} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-3px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00 ~ 00:10</p>
                        <p style={{color: '#7b7b7b'}} className="text-10px -mt-4px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">(금 00:00 ~ 00:40)</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f9f9f9">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img style={{width: '96px'}} className='h-17px m-auto'  src={Bank5} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-3px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00 ~ 01:00</p>
                        <p style={{color: '#7b7b7b'}} className="text-10px -mt-4px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">(일 00:00 ~ 08:00)</p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-19px m-auto w-90px'  src={Bank6} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-7px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00 ~ 00:10</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f1f1f1">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='m-auto w-20px w-88px'  src={Bank7} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-3px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:00 ~ 24:00</p>
                        <p style={{color: '#7b7b7b'}} className="text-10px -mt-4px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">(타행이체불가)</p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-14 m-auto w-94px'  src={Bank8} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-7px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00 ~ 01:30</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f9f9f9">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-15px m-auto w-53px'  src={Bank9} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-7px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:50 ~ 00:05</p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-19px m-auto w-90px'  src={Bank10} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-3px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00 ~ 01:00</p>
                        <p style={{color: '#7b7b7b'}} className="text-10px -mt-4px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">(일 00:00 ~ 08:00)</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f1f1f1">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-16px m-auto w-83px'  src={Bank11} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-7px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:50~00:10</p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-18px m-auto w-56px'  src={Bank12} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-3px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:50~00:00</p>
                        <p style={{color: '#7b7b7b'}} className="text-10px -mt-4px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">(04:00 ~ 05:00)</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f9f9f9">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-24px m-auto w-94px'  src={Bank13} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-5px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00~00:30 </p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-15px m-auto w-94px'  src={Bank14} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-5px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00~00:20</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f1f1f1">
                <div style={{height: '13.5rem', border: '0.1875rem solid #dddddd', borderLeft: 'none', borderTop: 'none'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-18px m-auto w-94px'  src={Bank15} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-5px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:50~00:30</p>
                    </div>
                </div>
                <div style={{height: '13.5rem', borderBottom: '0.1875rem solid #dddddd'}} className="flex table flex-wrap w-1/2 justify-center h-full">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-20px m-auto w-73px'  src={Bank16} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-5px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">23:40~00:05</p>
                    </div>
                </div> 
            </div>

            <div className="h-full w-full flex bg-gray-f9f9f9 rounded-b-2xl">
                <div style={{height: '13.5rem'}} className="flex table flex-wrap w-full justify-center h-full rounded-b-2xl">
                    <div className="w-full table-cell align-middle" >
                        <img className='h-15px m-auto w-98px'  src={Bank17} alt="" />
                        <p style={{color: '#7b7b7b'}} className="text-10px mt-10px text-center font-spoqa tracking-tight text-gray-r7b7b7b w-full">00:00~00:30</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BankTable



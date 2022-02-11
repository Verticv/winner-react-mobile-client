import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import ko from 'date-fns/locale/ko';
import DropDownInput from 'components/common/DropDownInput'
import CalendarIcon from '../../images/newImages/mypage/live-casino/date.png';
// import DropDownControls from 'components/dropdowns/DropDownControls';
// import ArrowDownGray from '../../images/arrows/arrow_down_gray.png'
import './DatePicker.css'
registerLocale('ko', ko)

const DateSearchBar = ({
    isLeagueSearch = false, 
    hasIdSearch = false,
    has3MonthSearch = false,
    isGameResultsSearch = false,
    withBlackButton = false,
    withMargin = true,
    hasDateSuggestion = true
}) => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const CustomInput = (props) => {
        return (
            <input
                className="place-color-grey date-picker left-input flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-roboto text-15px tracking-tight text-gray-r7b7b7b"
                onClick={props.onClick}
                value={props.value}
                type="text"
                readOnly={true}
            />
        )
    }
    return (
        <div style={{margin: withMargin ? '0 1.875rem' : '0 3.875rem 0 0', width: withMargin ? '' : '73.875rem'}} className="bg-gray-f9f9f9 rounded-2xl border border-gray-dddddd flex flex-wrap items-center justify-center">
                
                {isLeagueSearch === true && (
                    <div className="space-x-5px">
                        <input 
                            placeholder="리그선택"
                            className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                            onFocus={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom  = '-14.075rem'
                            }}
                            onBlur={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '0'
                            }} 
                        />
                        <input
                            placeholder="팀명검색" 
                            className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                            onFocus={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom  = '-14.075rem'
                            }}
                            onBlur={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '0'
                            }}
                        />
                                                            
                    </div>
                )}

                {isGameResultsSearch === true && (
                    <div style={{marginTop: '1.875rem', marginBottom: '-1.125rem'}} className="flex">                        
                        {/* <input
                            style={{height: '6.75rem', width: '34.06rem', fontSize: '2.625rem', marginLeft: '1.875rem'}}
                            placeholder="리그선택" 
                            className="place-color-grey pt-px mt-px placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none w-138px h-42px rounded-2xl border border-gray-dddddd px-10px font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c" /> */}
                            <DropDownInput />
                            <span style={{fontSize: '2.6rem', marginTop: '1.875rem', width: '1.880875rem'}} className="invisible text-center font-spoqaMedium text-gray-r454545 mt-px">~</span>
                        <input
                            style={{height: '6.75rem', width: '34.06rem', fontSize: '2.625rem', marginRight: '1.875rem', paddingLeft: '1.75rem', paddingRight: '1.875rem'}}
                            placeholder="팀명검색" 
                            className="place-color-grey placeholder:text-gray-r7b7b7b flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-spoqaMedium text-15px tracking-tight text-gray-r8c8c8c"
                            onFocus={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom  = '-14.075rem'
                            }}
                            onBlur={() => {
                                const menu = document.querySelector('#main-menu');
                                menu.style.marginBottom = '0'
                            }}
                            />
                    </div>
                )}

                <div className="flex items-center w-full h-full">
                    <div className="left-date-picker relative">
                        <DatePicker 
                            customInput={<CustomInput />}
                            className="place-color-grey date-picker left-input flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-roboto text-15px tracking-tight text-gray-r7b7b7b"
                            locale="ko" 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            dateFormatCalendar="yyyy년 MM월"
                            disabledKeyboardNavigation={true}
                            onKeyDown={(e) => {
                                e.preventDefault();
                            }}
                            onChangeRaw={(e) => e.preventDefault()}
                        />
                        <img style={{top: '3.44rem'}} src={CalendarIcon} alt="" className="w-14 absolute right-8" />
                    </div>
                    <span style={{fontSize: '2.6rem', marginTop: '1.875rem'}} className={`w-8 text-center font-spoqaMedium text-gray-r454545 mt-px  ${!hasDateSuggestion && "opacity-0"}`}>~</span>
                    <div className="right-date-picker relative">
                        {hasDateSuggestion ? (
                            <>
                                <div className=' -ml-8'>
                                <DatePicker 
                                    customInput={<CustomInput />}
                                    // className="place-color-grey date-picker right-input flex-shrink-0 outline-none rounded-2xl border border-gray-dddddd font-roboto text-15px tracking-tight text-gray-r7b7b7b" 
                                    locale="ko"
                                    selected={endDate} 
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    dateFormatCalendar="yyyy년 MM월"
                                    disabledKeyboardNavigation={true}
                                    onKeyDown={(e) => {
                                        e.preventDefault();
                                    }}
                                    onChangeRaw={(e) => e.preventDefault()}
                                />
                                </div>
                                <img style={{top: '3.44rem', right: '3.94rem'}} src={CalendarIcon} alt="" className="w-14 absolute" />
                            </>
                        ) : (
                            <div className='mt-7 -ml-8 text-15px'>
                                <DropDownInput isLeagueSelection={false} />
                            </div>
                        )}                    
                    </div>
                </div>
                {hasDateSuggestion ? (
                    <div style={{margin: '0.75rem 1.875rem', marginBottom: withBlackButton ? '0.75rem' : '0'}} className="flex w-full h-full items-center justify-between">
                        <div style={{width: '13.25rem', height: '7.3125rem'}} className="common-button flex items-center justify-center rounded-lg bg-blue-r004b8a hover:opacity-75">
                            <div className="flex items-center w-full h-full justify-center rounded-lg border border-blue-r2a699c bg-gradient-to-b from-blue-r004b8a via-blue-r003d70 to-blue-r012d53 cursor-pointer">
                                <span style={{fontSize: '2.625rem', paddingBottom:'3px'}} className="font-spoqaMedium tracking-tight text-white pt-px">오늘</span>
                            </div>
                        </div>

                        <div style={{width: '13.25rem', height: '7.3125rem'}} className="common-button flex items-center justify-center rounded-lg bg-blue-r2068b2 hover:opacity-75">
                            <div className="flex items-center w-full h-full justify-center bg-black rounded-lg border border-blue-r3975ae bg-gradient-to-b from-blue-r125a9e via-blue-r0e508d to-blue-r0b447a cursor-pointer">
                                <span style={{fontSize: '2.625rem', paddingBottom:'3px'}} className="font-spoqaMedium tracking-tight text-white pt-px">1주일</span>
                            </div>
                        </div>

                        <div style={{width: '13.25rem', height: '7.3125rem'}} className="common-button flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75">
                            <div className="flex items-center w-full h-full justify-center bg-black rounded-lg border border-blue-r538dcf bg-gradient-to-b from-blue-r3176c5 via-blue-r286bb7 to-blue-r1c5ca5 cursor-pointer">
                                <span style={{fontSize: '2.625rem', paddingBottom:'3px'}} className="font-spoqaMedium tracking-tight text-white pt-px">15일</span>
                            </div>
                        </div>

                        <div style={{width: '13.25rem', height: '7.3125rem'}} className="common-button flex items-center justify-center rounded-lg bg-blue-r286fce hover:opacity-75">
                            <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r70a8f5 bg-gradient-to-b from-blue-r5497f4 via-blue-r4985d8 to-blue-r3d71b8 cursor-pointer">
                                <span style={{fontSize: '2.625rem', paddingBottom:'3px'}} className="font-spoqaMedium tracking-tight text-white pt-px">1개월</span>
                            </div>
                        </div>

                        {has3MonthSearch && (
                            <div style={{width: '13.25rem', height: '7.3125rem'}} className="common-button flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75">
                                <div className="flex items-center w-full h-full justify-center bg-black rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                    <span style={{fontSize: '2.625rem', paddingBottom:'3px'}} className="font-spoqaMedium tracking-tight text-white pt-px">3개월</span>
                                </div>
                            </div>
                        )}

                        {!hasIdSearch ? (
                            <div style={{width: '13.25rem', height: '7.3125rem'}} className={`common-button flex items-center justify-center rounded-lg ${withBlackButton? "bg-blue-r177cce" : "bg-gray-r171a1d"}  hover:opacity-75`}>
                                <div className={`flex items-center justify-center w-full h-full bg-black rounded-lg border ${withBlackButton ? "border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8" : "border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337"}  cursor-pointer`}>
                                    <span style={{fontSize: '2.625rem', paddingBottom:'3px'}} className="font-spoqaMedium tracking-tight text-white pt-px">{withBlackButton ? "3개월" : "검색"}</span>
                                </div>
                            </div>
                        ) : (
                            <div style={{width: '13.25rem', height: '7.3125rem'}} className="common-button flex items-center justify-center rounded-lg bg-blue-r177cce hover:opacity-75">
                                <div className="flex items-center justify-center w-full h-full bg-black rounded-lg border border-blue-r62b3f7 bg-gradient-to-b from-blue-r5497f4 via-blue-r3a93dd to-blue-r3d71b8 cursor-pointer">
                                    <span style={{fontSize: '2.625rem', paddingBottom:'3px'}} className="font-spoqaMedium tracking-tight text-white pt-px">3개월</span>
                                </div>
                            </div>
                        )}
                        
                    </div>
                ) : (<div style={{margin: '0.45rem'}}></div>)}
                

                <div style={{margin: '0.75rem 1.875rem', marginBottom: withMargin ? '1.875rem' : '1.375rem', marginTop: '0'}} className="flex w-full h-full items-center justify-between">
                    {withBlackButton && !withMargin && (
                        <div>
                            <input 
                                style={{width: '41.625rem', height: '6.9375rem', fontSize: '2.625rem', paddingLeft: '2.25rem'}}
                                className="mr-3.5 border border-gray-dddddd place-color-grey rounded-2xl placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium outline-none h-full justify-between items-center tracking-tight"
                                placeholder="아이디"
                                onFocus={() => {
                                    const menu = document.querySelector('#main-menu');
                                    menu.style.marginBottom  = '-14.075rem'
                                }}
                                onBlur={() => {
                                    const menu = document.querySelector('#main-menu');
                                    menu.style.marginBottom = '0'
                                }}
                            />
                        </div>
                    )}
                    {withBlackButton && (
                        <div style={{minWidth: '27.4375rem', height: '7.3125rem'}} className="common-button flex w-full items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75">
                            <div className="flex w-full h-full items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                                <span style={{fontSize: '2.625rem', paddingBottom: '2px'}} className="font-spoqaMedium tracking-tight text-white">검색</span>
                            </div>
                        </div>
                    )}
                </div>

                
                {hasIdSearch && (
                    <div className="flex space-x-5px">
                        <input 
                            className="w-138px h-42px rounded-lg border border-gray-dddddd bg-white outline-none text-15px font-spoqaMedium tracking-tight text-gray-r8c8c8c px-10px" 
                            placeholder="아이디" 
                        />
                        <div 
                            style={{
                                width:"75px",
                                height:"42px",
                                borderRadius: "4px",
                            }} 
                            className="flex items-center justify-center rounded-lg bg-gray-r171a1d hover:opacity-75"
                        >
                            <div 
                                style={{
                                    width:"73px", 
                                    height:"40px",
                                    background: "linear-gradient(to bottom, #585b5e, #303337)",
                                }} 
                                className="flex items-center justify-center bg-black rounded-lg border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r585b5e to-gray-r303337 cursor-pointer"
                            >
                                <span style={{fontSize: '2.625rem'}} className="font-spoqaMedium tracking-tight text-14px text-white">검색</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default DateSearchBar

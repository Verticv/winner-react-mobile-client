import React from 'react'

const MyPageTitle = ({
    title, 
    couponCount = null,
    couponText ="사용 가능한 쿠폰:",
    pointsFor = null,
    inboxCount = null,
    isTransaction = false
}) => {
    return (
        <div className="flex h-21px w-full justify-between">
            <div className="flex h-21px w-full">
                <div className="w-8px h-20px bg-gradient-to-b from-blue-gradLight to-blue-gradDark rounded-3px mt-px"/>
                <label className="font-spoqaMedium text-22px text-gray-r585858 ml-4px -mt-5px">{title}</label>
                {couponCount && (
                    <>
                        <div className="ml-20px h-21px flex items-center space-x-20px">
                            <div style={{backgroundColor:"#b1b1b1"}} className="h-12px w-px bg-gray-r8c8c8c mb-px" />
                            <div className="font-spoqaMedium tracking-tight text-gray-r8c8c8c space-x-2px">
                                <span>{couponText}</span>
                                <span style={{color: "#ed2f59"}} className="font-spoqaBold">{couponCount}</span>
                                <span>장</span>
                            </div>
                        </div>
                    </>
                )}
                {pointsFor && (
                    <div className="ml-20px h-21px flex items-center space-x-20px">
                        <div style={{backgroundColor:"#b1b1b1"}} className="h-12px w-px bg-gray-r8c8c8c mb-px" />
                        <div className="font-spoqaMedium tracking-tight text-gray-r8c8c8c space-x-2px">
                            <span className="font-spoqaBold text-blue-r0056a6">{pointsFor}</span>
                            <span className="님의 포인트전환 정보입니다.">{isTransaction ? "님의 포인트전환 정보입니다." : "님의 포인트적립 정보입니다."}</span>
                        </div>
                    </div>
                )}
                {inboxCount && (
                    <div className="ml-20px h-21px flex items-center space-x-20px">
                        <div style={{backgroundColor:"#b1b1b1"}} className="h-12px w-px mb-px" />
                        <div className="font-spoqaMedium tracking-tight text-gray-r8c8c8c">
                            <span className="">전체 받은 쪽지</span>
                            <span className="font-spoqaBold text-red-ff1237 ml-3px">{inboxCount}</span>
                            <span className="">건</span>
                        </div>
                    </div>
                )}
            </div>
            {inboxCount && (
                <div className="ml-20px h-21px flex items-center space-x-20px flex-shrink-0">
                    <div className="font-spoqaMedium tracking-tight text-gray-r8c8c8c">
                        <span className="">쪽지 보관은 최장</span>
                        <span className="font-spoqaBold text-blue-r0056a6 ml-3px">14</span>
                        <span className="">일</span>
                        <span className="ml-2px">최대</span>
                        <span className="font-spoqaBold text-blue-r0056a6 ml-3px">20</span>
                        <span className="">개입니다.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyPageTitle

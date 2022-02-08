import React from 'react'
import { useHistory, useLocation  } from 'react-router';
import Question from '../../images/tabbar/1.png'
import QuestionActive from '../../images/newImages/mainPage/icons/navbar/question-active.png'
import MyInfo from '../../images/tabbar/2.png'
import NoticeBoard from '../../images/tabbar/4.png'
import NoticeBoardActive from '../../images/newImages/mainPage/icons/navbar/notice-board-active.png'
import Home from '../../images/newImages/mainPage/icons/navbar/home.png'
import HomeActive from '../../images/tabbar/3.png'
import Attendance from '../../images/tabbar/5.png'
import AttendanceActive from '../../images/newImages/mainPage/icons/navbar/attendance-active.png'




const BottomNavbar = () => {
    const history = useHistory();
    const location = useLocation();
    const currentPath = location.pathname
    const isAttendancePage = currentPath === '/attendance';
    const isBoardPage = currentPath?.includes('/freeboard');
    const isDistributorPage = currentPath?.includes('/distributor-page');
    const isInboxPage = currentPath?.includes('/inbox');
    const isCustomerCenterPage = currentPath?.includes('/cscenter');
    const isBetHistoryPage = currentPath?.includes('/bet-history');
    const isMoneyPage = currentPath?.includes('/money');
    const isPointsPage = currentPath?.includes('/points');
    const isSettlementPage = currentPath?.includes('/win-lose-settlement');
    const isGameResultsPage = currentPath?.includes('/gameresults');
    const isCouponPage = currentPath?.includes('/coupon');
    const isEditInfoPage = currentPath?.includes('/edit-info');

    let isHomePage = true;

    if (isAttendancePage || 
        isBoardPage || 
        isCustomerCenterPage || 
        isBetHistoryPage || 
        isMoneyPage || 
        isPointsPage ||
        isSettlementPage ||
        isDistributorPage ||
        isGameResultsPage ||
        isInboxPage ||
        isCouponPage ||
        isEditInfoPage
        ) {
        isHomePage = false
    }
    
    
    return (
        <div style={{maxWidth: '1242px', borderTopLeftRadius: '3.5rem', borderTopRightRadius: '3.5rem'}} id='main-menu' className="w-full z-50 shadow-plain bg-white fixed bottom-0">
            <div style={{paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1.875rem', height: '70px', paddingTop:"2rem"}} className="flex items-center h-full space-x-10">
                <button
                    // style={{width: '15.625rem'}}
                    className="flex flex-col w-full items-center"
                    onClick={() => history.push('/attendance')}
                    >
                    <img style={{width: '32px', paddingBottom: '0.4375rem'}} className="object-contain" src={isAttendancePage ? AttendanceActive : Attendance } alt="" />
                    <p style={{fontSize: '12px'}} className={`font-spoqaMedium ${isAttendancePage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>출석부</p>
                </button>
                <button 
                    // style={{width: '16.5625rem'}}
                    className="flex flex-col w-full items-center"
                    onClick={() => history.push('/freeboard')}
                    >
                    <img style={{width: '32px', paddingBottom: '0.4375rem'}} className="object-contain" src={isBoardPage ? NoticeBoardActive : NoticeBoard } alt="" />
                    <p style={{fontSize: '12px'}} className={`font-spoqaMedium ${isBoardPage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>게시판</p>
                </button>
                <button 
                    // style={{width: '15.1rem'}}
                    className="flex flex-col w-full items-center"
                    onClick={() => history.push('/main')}
                >
                    <img style={{paddingBottom: '0.4375rem', width: '32px'}} className="object-contain" src={isHomePage ? HomeActive : Home} alt="" />
                    <p style={{fontSize: '12px'}} className={`font-spoqaMedium ${isHomePage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>홈</p>
                </button>
                <button 
                    // style={{width: '13.3125rem'}}
                    className="flex flex-col w-full items-center"
                    onClick={() => history.push('/cscenter/all/contact/all')}
                >
                    <img style={{paddingBottom: '0.4375rem', width: '32px'}} className="object-contain" src={isCustomerCenterPage ? QuestionActive : Question } alt="" />
                    <p style={{fontSize: '12px'}} className={`font-spoqaMedium ${isCustomerCenterPage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>문의</p>
                </button>
                <button 
                    className="flex flex-col w-full items-center"
                    onClick={() => history.push('/mypage')}
                    >
                    <img style={{paddingBottom: '0.4375rem', width: '32px'}} className="object-contain" src={MyInfo} alt="" />
                    <p style={{color:"#727272", fontSize: '12px'}} className="font-spoqaMedium">마이인포</p>
                </button>

            </div>
        </div>
    )
}

export default BottomNavbar

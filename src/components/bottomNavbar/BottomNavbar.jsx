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
            <div style={{paddingLeft: '4.5rem', paddingRight: '2.5rem', paddingBottom: '1.875rem'}} className="flex py-12 items-center h-full">
                <button
                    style={{width: '15.625rem'}}
                    className="flex flex-col"
                    onClick={() => history.push('/attendance')}
                    >
                    <img style={{width: '4.25rem', marginLeft: '1.1875rem', paddingBottom: '0.4375rem'}} className="w-16 object-contain" src={isAttendancePage ? AttendanceActive : Attendance } alt="" />
                    <p style={{fontSize: '2.625rem', marginLeft: '-0.25rem'}} className={`font-spoqaMedium ${isAttendancePage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>출석부</p>
                </button>
                <button 
                    style={{width: '16.5625rem'}}
                    className="flex flex-col"
                    onClick={() => history.push('/freeboard')}
                    >
                    <img style={{width: '4.625rem', marginLeft: '0.875rem', paddingBottom: '0.4375rem'}} className="object-contain" src={isBoardPage ? NoticeBoardActive : NoticeBoard } alt="" />
                    <p style={{fontSize: '2.625rem', marginLeft: '-0.4375rem'}} className={`font-spoqaMedium ${isBoardPage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>게시판</p>
                </button>
                <button 
                    style={{width: '15.1rem'}}
                    className="flex flex-col"
                    onClick={() => history.push('/main')}
                >
                    <img style={{paddingBottom: '0.4375rem', width: '4.5625rem'}} className="w-20 object-contain" src={isHomePage ? HomeActive : Home} alt="" />
                    <p style={{fontSize: '2.625rem', marginLeft: '1.0625rem'}} className={`font-spoqaMedium ${isHomePage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>홈</p>
                </button>
                <button 
                    style={{width: '13.3125rem'}}
                    className="flex flex-col"
                    onClick={() => history.push('/cscenter/all/contact/all')}
                >
                    <img style={{marginLeft: '0.75rem', paddingBottom: '0.4375rem'}} className="w-16 object-contain" src={isCustomerCenterPage ? QuestionActive : Question } alt="" />
                    <p style={{fontSize: '2.625rem', marginLeft: '0.375rem'}} className={`font-spoqaMedium ${isCustomerCenterPage ? 'text-blue-r009edf' : 'text-gray-r727272' }`}>문의</p>
                </button>
                <button 
                    className="flex flex-col"
                    onClick={() => history.push('/mypage')}
                    >
                    <img style={{marginLeft: '3.0625rem', paddingBottom: '0.4375rem'}} className="w-16 object-contain" src={MyInfo} alt="" />
                    <p style={{color:"#727272", fontSize: '2.625rem', marginLeft: '0.1875rem'}} className="font-spoqaMedium">마이인포</p>
                </button>

            </div>
        </div>
    )
}

export default BottomNavbar

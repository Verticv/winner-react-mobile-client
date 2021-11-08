import React from 'react'
import MenuCard from './MenuCard'
import Withdraw from '../../images/menu/withdraw.png'
import MenuIcon from '../../images/menu/menu_icon.png'
import MyMenuIcon from '../../images/menu/my_menu_icon.png'
import Customer from '../../images/menu/customer_service.png'
import ExchangeIcon from '../../images/menu/exchange_icon.png'
import ExchangeIconHighlight from '../../images/menu/exchange_icon_highlight.png'
import PointExchangeIcon from '../../images/menu/point_exchange.png'
import PointExchangeIconHighlight from '../../images/menu/point_exchange_highlight.png'
import ChargeMoneyIcon from '../../images/menu/charge_money.png'
import ChargeMoneyIconHighlight from '../../images/menu/charge_money_highlight.png'
import BetHistoryIcon from '../../images/menu/bet_history.png'
import BetHistoryIconHighlight from '../../images/menu/bet_history_highlight.png'
import TransactionHistoryIcon from '../../images/menu/transaction_history.png'
import TransactionHistoryIconHighlight from '../../images/menu/transaction_history_highlight.png'
import PointHistoryIcon from '../../images/menu/point_history.png'
import PointHistoryIconHighlight from '../../images/menu/point_history_highlight.png'
import AttendanceIcon from '../../images/menu/attendance.png'
import AttendanceIconHighlight from '../../images/menu/attendance_highlight.png'
import ManageInboxIcon from '../../images/menu/manage_inbox.png'
import ManageInboxIconHighlight from '../../images/menu/manage_inbox_highlight.png'
import ManageProfileIcon from '../../images/menu/manage_profile.png'
import ManageProfileIconHighlight from '../../images/menu/manage_profile_highlight.png'
import ContactIcon from '../../images/menu/contact.png'
import ContactIconHighlight from '../../images/menu/contact_highlight.png'
import AnnouncementIcon from '../../images/menu/announcement.png'
import AnnouncementIconHighlight from '../../images/menu/announcement_highlight.png'
import FaqIcon from '../../images/menu/faq.png'
import FaqIconHighlight from '../../images/menu/faq_highlight.png'

const Menus = () => {
    return (
        <div className="flex justify-between w-full space-x-4 pb-20px">
            <MenuCard 
                mainIcon={Withdraw} 
                menuTitle="충전/환전" 
                optionTitle1="보유머니충전"
                optionTitle2="보유머니환전"
                optionTitle3="포인트전환"
                optionIcon1={ChargeMoneyIcon}
                optionIcon2={ExchangeIcon}
                optionIcon3={PointExchangeIcon}
                optionIconHighlight1={ChargeMoneyIconHighlight}
                optionIconHighlight2={ExchangeIconHighlight}
                optionIconHighlight3={PointExchangeIconHighlight}
                extraIconCss="w-49px h-47px mb-2px"
                path1="/money/charge"
                path2="/money/exchange"
                path3="/mypage/points/points-apply"
            />
            <MenuCard 
                mainIcon={MenuIcon} 
                menuTitle="내역메뉴" 
                optionTitle1="베팅내역"
                optionTitle2="충환전내역"
                optionTitle3="포인트내역"
                optionIcon1={BetHistoryIcon}
                optionIcon2={TransactionHistoryIcon}
                optionIcon3={PointHistoryIcon}
                optionIconHighlight1={BetHistoryIconHighlight}
                optionIconHighlight2={TransactionHistoryIconHighlight}
                optionIconHighlight3={PointHistoryIconHighlight}
                extraIconCss="w-41px h-50px mr-6px mb-px"
                path1="/mypage/bet-history"
                path2="/mypage/transaction/charge-history"
                path3="/mypage/points/points-accumulate-history"
            />
            <MenuCard 
                mainIcon={MyMenuIcon} 
                menuTitle="MY메뉴"
                optionTitle1="출석부"
                optionTitle2="쪽지관리"
                optionTitle3="회원정보수정"
                optionIcon1={AttendanceIcon}
                optionIcon2={ManageInboxIcon}
                optionIcon3={ManageProfileIcon}
                optionIconHighlight1={AttendanceIconHighlight}
                optionIconHighlight2={ManageInboxIconHighlight}
                optionIconHighlight3={ManageProfileIconHighlight}
                extraIconCss="w-43px h-52px mr-6px -mb-px"
                path1="/attendance"
                path2="/mypage/inbox"
                path3=""
            />
            <MenuCard 
                mainIcon={Customer} 
                menuTitle="고객센터"
                optionTitle1="문의하기"
                optionTitle2="공지사항"
                optionTitle3="자주묻는질문"
                optionIcon1={ContactIcon}
                optionIcon2={AnnouncementIcon}
                optionIcon3={FaqIcon}
                optionIconHighlight1={ContactIconHighlight}
                optionIconHighlight2={AnnouncementIconHighlight}
                optionIconHighlight3={FaqIconHighlight}
                extraIconCss="w-48px h-49px mb-2px"
                path1="/cscenter/contact/all"
                path2="/cscenter/announcement"
                path3="/cscenter/faq"
            />
        </div>
    )
}

export default Menus

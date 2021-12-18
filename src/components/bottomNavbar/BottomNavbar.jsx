import React from 'react'
import { useHistory } from 'react-router';
import TabIcon1 from '../../images/tabbar/1.png'
import TabIcon2 from '../../images/tabbar/2.png'
import TabIcon3 from '../../images/tabbar/3.png'
import TabIcon4 from '../../images/tabbar/4.png'
import TabIcon5 from '../../images/tabbar/5.png'


const BottomNavbar = () => {
    const history = useHistory();
    
    return (
        <div style={{maxWidth: '1242px'}} className="w-full z-50 rounded-t-3xl shadow-plain bg-white fixed bottom-0">
            <div className="flex justify-around py-12 items-center h-full">
                <button className="flex flex-col items-center space-y-3px">
                    <img className="w-16 pb-5 object-contain" src={TabIcon5} alt="" />
                    <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">출석부</p>
                </button>
                <button 
                    className="flex flex-col items-center space-y-3px"
                    onClick={() => history.push('/freeboard')}
                    >
                    <img className="w-20 pb-5 object-contain" src={TabIcon4} alt="" />
                    <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">게시판</p>
                </button>
                <button 
                    className="flex flex-col items-center space-y-3px"
                    onClick={() => history.push('/main')}
                >
                    <img className="w-20 pb-5 object-contain" src={TabIcon3} alt="" />
                    <p className="text-blue-r009edf text-5xl font-spoqaMedium">홈</p>
                </button>
                <button 
                    className="flex flex-col items-center space-y-3px"
                    onClick={() => history.push('/cscenter/contact/all')}
                >
                    <img className="w-16 pb-5 object-contain" src={TabIcon1} alt="" />
                    <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">문의</p>
                </button>
                <button 
                    className="flex flex-col items-center space-y-3px"
                    onClick={() => history.push('/mypage')}
                    >
                    <img className="w-16 pb-5 object-contain" src={TabIcon2} alt="" />
                    <p style={{color:"#727272"}} className="text-5xl font-spoqaMedium">마이인포</p>
                </button>

            </div>
        </div>
    )
}

export default BottomNavbar

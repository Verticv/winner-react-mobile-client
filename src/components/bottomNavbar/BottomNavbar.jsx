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
            <div style={{paddingLeft: '4.875rem', paddingRight: '2.5rem', paddingBottom: '1.875rem'}} className="flex py-12 items-center h-full">
                <button
                    style={{width: '15.625rem'}}
                    className="flex flex-col">
                    <img style={{width: '4.25rem', marginLeft: '1.1875rem', paddingBottom: '0.4375rem'}} className="w-16 object-contain" src={TabIcon5} alt="" />
                    <p style={{color:"#727272", fontSize: '2.625rem'}} className="font-spoqaMedium">출석부</p>
                </button>
                <button 
                    style={{width: '16.5625rem'}}
                    className="flex flex-col"
                    onClick={() => history.push('/freeboard')}
                    >
                    <img style={{width: '4.625rem', marginLeft: '1.1875rem', paddingBottom: '0.4375rem'}} className="object-contain" src={TabIcon4} alt="" />
                    <p style={{color:"#727272", fontSize: '2.625rem'}} className="font-spoqaMedium">게시판</p>
                </button>
                <button 
                    style={{width: '15.1rem'}}
                    className="flex flex-col"
                    onClick={() => history.push('/main')}
                >
                    <img style={{paddingBottom: '0.4375rem', width: '4.5625rem'}} className="w-20 object-contain" src={TabIcon3} alt="" />
                    <p style={{fontSize: '2.625rem', marginLeft: '1.1875rem'}} className="text-blue-r009edf font-spoqaMedium">홈</p>
                </button>
                <button 
                    style={{width: '13.3125rem'}}
                    className="flex flex-col"
                    onClick={() => history.push('/cscenter/contact/all')}
                >
                    <img style={{marginLeft: '0.75rem', paddingBottom: '0.4375rem'}} className="w-16 object-contain" src={TabIcon1} alt="" />
                    <p style={{color:"#727272", fontSize: '2.625rem', marginLeft: '0.375rem'}} className="font-spoqaMedium">문의</p>
                </button>
                <button 
                    className="flex flex-col"
                    onClick={() => history.push('/mypage')}
                    >
                    <img style={{marginLeft: '3.0625rem', paddingBottom: '0.4375rem'}} className="w-16 object-contain" src={TabIcon2} alt="" />
                    <p style={{color:"#727272", fontSize: '2.625rem', marginLeft: '0.1875ewm'}} className="font-spoqaMedium">마이인포</p>
                </button>

            </div>
        </div>
    )
}

export default BottomNavbar

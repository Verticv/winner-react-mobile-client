import React from 'react'
import { useHistory } from 'react-router';
import Rank1 from '../../images/newImages/freeboard/1.png'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'



const ContactView = () => {

    const BodyText1 = "안녕하세요. \n 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다."
    const BodyText2 = "추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 문의하시면 24시간 항상 친절하게 안내 도와드리겠습니다. \n 앞으로 많은 이용 부탁드립니다."
    const BodyText3 = "감사합니다."
    const BodyText4 = "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com"
    const history = useHistory();


    return (
        <div className="w-full">

            <div style={{margin: '1.875rem'}} className="rounded-2xl overflow-hidden shadow-subNavbar border border-gray-dddddd mt-20px">
                {/* TITLE */}
                <div style={{borderBottomWidth: '0.1875rem'}} className="bg-gray-fafafa border-b border-gray-ededed flex flex-wrap  items-center">
                    <div style={{margin: '2.0625rem 0'}} className='flex w-full justify-center'>
                        <div 
                            style={{backgroundColor:"#41b06c", fontSize: '2.4375rem', padding: '0.35rem 1.8rem', paddingBottom: '0', width: 'fit-content'}} 
                            className="rounded-full flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                        >
                            계좌문의
                        </div>
                    </div>
                    <div style={{marginBottom: '1.3125rem'}} className="flex justify-center text-5xl w-full font-spoqaMedium tracking-tight text-gray-r454545">
                        은행계좌정보
                    </div>
                </div>

                <div style={{height: '7.3125rem', padding: '1.4375rem 1.875rem', borderBottomWidth: '0.1875rem' }} className="relative bg-gray-fafafa border-b border-gray-dddddd flex items-center">
                    <img style={{width: "3.625rem", height: '4.4375rem'}} src={Rank1} alt="" />
                    <p className='flex items-center text-gray-r585858 font-spoqaMedium' style={{fontSize: '2.4375rem', marginLeft: '0.875rem'}}>마이마이프로틴화이팅</p>
                    <div className='flex mt-2'>
                        <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem', marginTop: '0.5rem'}} className='bg-gray-dddddd'></div>
                        <p style={{fontSize: '2.25rem'}} className="text-gray-r7b7b7b tracking-tight font-spoqa">2021.06.28 15:36</p>
                    </div>
                    <div 
                        style={{backgroundColor:"#02569c", fontSize: '2.4375rem', marginRight: '1.875rem', padding: '0.35rem 1.8rem', paddingBottom: '0', width: 'fit-content'}} 
                        className="absolute right-0 rounded-full flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                    >
                        답변대기
                    </div>
                </div>

                <div style={{borderRadius:"1.25rem", borderWidth: '0.1875rem', paddingLeft: '1.875rem' ,height: '7rem' ,fontSize: '2.8125rem', margin: '3.75rem 1.875rem', WebkitTextStroke:"0.2px"}} className="border border-gray-dddddd flex items-center font-spoqa tracking-tight text-gray-r585858">
                    입금 계좌 요청합니다. [시스템 자동메시지]
                </div>

                <div style={{borderRadius: '1.25rem' ,fontSize: '2.8125rem', padding: '1.875rem', paddingRight: '2.8125rem', paddingBottom: '1rem', margin: '1.875rem', marginTop: '0', marginBottom: '5.1875rem'}} className="bg-blue-e8f3fd font-spoqa text-gray-r585858 flex flex-col border-b border-gray-dddddd">
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText1.split('\n').map((item, i) => 
                            <p  key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText2.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText3.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div className="">
                        {BodyText4.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    
                </div>
            </div>

            <div style={{margin: '1.875rem', marginTop: '3.75rem', marginBottom: '14rem'}} className="flex items-start justify-between">
                <button style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem'}} className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75">
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">이전</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem', marginRight: '0.75rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/cscenter/contact/all')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">목록보기</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '0.1875rem', fontSize: '2.8125rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-lg bg-gray-r171a1d hover:opacity-75"
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-lg border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">다음</span>
                    </div>
                </button>
            </div>
            <BottomNavbar />
        </div>
    )
}

export default ContactView


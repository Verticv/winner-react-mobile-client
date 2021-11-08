import MyPageTitle from 'components/myPage/MyPageTitle'
import React from 'react'
import { useHistory } from 'react-router';
import Rank1Icon from '../../images/cscenter/rank1.png'

const ContactView = () => {

    const BodyText1 = "안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다."
    const BodyText2 = "추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 문의하시면 24시간 항상 친절하게 안내 도와드리겠습니다. \n 앞으로 많은 이용 부탁드립니다."
    const BodyText3 = "감사합니다."
    const BodyText4 = "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com"
    const history = useHistory();

    return (
        <div>
            <MyPageTitle title="문의하기" />


            <div style={{borderRadius:"1em"}} className="shadow-subNavbar w-full mt-20px bg-gray-fafafa overflow-hidden">
                <div className="h-56px w-full border-b border-gray-dddddd px-20px flex items-center space-x-10px">
                    <div 
                        style={{backgroundColor: "#dfebf7", color: "#4b87bf"}} 
                        className="w-66px h-25px rounded-full font-spoqaMedium text-12px tracking-tight flex items-center justify-center"
                    >
                        답변완료
                    </div>

                    <div 
                        style={{backgroundColor: "#41b06c", color: "#fff"}} 
                        className="w-56px h-25px rounded-full font-spoqaMedium text-12px tracking-tight flex items-center justify-center"
                    >
                        스포츠
                    </div>
                    
                    <p className="font-spoqaMedium text-15px tracking-tight text-gray-r454545">스포츠북 문의</p>
                </div>

                <div className="h-56px w-full border-b border-gray-dddddd px-20px flex items-center text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">
                    <img src={Rank1Icon} alt="" />
                    <p className="ml-3px">마이마이프로틴화이팅</p>

                    <div className="h-11px w-px bg-gray-dddddd mx-10px"></div>

                    <p className="">2021.06.28 15:49</p>
                </div>

                <div className="w-full bg-white py-20px px-16px">
                    <div style={{borderRadius:"1em", WebkitTextStroke:"0.2px"}} className="border border-gray-dddddd h-54px flex items-center px-21px font-spoqa text-14px tracking-tight text-gray-r585858">
                        스포츠북 문의 입니다.
                    </div>

                    <div style={{borderRadius:"1em"}} className="bg-blue-e8f3fd py-20px px-23px mt-20px font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-32px">
                        <div className="space-y-10px">
                            {BodyText1.split('\n').map((item, i) => 
                                <p key={i} className="flex items-center h-14px">{item}</p>
                            )}
                        </div>
                        <div className="space-y-10px">
                            {BodyText2.split('\n').map((item, i) => 
                                <p key={i} className="flex items-center h-14px">{item}</p>
                            )}
                        </div>
                        <div className="space-y-10px">
                            {BodyText3.split('\n').map((item, i) => 
                                <p key={i} className="flex items-center h-14px">{item}</p>
                            )}
                        </div>
                        <div className="space-y-10px">
                            {BodyText4.split('\n').map((item, i) => 
                                <p key={i} className="flex items-center h-14px">{item}</p>
                            )}
                        </div>
                        
                    </div>
                </div>

            </div>


            <div className="mt-20px mb-60px flex items-start justify-between">
                <button className="flex items-center justify-center h-36px w-90px rounded-4px bg-gray-r171a1d hover:opacity-75">
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">이전</span>
                    </div>
                </button>

                <button 
                    className="flex items-center justify-center h-52px w-192px rounded-4px bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/cscenter/contact/all')}
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-50px w-190px bg-black rounded-4px border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-16px text-white">목록보기</span>
                    </div>
                </button>

                <button className="flex items-center justify-center h-36px w-90px rounded-4px bg-gray-r171a1d hover:opacity-75">
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-34px w-88px bg-black rounded-4px border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-white">다음</span>
                    </div>
                </button>
            </div>
            
        </div>
    )
}

export default ContactView

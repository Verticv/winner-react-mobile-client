import React from 'react'
import MyPageTitle from './MyPageTitle'
import WinnerLogo from '../../images/logo.png'
import { useHistory } from 'react-router'

const InboxView = () => {

    const TitleText = "서버 점검 안내"
    const PostedTime = "2021.06.28 15:49"
    const SubtitleText = "정기 점검 안내"
    const BodyText = "안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다. \n 금일 정기 점검이예정되어 안내드리오니 참고 후 이용 부탁드립니다. \n 점검 내용 : 정기 점검 \n 시작 시간 : 2021년 05월 10일 14:00 \n 종료 시간 : 2021년 05년 10일 17:00 \n 점검은 상황에 따라 조기 종료 혹은 지연 될 수 있습니다. \n 최대한 빠른 정상화를 위해 노력하겠습니다.\n 추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 몬의하시면 24시간 항상 친절하게 안내 도움드리겠습니다/ \n 앞으로 많은 이용 부탁드립니다. \n 감사합니다."
    const FooterText = "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com"
    
    const history = useHistory();

    const NewLabel = (
        <div style={{paddingTop:"1px", paddingLeft:"1px"}} className="w-17px h-17px rounded-full bg-red-ff1237 text-white font-roboto text-12px flex items-center justify-center">
            <span className="flex items-center h-12px">N</span>
        </div>
    )

    return (
        <div>
            <MyPageTitle title="쪽지관리"/>

            <div className="w-full rounded-2xl overflow-hidden shadow-subNavbar border border-gray-dddddd mt-20px">
                {/* TITLE */}
                <div className="h-56px w-full bg-gray-fafafa flex items-center px-19px space-x-10px border-b border-gray-dddddd">
                    <div className="w-45px h-24px rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white text-12px font-spoqaMedium">안내</div>
                    <h1 className="font-spoqaMedium text-15px tracking-tight text-gray-r454545 ">
                        {TitleText}
                    </h1>
                    {NewLabel}
                </div>
                {/* SENDER */}
                <div className="h-56px w-full bg-gray-fafafa flex px-19px space-x-10px border-b border-gray-dddddd">
                    <img className="h-17px w-72px object-contain mt-19px" src={WinnerLogo} alt=""/>
                    <div className="h-11px w-px bg-gray-dddddd mt-24px"/>
                    <div className="font-spoqaMedium text-14px tracking-tight text-gray-r7b7b7b h-12px flex items-center mt-24px">
                        {PostedTime}
                    </div>
                </div>
                <div className="w-full bg-white flex flex-col px-19px border-b border-gray-dddddd py-18px px-19px">
                    <p className="font-spoqaMedium text-15px tracking-tight text-gray-r585858 ">
                        {SubtitleText}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-34px mt-39px">
                        {BodyText.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 mt-34px space-y-11px">
                        {FooterText.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
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
                    onClick={() => history.push('/mypage/inbox')}
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

export default InboxView

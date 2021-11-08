import MyPageTitle from 'components/myPage/MyPageTitle'
import React from 'react'
import { useHistory } from 'react-router'
import WinnerLogo from '../../images/logo.png'

const AnnouncementView = () => {

    const TitleText = "농구[쿼터] / 배구[세트] 스페셜 규정"
    const SubtitleText = "스페셜 - 1쿼터 및 3쿼터 실시간 (3쿼터는 2쿼터 종료 후 업데이트됩니다.)  1,3쿼터 [핸디캡] 양 팀의 "
    const BodyText1 = "1,3쿼터 [핸디캡] \n 양 팀의 1,3쿼터 승패를 맞추는 게임입니다. \n 1,3쿼터 [오버/언더] \n 1,3쿼터 양 팀 득점 총합의 언더/오버를 맞추는 게임입니다. \n 1쿼터 핸디 + 언더/오버 + 첫2 + 첫3 + 첫자 크로스 베팅 가능"
    const BodyText2 = "1쿼터/3쿼터 핸디캡[1Q], 1쿼터 언더/오버[1Q 언더/오버] 종목 대상경기의 1쿼터 경기기록만을 기준점에 따라 핸디캡과 언더/오버 규칙에 \n 적용하는 방식입니다. 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다. \n 모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다. \n https://www.nba.com \n https://www.kbl.or.kr \n https://www.wkbl.or.kr/main/index.asp"
    const BodyText3 = "[첫 블로킹 득점] \n 처음으로 블로킹 득점을 기록한 팀을 맞추는 게임 입니다.   블로킹으로 점수를 획득한 팀으로 마감 처리됩니다."
    const BodyText4 = "[첫 서브 득점] \n 처음으로 서브 득점을 기록한 팀을 맞추는 게임 입니다.   서브로 점수를 획득한 팀으로 마감 처리됩니다. \n 세트 핸디캡 및 오버/언더 [세트] 종목은 대상경기의 [세트] 양 팀의 총 득점의 합산으로 경기결과가 적용됩니다. \n WINNER 크로스베팅의 경우 세트별 오버/언더로 업데이트 되지만, [세트]의 경우 양팀 합산 [세트] 점수로 결과값이  적용된다는점 참고 바랍니다."
    const BodyText5 = "[세트] 핸디 + 오버/언더 크로스베팅 가능 \n [세트 핸디 및 오버/언더]  + [첫 서브 득점] +  [첫 블로킹 득점] 크로스베팅 가능 \n 1세트 / 2세트 / 3세트 /4세트 실시간 업데이트 진행 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다."
    const BodyText6 = "모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다."
    const BodyText7 = "https://www.kovo.co.kr/main.asp"

    const history = useHistory();

    const NewLabel = (
        <div className="w-17px h-17px rounded-full bg-red-ff1237 -mt-px text-white font-roboto text-12px flex items-center justify-center pt-px">
            N
        </div>
    )

    return (
        <div>
            <MyPageTitle title="공지사항"/>

            <div style={{borderRadius:"1em"}} className="w-full overflow-hidden shadow-subNavbar mt-20px">
                {/* TITLE */}
                <div className="h-56px w-full bg-gray-fafafa flex items-center px-19px space-x-10px border-b border-gray-dddddd">
                    <p className="text-14px font-spoqaMedium tracking-tight text-blue-r0056a6">스포츠북</p>
                    <h1 className="font-spoqaMedium text-15px tracking-tight text-gray-r454545 ">
                        {TitleText}
                    </h1>
                    {NewLabel}
                </div>
                {/* SENDER */}
                <div className="h-56px w-full bg-gray-fafafa flex px-19px space-x-10px border-b border-gray-dddddd items-center">
                    <img className="h-17px w-72px object-contain mb-4px" src={WinnerLogo} alt=""/>
                    <div className="w-px bg-gray-dddddd h-11px" />
                    <div className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">2021.06.29</div>
                </div>
                <div className="w-full bg-white flex flex-col px-19px border-b border-gray-dddddd py-18px px-19px">
                    <p className="font-spoqaMedium text-16px tracking-tight text-gray-r585858 ">
                        {SubtitleText}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-10px mt-39px">
                        {BodyText1.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-10px mt-39px">
                        {BodyText2.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-10px mt-39px">
                        {BodyText3.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-10px mt-39px">
                        {BodyText4.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-10px mt-39px">
                        {BodyText5.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-10px mt-39px">
                        {BodyText6.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center h-14px">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858 space-y-10px mt-39px">
                        {BodyText7.split('\n').map((item, i) => 
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
                    onClick={() => history.push('/cscenter/announcement')}
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

export default AnnouncementView

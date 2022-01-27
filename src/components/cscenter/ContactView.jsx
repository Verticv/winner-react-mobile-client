import React from 'react'
import { useHistory } from 'react-router';
import Rank1 from '../../images/newImages/freeboard/1.png'
import BottomNavbar from 'components/bottomNavbar/BottomNavbar'



const ContactView = () => {

    const BodyText1 = "안녕하세요. \n 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다."
    const BodyText2 = "[입금 전 주의] \n 회원 정보에 등록 된 출금 계좌에서만 입금 가능 !!"
    const BodyText3 = "계좌문의 후 30분이내로 입금 신청이 없을시 계정이 \n 자동으로 잠금처리됩니다. \n 충전 이용을 하지 못하시는 경우 고객센터로 취소요청하시기 \n 바랍니다."
    const BodyText4 = "▶ 카카오뱅크, 케이뱅크, 증권계좌 사용 불가 \n ▶ 펌뱅킹(토스, 페이, 오픈뱅킹, 통합뱅킹 등) 입금 시 처리 \n 불가 \n ▶ 타명의 계좌에서 본인명의로 변경 후 입금 시 처리 불가 \n ▶ 등록 된 환전 계좌 외 타 계좌에서 입금 시 처리 불가"
    const BodyText5 = "＃ 최근계좌로 보내지 마시고 \n 꼭 계좌번호를 직접 입력해주세요."
    const BodyText6 = "동일 예금주에 다른 계좌번호가 존재합니다. \n (계좌확인 필수!!)"
    const BodyText7 = "매 입금시  계좌문의 해주시기 바라며, \n 상호명은 같으나 계좌 번호, 은행이 다를 수 있으니  \n 꼭 해당 답변과 동일한 정보로 진행 해주시기 바랍니다."
    const BodyText8 = "규정을 무시하여 생긴 불이익은 당사는 책임을지지 \n 않습니다."
    const BodyText9 = "추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, \n 텔레그램 고객센터로 문의하시면  24시간 항상 친절하게 \n 안내 도와드리겠습니다. \n 앞으로 많은 이용 부탁드립니다."
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
                    <p className='flex mt-1.5 items-center text-gray-r585858 font-spoqaMedium' style={{fontSize: '2.4375rem', marginLeft: '0.875rem'}}>마이마이프로틴화이팅</p>
                    <div className='flex mt-2'>
                        <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem', marginTop: '0.4rem'}} className='bg-gray-dddddd'></div>
                        <p style={{fontSize: '2.25rem'}} className="-mt-1 text-gray-r7b7b7b tracking-tight font-spoqa">2021.06.28 15:36</p>
                    </div>
                    <div 
                        style={{backgroundColor:"#02569c", fontSize: '2.4375rem', marginRight: '1.875rem', padding: '0.35rem 1.8rem', paddingBottom: '0', width: 'fit-content', height: '4.125rem'}} 
                        className="absolute right-0 rounded-full flex items-center justify-center font-spoqaMedium tracking-tight text-white"
                    >
                        답변대기
                    </div>
                </div>

                <div style={{borderRadius:"1.25rem", borderWidth: '0.1875rem', paddingLeft: '1.875rem' ,height: '7rem' ,fontSize: '2.8125rem', margin: '3.75rem 1.875rem', WebkitTextStroke:"0.2px"}} className="border border-gray-dddddd flex items-center font-spoqa tracking-tight text-gray-r585858">
                    입금 계좌 요청합니다. [시스템 자동메시지]
                </div>

                <div style={{borderRadius: '1.25rem' ,fontSize: '2.8125rem', paddingTop: '1.0625rem', paddingLeft: '1.5625rem', margin: '1.875rem 1.6875rem', marginTop: '0', marginBottom: '5.1875rem'}} className="bg-blue-e8f3fd font-spoqa text-gray-r585858 flex flex-col border-b border-gray-dddddd">
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText1.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}}  key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText2.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText3.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText4.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                        <p style={{letterSpacing: '-0.05rem', marginLeft: '3.4rem'}} className="flex items-center">(동일 예금주라도 처리 불가)</p>
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText5.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className=""> 
                        <p style={{letterSpacing: '-0.05rem'}} className="flex items-center">계좌번호 :  <span className='ml-4'>131-021-013323</span></p>
                        <p style={{letterSpacing: '-0.05rem'}} className="flex items-center">★최근 입금 계좌 사용 금지 ★</p>
                        <p style={{letterSpacing: '-0.05rem'}} className="flex items-center">은행명 :  <span className='ml-4'>신협</span></p>
                        <p style={{letterSpacing: '-0.05rem'}} className="flex items-center">예금주 :  <span className='ml-4'>리틀토이</span> <span className='ml-4'>★ 은행명 확인 필수</span></p>
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText6.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText7.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '5.875rem'}} className="">
                        {BodyText8.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                    <div style={{marginBottom: '0'}} className="">
                        {BodyText9.split('\n').map((item, i) => 
                            <p style={{letterSpacing: '-0.05rem'}} key={i} className="flex items-center">{item}</p>
                        )}
                    </div>
                </div>
            </div>

            <div style={{margin: '1.875rem', marginTop: '3.75rem', marginBottom: '19.625rem'}} className="flex items-start justify-between">
                <button style={{height: '7.3125rem', padding: '1px', fontSize: '2.8125rem', marginRight: '0.75rem'}} className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75">
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">이전</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '1px', fontSize: '2.8125rem', marginRight: '0.75rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                    onClick={() => history.push('/cscenter/all/contact/all')}
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-white">목록보기</span>
                    </div>
                </button>

                <button 
                    style={{height: '7.3125rem', padding: '1px', fontSize: '2.8125rem'}} 
                    className="flex items-center justify-center w-1/3 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                >
                    <div 
                        style={{
                            background: "linear-gradient(to bottom, #585b5e, #303337)",
                        }}
                        className="flex items-center justify-center h-full w-full bg-black rounded-2xl border border-gray-r737579 cursor-pointer"
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


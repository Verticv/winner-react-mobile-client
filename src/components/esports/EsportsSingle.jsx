import React from 'react'
import Image3 from '../../images/esports/3.png'
import Image4 from '../../images/esports/4.png'
import Image5 from '../../images/esports/5.png'
import Image6 from '../../images/esports/6.png'
import Image7 from '../../images/esports/7.png'
import Dot from '../../images/esports/dot.png'

const EsportsSingle = () => {

    const Item = ({number = "1.", title="보유머니", text="본인의 보유머니가 표시됩니다.", text2=null, text3=null, color1=null, color2=null, color3=null}) => (
        <div className="flex flex-col space-y-4px">
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center">
                <span className="text-blue-r0056a6">{number}</span>
                <span className="text-gray-r585858">{title}</span>
            </div>
            <span style={{color:"#8c8c8c"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text} <p className="ml-2px text-blue-r0056a6">{color1}</p><p style={{color:"#ff1237"}} className="mr-2px">{color2}</p><p>{color3}</p></span>
            {text2 && (
                <span style={{color:"#8c8c8c"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
            )}
            {text3 && (
                <span style={{color:"#8c8c8c"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
            )}
        </div>
    )

    return (
        <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image3} alt="" />
                <div style={{backgroundColor:"#efefef", height:"368px"}} className="w-full h-full rounded-xl p-20px">
                    <Item number="1." title="종목 및 경기선택" text="가. ① 게임종류를 선택합니다." text2="나. ② 경기를 선택합니다." />
                </div>
            </div>

            <div className="h-px w-full bg-gray-dddddd" />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image4} alt="" />
                <div style={{backgroundColor:"#efefef", height:"368px"}} className="w-full h-full rounded-xl p-20px">
                    <Item number="2." title="배당항목 선택" text="원하는 ① 배당을 선택합니다." />
                </div>
            </div>

            <div className="h-px w-full bg-gray-dddddd" />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image5} alt="" />
                <div style={{backgroundColor:"#efefef", height:"368px"}} className="w-full h-full rounded-xl p-20px">
                    <Item number="3." title="베팅금액입력" text="가. ① 베팅금액을 입력합니다." text2="나. ② [확인] 버튼을 누르면 베팅이" text3="완료됩니다." />
                    <div style={{width:"97px", height:"25px", backgroundColor:"#f45400"}} className="text-white flex items-center justify-center font-spoqaBold text-18px tracking-tight pt-px mt-60px">알아두세요!</div>
                    <div className="flex items-center">
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" />
                        <span style={{color:"#8c8c8c"}} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">1/8 최대 : 최대 한도금액을 8로 나눈 금액 베팅</span>
                    </div>
                    <div className="flex items-center">
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" />
                        <span style={{color:"#8c8c8c"}} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-5px">1/4 최대 : 최대 한도금액을 4로 나눈 금액 베팅</span>
                    </div>
                    <div className="flex items-center">
                        <img src={Dot} className="object-contain mr-4px h-4px mt-6px" alt="" />
                        <span style={{color:"#8c8c8c"}} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-5px">1/2 최대 : 최대 한도금액을 2로 나눈 금액 베팅 </span>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-dddddd" />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image6} alt="" />
                <div style={{backgroundColor:"#efefef", height:"368px"}} className="w-full h-full rounded-xl p-20px">
                    <Item number="4." title="베팅완료" text="베팅이 완료되면 ① 베팅내역 화면이 나타나며" text2="상세 베팅내역을 확인할 수 있습니다." />
                </div>
            </div>

            <div className="h-px w-full bg-gray-dddddd" />

            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image7} alt="" />
                <div style={{backgroundColor:"#efefef", height:"368px"}} className="w-full h-full rounded-xl p-20px">
                    <Item number="5." title="베팅내역확인" text="가. ① [내 베팅] 메뉴를 선택합니다." text2="나. ② 베팅내역을 확인할 수 있습니다." />
                </div>
            </div>

            <div className="h-px w-full bg-gray-dddddd" />
            
        </div>
    )
}

export default EsportsSingle
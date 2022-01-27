import React from 'react'
import DownArrowIcon from '../../images/newImages/search-arrow-down.png'
import Dropdown from 'components/common/Dropdown/Dropdown';

const ContactCompose = () => {

    const carrierOptions = ["제목", "본문", "작성자"]
    return (
        <div style={{padding: '1.875rem'}}>
            
            <div className="w-full rounded-2xl shadow-subNavbar overflow-hidden">

                <div style={{height: '9.1875rem', paddingLeft: '2.8125rem',  borderBottomWidth: '0.1875rem'}} className="w-full bg-gray-fafafa border-b border-gray-ededed flex items-center">

                <div style={{width: '26.25rem', height: '6.75rem', borderWidth: '0.1875rem'}} className="flex h-full bg-white rounded-2xl border border-gray-dddddd group">
                    <div
                        style={{ width:'26.25rem'}}
                        className="flex w-full text-gray-r393e41 font-spoqaMedium outline-none rounded-2xl  border-gray-dddddd h-full justify-between items-center tracking-tight" 
                    >
                        <Dropdown labelClasses="group-hover:text-black" labelStyle={{marginLeft: '1.6875rem', color: '#393e41'}} options={carrierOptions} >
                            <img style={{width: '1.5625rem', height: '1rem', marginRight: '1.5625rem'}} className="w-10px h-6px object-contain" src={DownArrowIcon} alt="arrow" /> 
                        </Dropdown>
                    </div>
                </div>

                </div>

                <div style={{height: '9.1875rem', borderBottomWidth: '0.1875rem', paddingLeft: '2.6875rem'}} className="w-full text-5xl bg-white border-b border-gray-dddddd">
                    <input 
                        className="bg-white outline-none w-full h-full font-spoqa tracking-tight place-color-grey-1"
                        placeholder="제목을 입력하세요."
                        onFocus={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom  = '-14.075rem'
                        }}
                        onBlur={() => {
                            const menu = document.querySelector('#main-menu');
                            menu.style.marginBottom = '0'
                        }}
                    />
                </div>

                


                <div style={{height:"70.25rem",paddingTop: '3.125rem', paddingLeft: '2.6875rem', fontSize: '2.8125rem'}} className="w-full bg-white">
                    <textarea 
                        style={{resize: "none", wordBreak:"keep-all"}}
                        className="outline-none w-full h-full font-spoqa tracking-tight placeholder-gray-r454545 place-color-grey-1"
                        placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제 되며 사이트 이용에 제한을 받을 수 있습니다."
                    />
                </div>
            </div>


            <div style={{marginTop: '3.75rem', marginBottom: '14rem', fontSize: '2.8125rem'}} className="flex w-full items-center justify-center">
                <button style={{height: '7.3125rem', padding: '1px'}} className="flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-blue-r0070d9">
                    <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">작성하기</span>
                    </div>
                </button>
                <button style={{height: '7.3125rem', padding: '1px', fontSize: '2.8125rem'}} className="flex items-center justify-center w-1/2 rounded-2xl bg-gray-r171a1d">
                    <div className="flex items-center justify-center w-full h-full rounded-2xl border border-gray-r737579 bg-gradient-to-b from-gray-r585b5e via-gray-r45484c to-gray-r303337 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">취소하기</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ContactCompose

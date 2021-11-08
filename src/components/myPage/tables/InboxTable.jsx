import React from 'react'
import { useHistory } from 'react-router-dom';
import MailIcon from '../../../images/myPage/mail.png'
import MailOpenedIcon from '../../../images/myPage/mail_opened.png'

const InboxTable = ({
    array,
    checkedState,
    setCheckedState
}) => {

    const history = useHistory();

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    function InboxList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${
                    item.isRead === false
                    ? "bg-gray-e8eff6" :
                    item.id % 2 === 0 
                    ? "bg-gray-fdfdfd" 
                    : "bg-gray-f8f9fb"
                } font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd hover:font-spoqaBold group`}
            >
                <div className="flex items-center font-spoqaBold text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd px-54px">        
                    
                    <div className="-ml-2px w-28px flex justify-center">
                        <input
                            type="checkbox"
                            checked={checkedState[item.id]}
                            onChange={() => handleOnChange(item.id)}
                        />
                    </div>

                    <div className="w-107px flex justify-center cursor-pointer" onClick={() => history.push(item.path)}>
                        <img src={item.isRead === true ? MailOpenedIcon : MailIcon} alt=""/>
                    </div>

                    <div
                        className={`${
                            item.isRead === true 
                            ? "text-gray-r7b7b7b font-spoqaMedium" 
                            : "text-gray-r454545 font-spoqaMedium"
                            } w-612px flex items-center space-x-10px cursor-pointer`}
                        onClick={() => history.push(item.path)}
                    >
                        {
                            item.type === "안내" 
                            ? <div className="w-45px h-25px rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white text-12px">안내</div> 
                            : item.type === "이벤트" 
                            ? <div className="w-53px h-25px rounded-full bg-yellow-ffab39 flex items-center justify-center text-white text-12px">이벤트</div> 
                            : <div></div>
                        }
                        <p className="group-hover:text-gray-r585858">{item.text}</p>
                        {item.isRead === false && (
                            <div className="w-17px h-17px bg-red-ff1237 rounded-full text-12px text-white flex items-center justify-center font-roboto">
                                N
                            </div>
                        )}
                    </div>

                    <div className={`${item.isRead === true ? "text-gray-r7b7b7b" : "text-gray-r454545"} w-158px flex font-spoqa justify-center text-center`}>{item.time}</div>

                    <button className="w-70px flex items-center justify-center hover:opacity-75">
                        <div className={`${item.isRead === false  ? "bg-gray-r454545" : "bg-gray-a2a2a2" } w-49px h-29px flex justify-center rounded-full text-white font-spoqaMedium items-center pt-2px`}>
                            삭제
                        </div>
                    </button>
                    
                </div>
            </div>
        ));
    }

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar overflow-hidden">

            <div className="flex items-center bg-gray-fafafa rounded-t-2xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd px-54px">        
                <div className="-ml-2px w-28px flex justify-center">선택</div>
                <div className="w-107px flex justify-center">확인</div>
                <div className="w-612px flex justify-center">제목</div>
                <div className="w-158px flex justify-center">보낸시간</div>
                <div className="w-70px flex justify-center">삭제</div>
            </div>

            <InboxList items={array} />
        </div>
    )
}

export default InboxTable

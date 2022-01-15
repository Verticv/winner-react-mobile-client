import React from 'react'
import { useHistory } from 'react-router-dom';
import MailIcon from '../../../images/myPage/mail.png'
import MailOpenedIcon from '../../../images/myPage/mail_opened.png'
import Delete from '../../../images/newImages/delete.png'
import DeleteDark from '../../../images/newImages/delete-dark.png'


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
                style={{height: '11.625rem', borderBottomWidth: '0.1875rem'}}
                className={`${
                    item.isRead === false
                    ? "bg-gray-e8eff6" :
                    item.id % 2 === 0 
                    ? "bg-gray-fdfdfd" 
                    : "bg-gray-f8f9fb"
                } flex relative font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd hover:font-spoqaBold group`}
            >
                <div style={{width: '7.875rem'}} className="flex justify-center items-center">
                    <label className="form-control">
                        <input
                        style={{width: '2.875rem', height: '2.875rem'}}
                                type="checkbox"
                                checked={checkedState[item.id]}
                                onChange={() => handleOnChange(item.id)}
                            />
                        </label>
                </div>
                <div style={{width: '8.0625rem'}} className="flex justify-start items-center cursor-pointer" onClick={() => history.push(item.path)}>
                    <img style={{width: '5.625rem', height: '5.625rem'}} src={item.isRead === true ? MailOpenedIcon : MailIcon} alt=""/>
                </div>
                 <div 
                    style={{
                        maxWidth: '56.25rem',
                        padding: '1.75rem 2.2rem',
                        paddingLeft: '0',
                        paddingBottom: "1.5rem",
                    }}
                    className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full" >     
                               
                    <div className='w-full h-full flex flex-wrap'>
                        <div
                            className={`${
                                item.isRead === true 
                                ? "text-gray-r7b7b7b font-spoqaMedium" 
                                : "text-gray-r454545 font-spoqaMedium"
                                } flex items-center cursor-pointer`}
                            onClick={() => history.push(item.path)}
                        >
                            {
                                item.type === "안내" 
                                ? <div style={{fontSize: '2.4375rem', padding: '0.35rem 1.8rem'}} className="w-max rounded-full bg-blue-r00a1e9 flex items-center justify-center text-white mr-4 mb-2"><span className='-mb-1'><span className='mt-1 block'>안내</span></span></div> 
                                : item.type === "이벤트" 
                                ? <div style={{fontSize: '2.4375rem', padding: '0.35rem 1.8rem'}} className="w-max rounded-full bg-yellow-ffab39 flex items-center justify-center text-white mr-4 mb-2"><span className='-mb-1'><span className='mt-1 block'>이벤트</span></span></div> 
                                : <div></div>
                            }
                            <p style={{textOverflow: 'ellipsis', maxWidth: '37rem'}} className="group-hover:text-gray-r585858 text-5xl text-ellipsis overflow-hidden whitespace-nowrap">{item.text}</p>
                            {item.isRead === false && (
                                <div style={{width: '3.1875rem', height: '3.1875rem', fontSize: '2.4375rem'}} className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4 font-roboto">
                                    N
                                </div>
                            )}
                        </div>

                        <div 
                            className={`w-full flex justify-start font-spoqaMedium tracking-tight text-r585858 text-center`} >
                                <div className="w-full flex space-x-2px align-center">
                                    <div style={{fontSize: '2.625rem'}} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                        {item.time}
                                    </div>
                                   
                                </div>
                        </div>
                    </div>
                    
                </div>
                <button className='absolute right-0 '>
                    <img style={{width: '4rem', height: '4.375rem', marginRight: '4.6875rem', marginTop: '3.625rem'}} src={item.isRead ? Delete : DeleteDark } alt=""/>
                </button>
            </div>
        ));
    }

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar overflow-hidden">
            <InboxList items={array} />
        </div>
    )
}

export default InboxTable

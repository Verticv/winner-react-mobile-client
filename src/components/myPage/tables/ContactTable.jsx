import React from 'react'
import { useHistory } from 'react-router-dom';
import MailIcon from '../../../images/myPage/mail.png'
import MailOpenedIcon from '../../../images/myPage/mail_opened.png'
import Delete from '../../../images/newImages/delete.png'
import DeleteDark from '../../../images/newImages/delete-dark.png'


const ContactTable = ({
    array,
    checkedState,
    setCheckedState
}) => {

    const history = useHistory();

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
                <div style={{width: '8.0625rem', marginLeft: '1.6875rem'}} className="flex justify-start items-center cursor-pointer" onClick={() => history.push(item.path)}>
                    <img style={{width: '5.625rem', height: '5.625rem'}} src={item.isRead === true ? MailOpenedIcon : MailIcon} alt=""/>
                </div>
                {console.log(`item`, item)}
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
                            <div 
                                style={{marginRight: '1.1875rem' ,fontSize: '2.4375rem', padding: '0.35rem 1.8rem', paddingBottom: '0' , backgroundColor: item.isRead === true ? "#dfebf7" : "#0056a6", color: item.isRead === true ? "#4b87bf" : "#ffffff"}}
                                className={`rounded-full font-spoqaMedium tracking-tight flex items-center justify-center cursor-pointer`} 
                            >
                                <p>{item.isRead === true ? "답변완료" : "답변대기"}</p>
                            </div>
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
                                    <p className='flex items-center text-gray-r7b7b7b' style={{fontSize: '2.625rem', marginLeft: '0.6875rem'}}>{item.category}</p>
                                        <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                                    <div style={{fontSize: '2.625rem'}} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                        {item.time}
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
                <img className='absolute right-0 ' style={{width: '4.75rem', height: '4.75rem', marginRight: '4.6875rem', marginTop: '3.625rem'}} src={item.isRead ? Delete : DeleteDark } alt=""/>
            </div>
        ));
    }

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar overflow-hidden">
            <InboxList items={array} />
        </div>
    )
}

export default ContactTable

import React from 'react'
import { useHistory } from 'react-router';


const AnnouncementTable = ({
    array,
    checkedState,
    setCheckedState
}) => {

    const history = useHistory();

    function InboxList({ items }) {
        return items?.map(item => (
            <div 
                onClick={() => history.push('/cscenter/all/announcement/view')}
                key={item.id} 
                style={{height: '11.625rem', borderBottomWidth: '0.1875rem'}}
                className={`${
                    item.isRead === false
                    ? "bg-gray-e8eff6" :
                    item.id % 2 === 0 
                    ? "bg-gray-fdfdfd" 
                    : "bg-gray-f8f9fb"
                } flex font-spoqaMedium text-14px tracking-tight text-gray-r454545 w-full border-b border-gray-dddddd hover:font-spoqaBold group`}
            >
                 <div 
                    style={{
                        maxWidth: '56.25rem',
                        padding: '1.75rem 2.2rem',
                        paddingLeft: '0',
                        paddingBottom: "1.5rem",
                        marginLeft: '2.5625rem'
                    }}
                    className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full" >     
                               
                    <div className='w-full h-full flex flex-wrap'>
                        <div
                            className= "text-gray-585858 font-spoqaMedium  flex items-center cursor-pointer"
                            onClick={() => history.push(item.path)}
                        >
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem'}} className="group-hover:text-gray-r585858 text-5xl text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</p>
                            {item.isNew && (
                                <div style={{width: '3.1875rem', height: '3.1875rem', fontSize: '2.4375rem'}} className="bg-red-notification rounded-full text-white flex items-center justify-center font-roboto ml-4 font-roboto">
                                    N
                                </div>
                            )}
                        </div>

                        <div 
                            className={`w-full flex justify-start font-spoqaMedium tracking-tight text-r585858 text-center`} >
                                <div className="w-full flex space-x-2px align-center">
                                    <p className='flex items-center text-blue-r0056a6' style={{fontSize: '2.625rem'}}>{item.type}</p>
                                    <div style={{height: '1.75rem', width: '0.1875rem', margin: 'auto 1.1875rem'}} className='bg-gray-c5c5c5'></div>
                                    <div style={{fontSize: '2.625rem'}} className="flex items-center text-gray-r7b7b7b font-spoqa">
                                        {item.time}
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        ));
    }

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar overflow-hidden">
            <InboxList items={array} />
        </div>
    )
}

export default AnnouncementTable

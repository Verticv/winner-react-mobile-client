import React from 'react'

const PowerballResultsTable = ({
    array,
    checkedState,
    setCheckedState
}) => {
    function InboxList({ items }) {
        return items?.map(item => (
            <div 
                key={item.id} 
                style={{height: '11.8125rem', borderBottomWidth: '0.1875rem'}}
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
                        padding: '2rem',
                        paddingLeft: '0',
                        paddingBottom: "1.4rem",
                        marginLeft: '2.5625rem'
                    }}
                    className="flex items-center font-spoqaMedium tracking-tight text-gray-r454545 h-full" >     
                               
                    <div style={{fontSize: '2.625rem'}} className='w-full h-full flex flex-wrap'>
                        <div className= "text-gray-585858 font-spoqaMedium  flex items-center space-x-12">
                          <div className= "text-gray-585858 font-spoqaMedium  flex items-center space-x-3">
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', fontSize: '2.625rem'}} className="group-hover:text-gray-r585858 text-4xl text-ellipsis overflow-hidden whitespace-nowrap">경기일시 :</p>
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', color:"#7b7b7b", fontSize: '2.625rem'}} className="group-hover:text-gray-r7b7b7b text-4xl text-ellipsis overflow-hidden whitespace-nowrap  font-spoqa">{item.time}</p>
                          </div>
                          <div className= "text-gray-585858 font-spoqaMedium  flex items-center space-x-3">
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', fontSize: '2.625rem'}} className="group-hover:text-gray-r585858 text-4xl text-ellipsis overflow-hidden whitespace-nowrap">회차 :</p>
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', color:"#7b7b7b", fontSize: '2.625rem'}} className="group-hover:text-gray-r7b7b7b text-4xl text-ellipsis overflow-hidden whitespace-nowrap font-spoqa">{item.num}</p>
                          </div>                     
                        </div>

                        <div className= "text-gray-585858 font-spoqaMedium  flex items-center space-x-12">
                          <div className= "text-gray-585858 font-spoqaMedium  flex items-center space-x-3">
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', fontSize: '2.625rem'}} className="group-hover:text-gray-r585858 text-4xl text-ellipsis overflow-hidden whitespace-nowrap">결과 :</p>
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', color:"#0056a6", fontSize: '2.625rem'}} className="text-4xl text-ellipsis overflow-hidden whitespace-nowrap font-spoqa">{item.results}</p>
                          </div>
                          <div className= "text-gray-585858 font-spoqaMedium  flex items-center space-x-3">
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', fontSize: '2.625rem'}} className="group-hover:text-gray-r585858 text-4xl text-ellipsis overflow-hidden whitespace-nowrap">배당률 :</p>
                            <p style={{textOverflow: 'ellipsis', maxWidth: '65rem', color:"#7b7b7b", fontSize: '2.625rem'}} className="group-hover:text-gray-r7b7b7b text-4xl text-ellipsis overflow-hidden whitespace-nowrap font-spoqa">{item.ratio}</p>
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

export default PowerballResultsTable

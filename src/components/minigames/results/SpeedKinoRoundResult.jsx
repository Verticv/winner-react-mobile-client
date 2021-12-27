import React, {useState} from 'react'
import { Route, useHistory } from 'react-router'

const SpeedKinoRoundResult = () => {

    const [selectedTab, setSelectedTab] = useState(0)

    console.log(`selectedTab`, selectedTab)

    const historyTabsArray = [
        { text: "숫자합 홀짝", id: 0, path: "/minigame/speedkino" },
        { text: "숫자합 마지막자리 언오버", id: 1, path: "/minigame/speedkino/sum" }
    ]

    const HistoryMenu = ({
        itemsArray, 
        setSelectedTab,
        setSelectedSubTab = null
    }) => {
        // r0056a6
        const history = useHistory();
        const pathname = window.location.pathname
        const [isHover, setHover] = useState(null)
        console.log(isHover)
    
        function TabsList({ items }) {
            return items.map((item, index) => (
                <button 
                    className={`${
                        pathname === item.path
                        ? "bg-blue-r0056a6" 
                        : "bg-white  border border-gray-rb7b7b7"
                    } w-1/2 rounded-full`}
                    style={{height: '6.375rem', fontSize: '2.8125rem', marginRight: `${!index ? '0.9375rem' : '' }`, borderWidth: `${pathname !== item.path ? '0.1875rem' : ''}`}} 
                    key={item.id} 
                    onClick={() => {
                        history.push(item.path)
                        setSelectedTab(item.id)
                        if (setSelectedSubTab !== null) {
                            setSelectedSubTab(0)
                        }
                    }}
                    onMouseOver={() => setHover(item.id)}
                    onMouseLeave={() => setHover(null)}
                >
                    <div >
                        <div>
                            <span
                                className={`${
                                    pathname === item.path
                                    ? "text-white" 
                                    : "text-gray-r7b7b7b"
                                } font-spoqaMedium`}
                            >{item.text}</span>
                        </div>
                    </div>
                </button>
            ));
        }
    
        return (
            <div className="flex w-full">
                <TabsList items={itemsArray} />
            </div>
        )
    }
    

    const array = [
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
    ]

    const array1 = [
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#d52e2e',
            departureNumberDirection: 'left',
        },
        {
            month: '10월 15일',
            roundNumber: '288',
            departureText: '짝',
            departureNumberColor: '#2e6dd5',
            departureNumberDirection: 'right',
        },
    ]


    function Cells({ items }) {
        return items.map((item, index) => (
            <div 
                style={{height: "7.09375rem", borderBottomWidth: '0.1875rem', fontSize: '2.25rem', backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa"}} 
                className="flex items-center font-spoqa tracking-tight text-gray-r585858 w-full border-b border-gray-efefef"
            >
                <div className="flex w-1/2 justify-center items-center">{item.month} [{item.roundNumber}]</div>
                <div className="flex w-1/2 justify-center items-center">
                    <div 
                        style={{width: "4.5rem", height: "4.5rem",fontSize: '2.25rem' ,backgroundColor: item.departureNumberColor}}
                        className="relative pt-2 rounded-full w-1/2 text-white font-spoqaMedium tracking-tight flex items-center justify-center"
                    >
                        {item.departureText}
                        {item.departureNumber && <div style={{width: '2.25rem', height: '2.25rem', fontSize: '1.5rem', top: '-0.5rem' ,right: item.departureNumberDirection === "right" ? "-0.75rem" : "",  left: item.departureNumberDirection === "left" ? "-0.75rem" : ""}} className={`absolute rounded-full bg-black flex items-center justify-center`}
                        >{item.departureNumber}</div>} 
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <div className="w-full p-12 pb-0">
            <div style={{margin: '0'}}>
                <HistoryMenu itemsArray={historyTabsArray} setSelectedTab={setSelectedTab} />
            </div>
            <Route exact path="/minigame/speedkino">
                <div style={{marginTop: '2.875rem'}} className="font-spoqaMedium tracking-tight text-gray-r454545">
                    <div style={{fontSize: '2.25rem'}} className='flex w-full'>
                        <div style={{height: '5.25rem', marginRight:'0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">회차</div>
                        <div style={{height: '5.25rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">홀/짝</div>
                    </div>
                </div>
                <div className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                    <Cells items={array} />
                </div>
            </Route>
            <Route path="/minigame/speedkino/sum">
                <div style={{marginTop: '2.875rem'}} className="font-spoqaMedium tracking-tight text-gray-r454545">
                    <div style={{fontSize: '2.25rem'}} className='flex w-full'>
                        <div style={{height: '5.25rem', marginRight:'0.1875rem', borderTopLeftRadius: '0.625rem', borderBottomLeftRadius: '0.625rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">회차</div>
                        <div style={{height: '5.25rem'}} className="flex w-1/2 justify-center items-center bg-gray-efefef">언오버</div>
                    </div>
                </div>
                <div className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                    <Cells items={array1} />
                </div>
            </Route>
            
        </div>      
    )
}

export default SpeedKinoRoundResult

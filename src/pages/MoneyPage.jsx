import Footer from 'components/mainPage/Footer'
import Footer2 from 'components/mainPage/Footer2'
import MoneyCharge from 'components/money/MoneyCharge'
import MoneyExchange from 'components/money/MoneyExchange'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import LeftMenu from 'components/myPage/LeftMenu'
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React, { useState } from 'react'
import { Route, useLocation } from 'react-router'
import MoneyChargeBanner from '../images/money/money_charge.png'
import MoneyExchangeBanner from '../images/money/money_exchange.png'
import Icon1 from '../images/money/leftMenu/icon_1.png'
import Icon2 from '../images/money/leftMenu/icon_2.png'
import IconHighlight1 from '../images/money/leftMenu/icon_1_highlight.png'
import IconHighlight2 from '../images/money/leftMenu/icon_2_highlight.png'

const MoneyPage = ({isAuthenticated, setAuthenticated}) => {

    const LeftMenuArray = [
        { text: "보유머니 충전", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/money/charge", mainPath: "/money/charge" },
        { text: "보유머니 환전", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/money/exchange", mainPath: "/money/exchange" },
    ]

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center limit1600:mt-92px mt-122px w-full h-full">

                <Route path="/money/charge">
                    <DirectoryComponent 
                        branch1="충전/환전"
                        branch2="보유머니 충전" 
                        mainPath="/money/charge"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/money/exchange">
                    <DirectoryComponent 
                        branch1="충전/환전"
                        branch2="보유머니 환전" 
                        mainPath="/money/charge"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>

                <Route path="/money/charge">
                    <div className="relative w-default h-225px">
                        <label style={{color:"#9e4f8d"}} className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">보유머니 충전</label>
                        <img className="z-10" src={MoneyChargeBanner} alt="" />
                    </div>
                </Route>
                <Route path="/money/exchange">
                    <div className="relative w-default h-225px">
                        <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">보유머니 환전</label>
                        <img className="z-10" src={MoneyExchangeBanner} alt="" />
                    </div>
                </Route>
                
                <div className="flex mt-20px w-default">
                    <div>
                        <LeftMenu 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab}
                            array={LeftMenuArray}
                        />
                    </div>

                    <div className="ml-20px w-1040px">
                        <Route path="/money/charge">
                            <MoneyCharge />
                        </Route>
                        <Route path="/money/exchange">
                            <MoneyExchange />
                        </Route>
                        <Route path="*">
                        </Route>
                    </div>
                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default MoneyPage

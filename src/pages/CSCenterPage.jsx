import React, { useState } from 'react'
import { Route, useLocation } from 'react-router';
// import Footer from 'components/mainPage/Footer';
// import Footer2 from 'components/mainPage/Footer2';
// import DirectoryComponent from 'components/myPage/DirectoryComponent';
// import LeftMenu from 'components/myPage/LeftMenu';
import AccountProfileComponent from 'components/common/AccountProfileComponent'
import LeftMenu from "components/myPage/LeftMenu";
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import HomePageTopBanner from 'components/common/HomePageTopBanner';
// import HorizontalSubMenu from 'components/horizontalMenus/HorizontalSubMenu'
import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1'
import Logo from "../images/newImages/mainPage/icons/logo.png";
import Icon1 from '../images/cscenter/leftMenu/icon_1.png'
import Icon2 from '../images/cscenter/leftMenu/icon_2.png'
import Icon3 from '../images/cscenter/leftMenu/icon_3.png'
import Icon4 from '../images/cscenter/leftMenu/icon_4.png'
import Icon5 from '../images/cscenter/leftMenu/icon_5.png'
import subIcon1 from '../images/newImages/mainPage/cscenter/1.png';
import subIcon2 from '../images/newImages/mainPage/cscenter/2.png';
import subIcon3 from '../images/newImages/mainPage/cscenter/3.png';
import subIcon4 from '../images/newImages/mainPage/cscenter/4.png';
import subIcon5 from '../images/newImages/mainPage/cscenter/5.png';

import Contact from 'components/cscenter/Contact';
import ContactView from 'components/cscenter/ContactView';
import ContactCompose from 'components/cscenter/ContactCompose';
import Announcement from 'components/cscenter/Announcement';
import AnnouncementView from 'components/cscenter/AnnouncementView';
import Faq from 'components/cscenter/Faq';
import SportsGamePolicy from 'components/cscenter/SportsGamePolicy';
import MinigamePolicy from 'components/cscenter/MinigamePolicy';

const CSCenterPage = ({isAuthenticated, setAuthenticated}) => {

    const tabsArray = [
        { text: "문의하기", icon: Icon1, id: 0, path: "/cscenter/all/contact/all", hasSameParent: true },
        { text: "공지사항", icon: Icon2, id: 1, path: "/cscenter/all/announcement" },
        { text: "자주묻는질문", icon: Icon3, id: 2, path: "/cscenter/all/faq", hasSameParent: true},
        { text: "계좌문의", icon: Icon4, id: 3, path: "/cscenter/all/inquiry"},
        { text: "베팅규정", icon: Icon5, id: 4, path: "/cscenter/all/policy/sportsgame/soccer"},
    ];

    const LeftMenuSubArray = [
        {
          text: "문의하기",
          icon: subIcon1,
          id: 0,
          path: "/cscenter/all/contact/all",
        },
        {
          text: "공지사항",
          icon: subIcon2,
          id: 1,
          path: "/cscenter/all/announcement",
        },
        {
          text: "자주묻는질문",
          icon: subIcon3,
          id: 2,
          path: "/cscenter/all/faq",
        },
        {
          text: "계좌문의",
          icon: subIcon3,
          id: 2,
          path: "/cscenter/all/inquiry",
        },
        {
          text: "베팅규정",
          icon: subIcon3,
          id: 2,
          path: "/cscenter/all/policy/sportsgame/soccer",
        }
      ]

    // const LeftMenuArray = [
    //     { text: "문의하기", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/all/contact/all", mainPath: "/cscenter/contact" },
    //     { text: "공지사항", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/cscenter/announcement", mainPath: "/cscenter/announcement" },
    //     { text: "자주묻는질문", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/faq/all", mainPath: "/cscenter/faq" },
    //     { text: "계좌문의", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/inquiry", mainPath: "/cscenter/inquiry" },
    //     { 
    //         text: "베팅규정",
    //         icon: Icon5, 
    //         iconHighlight: IconHighlight5, 
    //         id: 4, 
    //         path: "/cscenter/policy/sportsgame/soccer", 
    //         path_1: "/cscenter/policy/sportsgame/basketball", 
    //         path_2: "/cscenter/policy/sportsgame/baseball", 
    //         path_3: "/cscenter/policy/sportsgame/volleyball", 
    //         path_4: "/cscenter/policy/sportsgame/tennis", 
    //         path_5: "/cscenter/policy/sportsgame/hockey", 
    //         path_6: "/cscenter/policy/sportsgame/handball", 
    //         path_7: "/cscenter/policy/sportsgame/football", 
    //         path_8: "/cscenter/policy/sportsgame/e-sports", 
    //         sub1: "스포츠게임",
    //         sub2: "미니게임",
    //         path2: "/cscenter/policy/minigame/powerball", 
    //         path2_1: "/cscenter/policy/minigame/powerladder", 
    //         path2_2: "/cscenter/policy/minigame/speedkino", 
    //         path2_3: "/cscenter/policy/minigame/kinoladder", 
    //         mainPath: "/cscenter/policy"
    //     },
    // ];


    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(selectedSubTab, selectedTab)
    return (
        <div style={{maxWidth: '1242px'}} className="relative w-full flex flex-col justify-center limit:overflow-x-hidden">

            <Route exact path="/cscenter">
                <AccountProfileComponent isAuthenticated={isAuthenticated} />
                <div style={{marginTop: '1.875rem', marginBottom: '36.375rem'}} className="flex w-full">
                    <LeftMenu
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        selectedSubTab={selectedSubTab}
                        setSelectedSubTab={setSelectedSubTab}
                        array={LeftMenuSubArray}
                    />
                </div>
                <div className="flex justify-center mb-40">
                    <img style={{width: '22.3125rem'}} className="object-contain" src={Logo} alt="logo" />
                </div>
            </Route>

            <Route path="/cscenter/all">
                <div style={{paddingBottom: '3.75rem'}} className="flex flex-col items-start limit:items-center w-full h-full">
                    <div className="flex w-full">
                        <div className="w-full">
                            <Route path="/cscenter/all/contact/all/">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='고객센터' />
                                </div>

                                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                        <div className=" flex flex-shrink-0 w-full">
                                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                                        </div>
                                    </div>
                                </div>
                                <Contact />
                            </Route>
                            <Route path="/cscenter/all/contact/view/*">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='문의하기' />
                                </div>
                                <ContactView />
                            </Route>
                            <Route path="/cscenter/all/contact/compose">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='문의하기' />
                                </div>
                                <ContactCompose />
                            </Route>
                            <Route exact path="/cscenter/all/announcement">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='공지사항' />
                                </div>

                                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                        <div className=" flex flex-shrink-0 w-full">
                                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                                        </div>
                                    </div>
                                </div>
                                <Announcement />
                            </Route>
                            <Route exact path="/cscenter/all/announcement/view">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='고객센터' />
                                </div>
                                <AnnouncementView />
                            </Route>
                            <Route path="/cscenter/all/faq">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='고객센터' />
                                </div>

                                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                        <div className=" flex flex-shrink-0 w-full">
                                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                                        </div>
                                    </div>
                                </div>
                                <Faq />
                            </Route>
                            <Route path="/cscenter/all/policy/sportsgame">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='고객센터' />
                                </div>

                                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                        <div className=" flex flex-shrink-0 w-full">
                                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                                        </div>
                                    </div>
                                </div>
                                <SportsGamePolicy setSelectedTab={setSelectedTab} />
                            </Route>
                            <Route path="/cscenter/all/policy/minigame">
                                <div className="w-full z-30 flex flex-col items-center">
                                    <NoticeBanner />
                                    <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
                                    <HomePageTopBanner pageTitle='고객센터' />
                                </div>

                                <div style={{padding: '1.875rem', paddingBottom : '1.875rem'}} className="w-full relative top-0">
                                    <div className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                                        <div className=" flex flex-shrink-0 w-full">
                                        <HorizontalMenu1 itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab}/>
                                        </div>
                                    </div>
                                </div>
                                <MinigamePolicy />
                            </Route>
                        </div>
                    </div>
                </div>
            </Route>
        </div>
    )
}

export default CSCenterPage

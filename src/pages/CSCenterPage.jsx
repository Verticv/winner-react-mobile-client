import Footer from 'components/mainPage/Footer';
import Footer2 from 'components/mainPage/Footer2';
import DirectoryComponent from 'components/myPage/DirectoryComponent';
import LeftMenu from 'components/myPage/LeftMenu';
import Navbar from 'components/mainPage/Navbar'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import React, { useState } from 'react'
import { Route, useLocation } from 'react-router';
import Icon1 from '../images/cscenter/leftMenu/icon_1.png'
import Icon2 from '../images/cscenter/leftMenu/icon_2.png'
import Icon3 from '../images/cscenter/leftMenu/icon_3.png'
import Icon4 from '../images/cscenter/leftMenu/icon_4.png'
import Icon5 from '../images/cscenter/leftMenu/icon_5.png'
import IconHighlight1 from '../images/cscenter/leftMenu/icon_1_highlight.png'
import IconHighlight2 from '../images/cscenter/leftMenu/icon_2_highlight.png'
import IconHighlight3 from '../images/cscenter/leftMenu/icon_3_highlight.png'
import IconHighlight4 from '../images/cscenter/leftMenu/icon_4_highlight.png'
import IconHighlight5 from '../images/cscenter/leftMenu/icon_5_highlight.png'
import CsPageBanner from '../images/cscenter/cscenter_banner.png'
import Contact from 'components/cscenter/Contact';
import ContactView from 'components/cscenter/ContactView';
import ContactCompose from 'components/cscenter/ContactCompose';
import Announcement from 'components/cscenter/Announcement';
import AnnouncementView from 'components/cscenter/AnnouncementView';
import Faq from 'components/cscenter/Faq';
import SportsGamePolicy from 'components/cscenter/SportsGamePolicy';
import MinigamePolicy from 'components/cscenter/MinigamePolicy';

const CSCenterPage = ({isAuthenticated, setAuthenticated}) => {

    const LeftMenuArray = [
        { text: "문의하기", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/contact/all", mainPath: "/cscenter/contact" },
        { text: "공지사항", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/cscenter/announcement", mainPath: "/cscenter/announcement" },
        { text: "자주묻는질문", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/faq/all", mainPath: "/cscenter/faq" },
        { text: "계좌문의", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/inquiry", mainPath: "/cscenter/inquiry" },
        { 
            text: "베팅규정",
            icon: Icon5, 
            iconHighlight: IconHighlight5, 
            id: 4, 
            path: "/cscenter/policy/sportsgame/soccer", 
            path_1: "/cscenter/policy/sportsgame/basketball", 
            path_2: "/cscenter/policy/sportsgame/baseball", 
            path_3: "/cscenter/policy/sportsgame/volleyball", 
            path_4: "/cscenter/policy/sportsgame/tennis", 
            path_5: "/cscenter/policy/sportsgame/hockey", 
            path_6: "/cscenter/policy/sportsgame/handball", 
            path_7: "/cscenter/policy/sportsgame/football", 
            path_8: "/cscenter/policy/sportsgame/e-sports", 
            sub1: "스포츠게임",
            sub2: "미니게임",
            path2: "/cscenter/policy/minigame/powerball", 
            path2_1: "/cscenter/policy/minigame/powerladder", 
            path2_2: "/cscenter/policy/minigame/speedkino", 
            path2_3: "/cscenter/policy/minigame/kinoladder", 
            mainPath: "/cscenter/policy"
        },
    ];

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center limit1600:mt-92px mt-122px w-full h-full">

                <Route path="/cscenter/contact/all*">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="문의하기" 
                        mainPath="/cscenter/contact/all"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/cscenter/contact/view/*">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="문의하기" 
                        branch3="뷰" 
                        mainPath="/cscenter/contact"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/cscenter/contact/compose">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="문의하기" 
                        branch3="작성하기" 
                        mainPath="/cscenter/contact"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route exact path="/cscenter/announcement">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="공지사항" 
                        mainPath="/cscenter/announcement"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/cscenter/announcement/view">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="공지사항" 
                        branch3="뷰"
                        mainPath="/cscenter/announcement"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/cscenter/faq">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="자주묻는질문" 
                        mainPath="/cscenter/faq"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/cscenter/inquiry">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="계좌문의" 
                        mainPath="/cscenter/inquiry"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/cscenter/policy/sportsgame">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="베팅규정" 
                        branch3="스포츠게임"
                        mainPath="/cscenter/policy/sportsgame/soccer"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/cscenter/policy/minigame">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="베팅규정" 
                        branch3="미니게임"
                        mainPath="/cscenter/policy/sportsgame/soccer"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>
                <Route path="/cscenter/policy/argame">
                    <DirectoryComponent 
                        branch1="고객센터"
                        branch2="베팅규정"
                        branch3="키론가상게임"
                        mainPath="/cscenter/policy/sportsgame/soccer"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>

                <div className="relative w-default h-225px">
                    <label style={{color:"#974458"}} className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">고객센터</label>
                    <img className="z-10" src={CsPageBanner} alt="" />
                </div>
                
                <div className="flex mt-20px w-default">
                    <div>
                        <LeftMenu
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            selectedSubTab={selectedSubTab} 
                            setSelectedSubTab={setSelectedSubTab}
                            array={LeftMenuArray}
                        />
                    </div>

                    <div className="ml-20px w-1040px">
                        <Route path="/cscenter/contact/all/">
                            <Contact />
                        </Route>
                        <Route path="/cscenter/contact/view/*">
                            <ContactView />
                        </Route>
                        <Route path="/cscenter/contact/compose">
                            <ContactCompose />
                        </Route>
                        <Route exact path="/cscenter/announcement">
                            <Announcement />
                        </Route>
                        <Route exact path="/cscenter/announcement/view">
                            <AnnouncementView />
                        </Route>
                        <Route path="/cscenter/faq">
                            <Faq />
                        </Route>
                        <Route path="/cscenter/policy/sportsgame">
                            <SportsGamePolicy setSelectedTab={setSelectedTab} />
                        </Route>
                        <Route path="/cscenter/policy/minigame">
                            <MinigamePolicy />
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

export default CSCenterPage

import React, { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Switch, Route } from "react-router-dom";
import MyPage from "pages/MyPage";
import DistributorPage from "pages/DistributorPage";
import AttendPage from "pages/AttendPage";
import MoneyPage from "pages/MoneyPage";
import CSCenterPage from "pages/CSCenterPage";
import GameResultsPage from "pages/GameResultsPage";
import Freeboard from "pages/Freeboard";
import BetCombinationPage from "pages/BetCombinationPage";
import MinigamesPage from "pages/MinigamesPage";
import EsportsPage from "pages/EsportsPage";
import LiveCasinoPage from "pages/LiveCasinoPage";


function App() {

    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <>
            <Switch>
                {/*   
                Example to pass props to a route.
                <Router>
                  <Route path="/home" render={() => <Home prop={prop} />} />
                </Router> 
              */}
                <Route path="/mypage">
                    <MyPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/live-casino">
                    <LiveCasinoPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/distributor-page">
                    <DistributorPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/attendance">
                    <AttendPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/money">
                    <MoneyPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/cscenter">
                    <CSCenterPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/gameresults">
                    <GameResultsPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/freeboard">
                    <Freeboard isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="/bet-combination">
                    <BetCombinationPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>
                </Route>
                <Route path="/minigame">
                    <MinigamesPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>
                </Route>
                <Route path="/esports">
                    <EsportsPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>
                </Route>
                <Route path="*">
                    <MainPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
            </Switch>
        </>
    );
}

export default App;

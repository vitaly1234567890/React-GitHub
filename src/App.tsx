import React from 'react';
import {HomePage} from "./pages/HomePage";
import {FafouritesPage} from "./pages/FafouritesPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path={'/'} element={<Navigate to={'/homePage'}/>}/>
                <Route path={'/homePage'} element={<HomePage/>}/>
                <Route path={'/favouritePage'} element={<FafouritesPage/>}/>
                <Route path={'/*'} element={<div>Error 404. Page not found</div>}/>
            </Routes>


        </div>
    );
}

export default App;

import { useState } from "react";

import useNavigate from "@hooks/useNavigate";

import Menu from "@views/Menu"

const routes = {
    '/': {
        component: Menu
    }
}


function Router() {
    const { page } = useNavigate();

    const CurrentPage = routes[page]?.component || (() => (
        <div className='notFoundContainer'>
            <h1 className='h1Glow'>404 Page Not Found</h1>
            <h3> Please enter a valid URL</h3>
        </div>
    ));

    return (
        <div>            
            <CurrentPage />
        </div>
    );
}


export default Router
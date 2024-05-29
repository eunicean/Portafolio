import { useState } from "react";

import useNavigate from "@hooks/useNavigate";

import Menu from "@views/Menu"
import Header from "@components/Header";

const routes = {
    '/': {
        component: Menu
    }
}


function Router() {
    const { page } = useNavigate();

    let CurrentPage;

    if (routes[page] && routes[page].component) {
    CurrentPage = routes[page].component;
    } else {
    CurrentPage = () => (
        <div className='notFoundContainer'>
        <h1 className='h1Glow'>Oops! Page Not Found</h1>
        <h3>Please enter a valid URL</h3>
        </div>
    );
    }

    return (
        <div> 
            <Header/>           
            <CurrentPage />
        </div>
    );
}


export default Router
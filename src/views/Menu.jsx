import { useEffect } from "react";
import About from "./Aboutme";
import Gretings from "./Greetings";
import Skillset from "./Skillset";


function Menu() {
    return(
        <>
            <Gretings />
            <About />
            <h3>Skills learned</h3>
            <Skillset />
        </>
    )
}

export default Menu
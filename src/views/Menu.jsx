import { useEffect } from "react";
import About from "./Aboutme";
import Gretings from "./Greetings";
import Skillset from "./Skillset";
import Contactme from "./Contactme";
import Projects from "./Projects";
import achievement1 from "@assets/achievement1.jpg"

function Menu() {

  

    return(
        <>
            <Gretings />
            <About />
            <h3>Skills learned</h3>
            <Skillset />
            <h3>Projects</h3>
            <Projects />
            <h3>Achievements</h3>
            <img src={achievement1} alt="Graduado de bachiller" className="achievements"/>
            <br></br>
            <Contactme />
        </>
    )
}

export default Menu
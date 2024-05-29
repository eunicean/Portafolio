import me from "../assets/me.jpg"
function About(){
    return(
        <div className="aboutmeSection">
            <div className="info">
                <p className="Tittle2"> About me</p>
                <p> A little about meee</p>
            </div>
            <div> <img src={me} alt="Me" /></div>
        </div>
    )
}

export default About
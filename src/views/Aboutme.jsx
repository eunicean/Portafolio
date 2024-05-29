import me from "../assets/me.jpg"
function About(){
    return(
        <div className="aboutmeSection">
            <div className="info">
                <p className="Tittle2"> About me</p>
                <p className="aboutmecontent"> Hi! My name is Eunice</p>
                <p className="aboutmecontent"> I'm a software developer in the making. I consider myself a person that can do anything I propose myself to. I'm creative, intelligent and a people person. I'm alway motivated to try new things and learn.</p>
                <p className="aboutmecontent"> I have expierence in software and web development, both in back and front development. I have obtained varios skills that i can use with confidence.</p>
            </div>
            <div> <img src={me} alt="Me" /></div>
        </div>
    )
}

export default About
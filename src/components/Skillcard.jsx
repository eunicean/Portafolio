function Skillcard ({skill, percentage, imagen}){
    return(
        <div className="skillcard">
            <img src={imagen} type="image/svg+xml" lt="imgSkill"  className="imageSkill"/>
            <p className="skillname">{skill}</p>
            <p className="skillpercentage">{percentage}</p>
        </div>
    )
}

export default Skillcard
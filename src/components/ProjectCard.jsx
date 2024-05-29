import React from "react";

function ProjectCard({ Name, tecnology = [], desc, link, image }) {
    return (
        <div className="projectCard">
            <div className="projectImg">
                <img src={image} alt="projectIMG" />
            </div>
            <div className="projectInfo">
                <p className="Tittle2">{Name}</p>
                <p>{desc}</p>
                <div className="tecnologyImages">
                    {tecnology.map((tech, index) => (
                        <img key={index} src={tech} alt={`Tecnology ${index + 1}`} />
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="githubButton">
                    View on GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;

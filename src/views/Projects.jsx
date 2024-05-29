import ProjectCard from "@components/ProjectCard"
import saborimg from "@assets/sabor.png"
import copython from "@assets/copython.png"
import blog from "@assets/blog.jpeg"
import raytracer from "@assets/raytracer.png"

function Projects() {
    return(
        <div className="projectsContainer">
            <ProjectCard
                Name = {'Raytracer'}
                tecnology = {[
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png'
                ]}
                desc = {'Poryecto de practica de conocimientos en Python. El proyecto se enfoco en aplicar los conocimientos de Python sin la ayuda de librerias externas, todos los calculos fueron realizados desde 0, para demostrar los conocimientos que se tiene en raytracing. La foto muestra un ejemplo del raytracer funcionando, todo en la foto es un objeto renderizado por el programa. '}
                link = {''}
                image = {raytracer}
            />
            <ProjectCard 
                Name = {'Sabor'} 
                tecnology = {[
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s',
                    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                    'https://cdn-icons-png.flaticon.com/512/4492/4492311.png'
                ]}
                desc = {'Proyecto en donde el Cliente requeria de un progrma que le permitiera mostrar las ordenes de ciertas mesas, separandolos por si la comida se debia preparar en la cocina o bar'}
                link = {'https://github.com/chuy-zip/proyecto2_BD1'}
                image = {saborimg}
            />

            <ProjectCard
                Name = {'Copython'}
                tecnology = {[
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP-LG1v6Ao1muLcXgIpbFDqhsiQ05mKXDxQ&s'
                ]}
                desc = {'Este proyecto fue una propuesta a una idea: Una app que te permitiera estudiar conceptos básicos de python y permitiría llevar un control de todas las lecciones llevadas, enfocado a personas que no saben nada de programación.'}
                link = {'https://github.com/chuy-zip/Proyecto_PPM_Copython.git'}
                image = {copython}
            />

            <ProjectCard
                Name = {'Blog de Cookie Run'}
                tecnology = {[
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s',
                    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                    'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',
                    'https://cdn-icons-png.flaticon.com/512/4492/4492311.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl4fp0SkQbTPU5ZxVl6AKWYuKCwM0gIhNtQ&s'
                ]}
                desc = {'Projecto en donde se demuestra mis habilidades para hacer uso de diferentes tecnologias diferentes tecnologias y frameworks. El blog tiene un CRUD crear entradas de blog, galletas y hasta usuarios.'}
                link = {'https://github.com/eunicean/BlogCRK'}
                image = {blog}
            />
        </div>
    )
}

export default Projects
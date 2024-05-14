import ItemProject from "../components/project/itemProject";
// import {FaLink} from "react-icons/fa"

//data
import Data from "../data/data"

function Projects(){
    return(
        <>
            <main className="container pt-5">
                <section className="projects pt-5">
                    <h2>Projects</h2>
                    <div className="d-flex flex-wrap">
                        {Data.Projects.map((i,index)=>(
                            <ItemProject key={index+1}  icon={i.icon} title={i.title} description={i.description} link={i.link}/>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Projects;
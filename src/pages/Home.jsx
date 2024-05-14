import { 
    FaEnvelope,
    FaLinkedin,
    FaInstagramSquare,
    //language
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaSass,
    FaNode,
    FaDatabase
 } from "react-icons/fa";
//data
import Data from "../data/data"

//components
import ItemProject from "../components/project/itemProject";

//assets
import FrontPage from "../assets/frontpage.svg"

//style
import "../sass/pages/home/Home.scss"
import "../sass/pages/project/project.scss"

function Home(){
    return(
        <>
            <main className="container">
                <section  className="frontPage">
                    <div className="row pt-5">
                        <div className="col-lg-6 pt-5">
                            <h1>{Data.Home.title}</h1>
                            <span className="iconContacts">
                                <a href={Data.redes.linkedin} target="_blank"><FaLinkedin/></a>
                                <a href={Data.redes.instagram} target="_blank"><FaInstagramSquare/></a>
                            </span>
                            <p>{Data.Home.description}</p>
                            <span className="iconSkills">
                                <FaHtml5 style={{color:"#ee4b00"}}/>
                                <FaCss3Alt style={{color:"#00a0eb"}}/>
                                <FaJsSquare style={{color:"#ffdc19"}}/>
                                <FaReact style={{color:"#00e1ff"}}/>
                                <FaSass style={{color:"#ff008c"}}/>
                                <FaNode style={{color:"#6ce000"}}/>
                                <FaDatabase style={{color:"#4e00e0"}}/>
                            </span>
                        </div>
                        <div className="col-lg-6 d-lg-flex align-items-center d-sm-none d-none">
                            <img className="mx-auto d-block" src={FrontPage} alt={FrontPage} />
                        </div>
                    </div>
                </section>

                <section className="projects">
                    <h2>Projects</h2>
                    <div className="d-flex flex-wrap">
                        {Data.Home.project.map((i,index)=>(
                            <ItemProject key={index+1} icon={i.icon} title={i.title} description={i.description} link={i.link}/>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
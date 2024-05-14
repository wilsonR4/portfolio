import { FaLink} from "react-icons/fa";

function ItemProject({icon,title,description,link}){
    return(
        <div className="projects-itemContent m-2">
            <div className="projects-itemContent-header">
                {(icon)}
            </div>
            <div className="projects-itemContent-body">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className="projects-itemContent-footer">
                <a href={link} target="_blank">
                    <FaLink/>
                    <span className="ms-2">View Project</span>
                </a>
            </div>
        </div>
    )
}

export default ItemProject;
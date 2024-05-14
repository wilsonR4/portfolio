// import { FaThumbtack } from "react-icons/fa";
import {Link} from "react-router-dom"
import IconLuffy from "../../assets/iconLuffy.svg"

//style
import "../../sass/common/navbar.scss"

function Navbar(){
    return(
        <header className="position-fixed top-0">
            <nav className="container d-flex align-items-center justify-content-between">
                <div>
                    <h1>
                        <span>W</span>
                        <span>R</span>
                        <img src={IconLuffy}/>
                    </h1>
                </div>
                <div>
                    <ul className="d-flex align-items-center">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
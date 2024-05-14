import {Link} from "react-router-dom"
import {
    FaEnvelope,
    FaLinkedin,
    FaInstagramSquare,
} from "react-icons/fa"

//style
import Data from "../../data/data"

//style
import "../../sass/common/footer.scss"
function Footer(){
    return(
        <footer className="container border-top">
            <div className="row pt-5">
                <div className="col-lg-6">
                    <p>Developer by Wilson Rivero</p>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
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
            </div>

        </footer>
    )
}

export default Footer;
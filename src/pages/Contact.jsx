import {
    FaEnvelope,
    FaWhatsappSquare,
    FaLinkedin,
    FaInstagramSquare
} from "react-icons/fa"
//data
import Data from "../data/data"
//style
import "../sass/pages/contact/contact.scss"
function Contact(){
    return(
        <main className="container">
            <section className="contact pt-5">
                <h2 className="pt-5">{Data.Contact.title}</h2>
                <p>{Data.Contact.description}</p>
                <div className="contact-redes">
                    <span className="contact-redes-span">
                        <FaEnvelope/>
                        <span>{Data.redes.envelope}</span>
                    </span>
                    <span className="contact-redes-span">
                        <FaWhatsappSquare/>
                        <span>+58-4249493708</span>
                    </span>
                    <a href={Data.redes.linkedin} target="_blank" className="contact-redes-span">
                        <FaLinkedin/>
                        <span>Follow Linkedin</span>
                    </a>
                    <a href={Data.redes.instagram} target="_blank" className="contact-redes-span">
                        <FaInstagramSquare/>
                        <span>Follow Instagram</span>
                    </a>            
                </div>
            </section>
        </main>
    )
}

export default Contact;
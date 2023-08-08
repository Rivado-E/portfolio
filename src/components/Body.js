import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/IMG-1.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Rivado Noel Edah</div>
                        <div className="body-text">Software Engeneer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/Rivado-E" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
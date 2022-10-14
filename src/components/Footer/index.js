import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../Footer/footer.css";

function Copyright() {
    return (
        <a className="copyright" href="https://github.com/Khanh-T-Tran" target="_blank" rel="noreferrer"> Copyright © KhanhTran {new Date().getFullYear()} </a>
    )
}

const stinkyFooter = () => {
    return (
        <>
            <footer className="footer">
                <div className="d-flex justify-content-center social-media-icons-white">
                    <a href="https://github.com/Khanh-T-Tran" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <Copyright />
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </footer>
        </>
    )
}

export default stinkyFooter;
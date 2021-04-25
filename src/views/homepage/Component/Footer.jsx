import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  
  
} from "@fortawesome/free-brands-svg-icons";


class Footerr extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-col first">
                                <h2>About </h2>
                                <p className="p-small">Mymember Planner is a powerful CRM to connect with your customers efficiently and effectively to grow your business</p>
                            </div>
                            {/* <!-- end of footer-col --> */}
                            <div className="footer-col second">
                                <h2>Links</h2>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li>Important: <a href="terms.html">Terms & Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
                                    <li>Useful: <a href="#">Colorpicker</a>, <a href="#">Icon Library</a>, <a href="#">Illustrations</a></li>
                                    <li>Menu: <a className="page-scroll" href="#services">Services</a>, <a className="page-scroll" href="#details">Details</a>, <a className="page-scroll" href="#pricing">Pricing</a>, <a className="page-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            {/* <!-- end of footer-col --> */}
                            <div className="footer-col third">
                                <span className="fa-stack">
                                    <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont1" icon={faFacebook}/></a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                    
                                        <FontAwesomeIcon className="aboutFont1" icon={faTwitter}/>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <FontAwesomeIcon className="aboutFont1" icon={faInstagram}/>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                      <LinkedInIcon/>
                                    </a>
                                </span>
                                <p className="p-small">We would love to hear from you <a href="mailto:mymember@gmail.com"><strong>contact@mymember.com</strong></a></p>
                            </div>
                            {/* <!-- end of footer-col --> */}
                        </div>
                        {/* <!-- end of col --> */}
                    </div>
                    {/* <!-- end of row --> */}
                </div>
                {/* <!-- end of container --> */}
            </div> 
        )
    }
}
export default Footerr
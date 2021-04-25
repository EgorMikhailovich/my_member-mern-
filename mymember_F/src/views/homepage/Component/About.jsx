import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

class About extends Component{
    render(){
        return(
            <div id="about" className="cards-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">About the team</h2>
                    <p className="p-heading">Meat our team of specialized marketers and business developers which will help you research new products and launch them in new emerging markets</p>
                </div> 
                {/* <!-- end of col --> */}
            </div> 
            {/* <!-- end of row --> */}
            <div className="row">
                <div className="col-lg-12">
                    
                    {/* <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/team-member-1.svg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Lacy Whitelong</h6>
                            <p>Business Developer</p>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                                    <FontAwesomeIcon className="aboutFont" icon={faFacebook}/>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont" icon={faTwitter}/>
                                    {/* <i className="fab fa-linkedin-in fa-stack-1x"></i> */}
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* <!-- end of card --> */}

                    {/* <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/team-member-2.svg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Chris Brown</h6>
                            <p>Online Marketer</p>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont" icon={faFacebook}/>
                                    {/* <i className="fab fa-twitter fa-stack-1x"></i> */}
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont" icon={faTwitter}/>
                                    {/* <i className="fab fa-linkedin-in fa-stack-1x"></i> */}
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* <!-- end of card --> */}

                    {/* <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/team-member-3.svg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Sheila Zimern</h6>
                            <p>Software Engineer</p>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont" icon={faFacebook}/>
                                    {/* <i className="fab fa-twitter fa-stack-1x"></i> */}
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont" icon={faTwitter}/>
                                    {/* <i className="fab fa-linkedin-in fa-stack-1x"></i> */}
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* <!-- end of card --> */}

                    {/* <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/team-member-4.svg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Mary Villalonga</h6>
                            <p>Product Manager</p>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont" icon={faFacebook}/>
                                    {/* <i className="fab fa-twitter fa-stack-1x"></i> */}
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <FontAwesomeIcon className="aboutFont" icon={faTwitter}/>
                                    {/* <i className="fab fa-linkedin-in fa-stack-1x"></i> */}
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* <!-- end of card --> */}

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
export default About
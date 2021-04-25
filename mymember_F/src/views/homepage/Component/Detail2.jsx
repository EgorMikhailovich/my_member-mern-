import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

// import Detail1 from "./Detail1";

class Detail2 extends Component{
    render(){
        return(
            <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="images/details-2.svg" alt="alternative"/>
                        </div>
                         {/* <!-- end of image-container --> */}
                    </div>
                     {/* <!-- end of col --> */}
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2 className="OurSpeciality">Our Speciality</h2>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <FontAwesomeIcon className="fontAweosme" icon={faCheck}/>
                                    <div className="media-body">Our CRM allows the quick entry of notes based on data to get more done in a short period of time.</div>
                                </li>
                                <li className="media">
                                    <FontAwesomeIcon className="fontAweosme" icon={faCheck}/>

                                    <div className="media-body">With latest technology and powerful servers,we get you the power you need for your work.</div>
                                </li>
                                <li className="media">
                                    <FontAwesomeIcon className="fontAweosme" icon={faCheck}/>
                                    <div className="media-body">Customer rating , leads conversation and everything at one place.</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg" href="/pages/register">View Demo</a>
                            {/* <a className="btn-outline-reg" href="privacy.html">Policy</a> */}
                        </div>
                         {/* <!-- end of text-container --> */}
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
export default Detail2
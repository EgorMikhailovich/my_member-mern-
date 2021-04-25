import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons'

class Registration extends Component{
    render()
    {
        return(
            <div id="registration" className="form-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2 className="RegistrFill">Fill the following form to request a meeting</h2>
                        <p>Mymember is one of the easiest and feature filled marketing automation apps in the market. Discover it now</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Automate your marketing activities for results</div>
                            </li>
                            <li className="media">
                                <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Interact with all your targeted customers</div>
                            </li>
                            <li className="media">
                                <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Convince them to buy your company's products</div>
                            </li>
                        </ul>
                    </div>
                     {/* <!-- end of text-container --> */}
                </div>
                 {/* <!-- end of col --> */}
                <div className="col-lg-6">

                    {/* <!-- Registration Form --> */}
                    <div className="form-container">
                        <form id="requestForm">
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rname" name="rname" required/>
                                <label className="label-control" for="rname">Full name</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control-input" id="remail" name="remail" required/>
                                <label className="label-control" for="remail">Email</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="rphone" name="rphone" required/>
                                <label className="label-control" for="rphone">Phone</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <select className="form-control-select" id="rselect" required>
                                    <option className="select-option" value="" disabled selected>Interested in...</option>
                                    <option className="select-option" value="Personal Loan">Starter</option>
                                    <option className="select-option" value="Car Loan">Medium</option>
                                    <option className="select-option" value="House Loan">Complete</option>
                                </select>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group checkbox">
                                <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required/>I agree with Mymember's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">Register</button>
                            </div>
                            <div className="form-message">
                                <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                            </div>
                        </form>
                    </div> 
                    {/* <!-- end of form-container -->
                    <!-- end of registration form --> */}

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
export default Registration
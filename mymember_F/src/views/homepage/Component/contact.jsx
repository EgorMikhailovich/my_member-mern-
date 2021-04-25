import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"

class Contact extends Component{
    render(){
        return(
            <div id="contact" className="form-2 bg-gray">
        <img className="decoration" src="images/contact-macbook.svg" alt="alternative"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Contact details</h2>
                    <p className="p-heading">Don't hesitate to give us a call or just use the contact form below</p>
                    <ul className="list-unstyled li-space-lg">
                        <li><i className="fas fa-map-marker-alt"></i> &nbsp;1035 Old Country Rd Westbury, NY 11590</li>
                        <li> &nbsp;<a href="tel:00817202212">+1- 800-530-2853</a></li>
                        <li> &nbsp;<a href="mailto:contact@Mymember.com">Contact@CMAPLANNER.com</a></li>
                    </ul>
                </div> 
                {/* <!-- end of col --> */}
            </div> 
            {/* <!-- end of row --> */}
            <div className="row">
                <div className="col-lg-6">
                    <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.186592697046!2d-73.60935243121774!3d40.761511732726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c286e04e80dfbf%3A0x1df681af79ffa5eb!2sWestbury%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1612169192502!5m2!1sen!2sin"></iframe>
                    </div>
                </div> 
                {/* <!-- end of col --> */}
                <div className="col-lg-6">
                    
                    {/* <!-- Contact Form --> */}
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required/>
                            <label className="label-control" for="cname">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required/>
                            <label className="label-control" for="cemail">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" for="cmessage">Your message</label>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="cterms" value="Agreed-to-Terms" required/> I have read and agree with Mymember's <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">Submit</button>
                        </div>
                    </form>
                    {/* <!-- end of contact form --> */}

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
export default Contact
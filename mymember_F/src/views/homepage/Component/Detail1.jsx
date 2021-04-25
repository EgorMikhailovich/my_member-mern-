import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"

class Detail1 extends Component{
    render(){
        return(
            <div id="details" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2 className="powerfullCrm">Powerful CRM</h2>
                        <p> We got tired of using multiple software solutions to
									 fulfill our business needs so we built the ultimate “All in One” solution</p>
                        <a className="btn-solid-reg popup-with-move-anim" href="/pages/register">View Demo</a>
                    </div>
                     {/* <!-- end of text-container --> */}
                </div>
                 {/* <!-- end of col --> */}
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src="images/details-1.svg" alt="alternative"/>
                    </div> 
                    {/* <!-- end of image-container --> */}
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
export default Detail1
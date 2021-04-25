import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"

class Service extends Component{
    render(){
        return(
            <div id="services" className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Business growth services</h2>
                    <p className="p-heading">We serve small and medium sized companies in all tech related industries with high quality business growth services based on many years of software development experience</p>
                </div>
                 {/* <!-- end of col --> */}
            </div>
             {/* <!-- end of row --> */}
            <div className="row">
                <div className="col-lg-12">
                    
                    {/* <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/services-icon-1.svg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Market Analysis</h5>
                            <p>Our team of enthusiastic marketers will analyse and evaluate your company</p>
                        </div>
                    </div>
                    {/* <!-- end of card -->

                    <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/services-icon-2.svg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Opportunity Scan</h5>
                            <p>Once the market analysis is completed our staff looks for fresh opportunities</p>
                        </div>
                    </div>
                    {/* <!-- end of card --> */}

                    {/* <!-- Card --> */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/services-icon-3.svg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Action Plan</h5>
                            <p>With all the information in place you will be presented with a written action plan</p>
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
export default Service;
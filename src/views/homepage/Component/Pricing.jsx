import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


class Pricing extends Component{
    render(){
        return(
            <div id="pricing" className="cards-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">Pricing</h2>
                        <p className="p-heading">CMA Planner offers packages for any stage of business. Whether it be startup or multi-level franchise systems we can help.</p>
                    </div>
                     {/* <!-- end of col --> */}
                </div>
                 {/* <!-- end of row --> */}
                <div className="row">
                    <div className="col-lg-12">
    
                        {/* <!-- Card--> */}
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">BASIC</div>
                                <p>Just to see the possibilities</p>
                                <hr className="cell-divide-hr"/>
                                <div className="price"><span className="currency"></span><span className="value">$99</span></div>
                                <div className="frequency">monthly</div>
                                <hr className="cell-divide-hr"/>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Core Bussiness Systems</div>
                                    </li>
                                    <li className="media">
                                    <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Under 100 Contacts</div>
                                    </li>
                                    <li className="media">
                                    <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Biling</div>
                                    </li>
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Custom Features</div>
                                    </li>
                                </ul>
                                <div className="button-wrapper">
                                    <a className="btn-solid-reg page-scroll" href="/pages/register">Register</a>
                                </div>
                            </div>
                        </div> 
                        {/* <!-- end of card -->
                        <!-- end of card --> */}
    
                        {/* <!-- Card--> */}
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">GROWTH</div>
                                <p>Very appropriate for short term</p>
                                <hr className="cell-divide-hr"/>
                                <div className="price"><span className="currency"></span><span className="value">$199</span></div>
                                <div className="frequency">monthly</div>
                                <hr className="cell-divide-hr"/>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Core Bussiness System</div>
                                    </li>
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Under 100 Contacts</div>
                                    </li>
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Biling</div>
                                    </li>
                                    <li className="media">
                                    <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Custom Features</div>
                                    </li>
                                </ul>
                                <div className="button-wrapper">
                                    <a className="btn-solid-reg page-scroll" href="/pages/register">Corporate</a>
                                </div>
                            </div>
                        </div>
                         {/* <!-- end of card -->
                        <!-- end of card --> */}
    
                        {/* <!-- Card--> */}
                        <div className="card">
                            <div className="label">
                                <p className="best-value">Best Value</p>
                            </div>
                            <div className="card-body">
                                <div className="card-title">CORPORATE</div>
                                <p>Must have for large companies</p>
                                <hr className="cell-divide-hr"/>
                                <div className="price"><span className="value">contact</span></div>
                                <div className="frequency">monthly</div>
                                <hr className="cell-divide-hr"/>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Core Bussiness Systems</div>
                                    </li>
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Under 100 Contacts</div>
                                    </li>
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Biling</div>
                                    </li>
                                    <li className="media">
                                       <FontAwesomeIcon className="fontAweosme" icon={faCheck}/><div className="media-body">Custom Features</div>
                                    </li>
                                </ul>
                                <div className="button-wrapper">
                                    <a className="btn-solid-reg page-scroll" href="/pages/register">Register</a>
                                </div>
                            </div>
                        </div>
                         {/* <!-- end of card -->
                        <!-- end of card --> */}
    
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
export default Pricing
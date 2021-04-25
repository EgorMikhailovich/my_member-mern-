import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"

class Header extends Component{
    render(){
        return(
            <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1 className="h1-large "><span className="turquoise">Manage Your </span><span className="MemberColor"> Members</span> </h1>
                            <p className="p-large">CMA Planner is a powerful CRM to connect with your customers efficiently and effectively to grow your business.  </p>
                            <a className="btn-solid-lg page-scroll dis" href="#services">Discover</a>
                        </div> 
                    </div> 
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="https://demos.onepagelove.com/html/evolo/images/header-teamwork.svg" alt="alternative"/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </header>
        )
    }
}
export default Header
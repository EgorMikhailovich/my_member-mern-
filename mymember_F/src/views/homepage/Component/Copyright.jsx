import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"

class Copyright extends Component{
    render(){
        return(
            <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © 2021 Mymember™. All Rights Reserved.</p>
                </div>
                {/* <!-- end of col --> */}
            </div> 
            {/* <!-- enf of row --> */}
        </div> 
        {/* <!-- end of container --> */}
    </div> 
        )
    }
}
export default Copyright
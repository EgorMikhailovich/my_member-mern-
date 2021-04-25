import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"

class Video extends Component{
    render(){
        return(
            <div className="basic-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Check out the video</h2>

                    {/* <!-- Video Preview --> */}
                    <div className="image-container">
                        <div className="video-wrapper">
                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                                <img className="img-fluid" src="images/video-preview.svg" alt="alternative"/>
                                <span className="video-play-button">
                                    <span></span>
                                </span>
                            </a>
                        </div>
                         {/* <!-- end of video-wrapper --> */}
                    </div>
                     {/* <!-- end of image-container --> */}
                    {/* <!-- end of video preview --> */}

                    <p className="p-heading">This video will show you a case study for one of our Major Customers and will help you understand why your startup needs Mymember in this highly competitive market</p>
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
export default Video
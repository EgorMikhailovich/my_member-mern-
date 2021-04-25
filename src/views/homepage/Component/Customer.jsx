import React,{ Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../assets/scss/pages/users.scss"
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

class Customer extends Component {
    render() {
        return (
            <div class="slider-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h5 className="CustomerTrust">Trusted By</h5>
                            <div className="CustomerCarousel">
                            <Carousel autoPlaySpeed={3000} autoPlay={this.props.deviceType !== "mobile" ? true : true} removeArrowOnDeviceType={["tablet", "mobile","desktop"]} draggable={true} responsive={responsive}>
                            <br/>
                            
                                <div className="c1"> <img class="img-fluid " src="images/customer-logo-1.png" alt="alternative"/></div>
                                <div className="c1"> <img class="img-fluid" src="images/customer-logo-2.png" alt="alternative"/></div>
                                <div className="c1"> <img class="img-fluid" src="images/customer-logo-3.png" alt="alternative"/></div>
                                <div className="c1"> <img class="img-fluid" src="images/customer-logo-4.png" alt="alternative"/></div>
                                <div className="c1"> <img class="img-fluid" src="images/customer-logo-5.png" alt="alternative"/></div>
                                <div className="c1"> <img class="img-fluid" src="images/customer-logo-6.png" alt="alternative"/></div>
                                
                            </Carousel>
                            </div>
                            </div>

                    </div>
                      
                    </div>
                 
                </div>
               
           
        )
    }
}
export default Customer
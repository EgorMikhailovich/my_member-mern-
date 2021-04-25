import React,{ Component } from "react";
import "../../../assets/scss/pages/users.scss"

class Testimonial extends Component{
    render(){
        return(
            <div className="slider-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="images/testimonials.svg" alt="alternative"/>
                        </div> 
                        {/* <!-- end of image-container --> */}
                    </div> 
                    {/* <!-- end of col --> */}
                    <div className="col-lg-6">
                        <h2>Testimonials</h2>
                        
                        {/* <!-- Card Slider --> */}
                        <div className="slider-container">
                            <div className="swiper-container card-slider">
                                <div className="swiper-wrapper">
                                    
                                    {/* <!-- Slide --> */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-1.jpg" alt="alternative"/>
                                            <div className="card-body">
                                                <p className="testimonial-text">I just finished my trial period and was so amazed with the support and results that I purchased Evolo right away at the special price.</p>
                                                <p className="testimonial-author">Jude Thorn - Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                     {/* <!-- end of swiper-slide -->
                                    <!-- end of slide --> */}
            
                                    {/* <!-- Slide --> */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-2.jpg" alt="alternative"/>
                                            <div className="card-body">
                                                <p className="testimonial-text">Evolo has always helped or startup to position itself in the highly competitive market of mobile applications. You will not regret using it!</p>
                                                <p className="testimonial-author">Marsha Singer - Developer</p>
                                            </div>
                                        </div>        
                                    </div> 
                                    {/* <!-- end of swiper-slide --> */}
                                    {/* <!-- end of slide --> */}
            
                                    {/* <!-- Slide --> */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-3.jpg" alt="alternative"/>
                                            <div className="card-body">
                                                <p className="testimonial-text">Love their services and was so amazed with the support and results that I purchased Evolo for two years in a row. They are awesome.</p>
                                                <p className="testimonial-author">Roy Smith - Marketer</p>
                                            </div>
                                        </div>        
                                    </div> 
                                    {/* <!-- end of swiper-slide --> */}
                                    {/* <!-- end of slide --> */}
                                   
                                </div> 
                                {/* <!-- end of swiper-wrapper --> */}
            
                                {/* <!-- Add Arrows --> */}
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                                {/* <!-- end of add arrows --> */}
            
                            </div> 
                            {/* <!-- end of swiper-container --> */}
                        </div> 
                        {/* <!-- end of slider-container --> */}
                        {/* <!-- end of card slider --> */}
    
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
export default Testimonial
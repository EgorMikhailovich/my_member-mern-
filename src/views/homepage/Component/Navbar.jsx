import React ,{Component} from 'react'
import "../../../assets/scss/pages/users.scss"
class Navbar extends Component{
    render(){
        return(
            // <!-- Navigation -->
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
    <div className="container">
        
        {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
        {/* <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Evolo</a> --> */}

        {/* <!-- Image Logo --> */}
        <a className="navbar-brand logo-image" href="#"><img src="https://mymember.com/static/media/logo.940eab8a.png" alt="alternative"/></a> 

        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
                    <a className="nav-link page-scroll Detail12" href="/">Home</a>
                </li>
                <li className="nav-item">
                
                    <a className="nav-link page-scroll Detail12" href="#services">Services <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll Detail12" href="#details">Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll Detail12" href="#pricing">Pricing</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link page-scroll Detail12" href="#contact">Contact</a>
                </li>
                <li ><a class="btn-solid-lg page-scroll btn2" href="/pages/login">Login</a> </li>
                <li><a class="btn-solid-lg page-scroll btn2" href="/pages/register">Signup</a></li>              
            </ul>
     
        </div> 
        </div>
    
    </nav>

        )

        }
    }
export default Navbar
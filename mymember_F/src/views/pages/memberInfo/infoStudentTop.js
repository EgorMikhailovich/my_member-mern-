import React from "react"
import {
    Card,
    CardBody,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    CardHeader,
    Button,
    CardFooter,
    Media,Input
} from "reactstrap"
import {
    Printer,
    Phone,
    User, Copy, Paperclip, BookOpen, DollarSign,PenTool
} from "react-feather"
import "../../../assets/scss/pages/users.scss"
class UserEdit extends React.Component {
    state = {
       
    }

   
    render() {
        return (
           
            <div className="list-icon">
              
                <Col lg="12">
                   
                
                    <Button className="btn-lg fides btn waves-effect waves-light">
                      <Copy size={21} />
                      <br></br>
                        Clone
                    </Button>
  
                
                    <Button className="btn-lg fides5 btn waves-effect waves-light">
                      <Phone size={21} />
                      <br></br>
                      Contact
                    </Button>
                    <Button className="btn-lg fides4 btn waves-effect waves-light">
                      <User size={21} />
                      <br></br>
                      Candidate
                    </Button>
                    <Button className="btn-lg fides3 btn waves-effect waves-light">
                      <BookOpen size={21} />
                      <br></br>
                      Test
                    </Button>
                    <Button className="btn-lg fides2 btn waves-effect waves-light">
                      <Printer size={21} />
                      <br></br>
                      Print
                    </Button>
                    <Button className="btn-lg fides1 btn waves-effect waves-light">
                      <DollarSign size={21} />
                      <br></br>
                      Buy
                    </Button>
                    <Button className="btn-lg fides1 btn waves-effect waves-light">
                      <PenTool size={21} />
                      <br></br>
                      Sign
                    </Button>
              </Col>
              
            </div>
          

        )
    }
}
export default UserEdit

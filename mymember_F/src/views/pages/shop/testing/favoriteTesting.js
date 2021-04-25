import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,Row,Col
} from "reactstrap"
import BuyNowModal from "./buyNowModal"




class ActiveStudent extends React.Component {
    render() {
    return (
      <React.Fragment>
            <Row>
                
                <Col> 
                <br></br>
                    <h6> Favorite Testing</h6>
                <br></br>
                </Col>
            </Row>
            <Row>
    
                <Col lg="3" md="12">
                    
                  <Card>
                        <CardHeader style={{background:"#ff0000"}} >
                            <h6 style={{color:"#fff",textAlign:"center"}}>7 Months Beginner PIF(A)</h6>
                        </CardHeader>
                        <CardBody>
                                <Row>
                                    <Col><p>Duration:</p></Col>
                                    <Col>7 months</Col>
                                </Row>
                                <Row>
                                    <Col><p>Price:</p></Col>
                                    <Col>$800</Col>
                                </Row>
                                <Row>
                                    <Col><p>Payment Type:</p></Col>
                                    <Col><p>PIF</p></Col>
                                </Row>
                                <Row>
                                   <Col></Col>
                                   <Col> <BuyNowModal/> </Col>
                                </Row>
                        </CardBody>
                  </Card> 
                </Col>

                
             
            
                </Row>
             
            
        </React.Fragment>
    )
  }
}
export default ActiveStudent

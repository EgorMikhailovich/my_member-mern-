import React from "react"
import {
  Card,
  CardHeader,
  CardBody,Row,Col
} from "reactstrap"
import BuyNowModal from "./buyNowModal"
import {Edit,Trash,Trash2 } from "react-feather"





class ActiveStudent extends React.Component {
    render() {
    return (
      <React.Fragment>
            <Row>
                <Col> 
                <br></br>
                    <h6> Favorite Membership</h6>
                <br></br>
                </Col>
            </Row>
            <Row>
    
                <Col lg="3" md="12">
                    
                  <Card>
                  <CardHeader style={{background:"black",padding:"5px 10px"}} >
                            <h6 style={{color:"#fff",margin:"0",fontWeight:"500", fontSize:"16px"}}>Little tiger 1 week</h6>
                            <div>
                              <Edit size="15" color="#fff"/>
                              <Trash size="15" color="#fff" />
                            </div>
                        </CardHeader>
                        <CardBody style={{padding:"10px"}}> 
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

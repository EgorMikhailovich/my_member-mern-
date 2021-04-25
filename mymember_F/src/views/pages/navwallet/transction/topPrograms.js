import React from "react"
import { Row, Col,CardBody,Card,CardHeader, CardTitle } from "reactstrap"

class TopProgram extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <Row>
          <Col lg="3" md="12">
          <Card>
                <CardHeader style={{background:"#ff9300"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>Total SMS</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>0</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="3" md="12">
          <Card>
                <CardHeader style={{background:"blue"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>Total CALL Minute</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>0</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="3" md="12">
          <Card>
                <CardHeader style={{background:"green"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>Wallet Amount</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>946</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="3" md="12">
          <Card>
                <CardHeader style={{background:"#d8002a"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>Wallet Custom Amount</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>0</p>
              </CardBody>
          </Card>
            
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default TopProgram

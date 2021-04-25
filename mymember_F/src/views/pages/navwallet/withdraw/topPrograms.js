import React from "react"
import { Row, Col,CardBody,Card,CardHeader, CardTitle } from "reactstrap"


let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7"

class TopProgram extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <Row>
          <Col lg="2" md="12">
          <Card>
                <CardHeader style={{background:"#ff9300"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>Open</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>14</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="2" md="12">
          <Card>
                <CardHeader style={{background:"blue"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>Closed</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>6</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="2" md="12">
          <Card>
                <CardHeader style={{background:"green"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>Archived</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>6</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="2" md="12">
          <Card>
                <CardHeader style={{background:"#d8002a"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>On Hold</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>0</p>
              </CardBody>
          </Card>
            
          </Col>
          <Col lg="2" md="12">
          <Card>
                <CardHeader style={{background:"#000"}} className="pd-add">
                    <CardTitle style={{color:"#fff",textAlign:"center"}}>All Tickets</CardTitle>
                </CardHeader>
              <CardBody  style={{textAlign:"center",fontSize:"20px"}}>
                  <p>20</p>
              </CardBody>
          </Card>
            
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

export default TopProgram

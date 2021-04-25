import React from "react"
import { Row, Col,CardBody,Card,CardHeader } from "reactstrap"
import Eligible from "./Eligible"
import Registered from "./Registered"
import Recommended from "./Recommended"


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
          <Col lg="4" md="12">
            <Eligible/>
            
          </Col>
          <Col lg="4" md="12" className="text-center align-middle">
            
            <Recommended/>  
          </Col>
          <Col lg="4" md="12" className="text-center align-middle">
          <Registered/>
            
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default TopProgram

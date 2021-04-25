import React from "react"
import { Row, Col,CardBody,Card,CardHeader } from "reactstrap"
import BlackBelt from "./blackBeltClub"
import InstructorClub from "./instructorClub"
import LeadershipClub from "./Leadershipclub"
import MasterClub from "./masterClub"


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
          <Col lg="3" md="12">
           <BlackBelt />
            
          </Col>
          <Col lg="3" md="12" className="text-center align-middle">
            
            <InstructorClub/>
          </Col>
          <Col lg="3" md="12" className="text-center align-middle">
          <LeadershipClub/>
            
          </Col>
          <Col lg="3" md="12" className="text-center align-middle">
          <MasterClub/>
            
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default TopProgram

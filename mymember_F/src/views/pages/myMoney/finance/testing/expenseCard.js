import React from "react"
import { Row, Col,CardBody,Card,CardHeader, CardTitle } from "reactstrap"
import "../../../../../assets/scss/pages/users.scss"


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
          <Card>
                <CardHeader className="pd-add cd-h">
                    <CardTitle style={{textAlign:"center",fontSize:"17px",color:"white"}}>Income Breakdown</CardTitle>
                </CardHeader>
                
              <CardBody className="cd_height">
                  <Row>
                     <div className="box">
                        <div className="lf-text">
                          <p className="st-1">In House Received:</p>
                        </div>
                        <div className="rh-text">
                           <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">In House Due:</p>
                        </div>
                        <div className="rh-text">
                         <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">In House Total:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Auto Pay Recived:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Auto pay Total:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">In House Received:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                     <div className="box">
                        <div className="lf-text">
                        <p className="st-1">Total Recived:</p>
                        </div>
                        <div className="rh-text">
                        <p className="st-2">$0 (0)</p>
                        </div>
                     </div>
                  </Row>
              </CardBody>
          </Card>
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

export default TopProgram

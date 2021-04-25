import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap"
import Breadcrumbs from "../../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Mail, Phone, FileText, Download } from "react-feather"
import SystemSidebar from "./nurturingSidebar"

import "../../../../../assets/scss/pages/invoice.scss"
import TemplateCards from "./templateCards"

class System extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Text"
          breadCrumbParent="Pages"
          breadCrumbActive="System"
        />
        {/* <Row> <Button.Ripple color="success" >Create Email</Button.Ripple> </Row> */}
        <Row>
          <Col sm="3">
            <SystemSidebar/>
          </Col>
          <Col sm="9">
              <Card>
                  <Row>
                      <CardBody style={{background:"#eee"}}>
                        <h6>What is an automatic email?</h6>
                        <p>An email put into this section will be automatically sent to anyone in your lead contacts. Emails are sent automatically based on the time your entered your lead in to CMA Planner.</p>
                      </CardBody>
                     
                  </Row>
              </Card>
              <Card>
              
                <CardBody>
                    <TemplateCards />
                </CardBody>
              
                    
              </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default System

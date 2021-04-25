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
import TopPragrams from "./topPrograms"
import LittleTiger from "./littleTigersTable"
import Taekwondo from "./taekwondoTable"
import TeanAndAdult from "./teanAdultTable"
import Kickboxing from "./kickBoxingTable"
import StudentTracking from "./studentTrackingTable"
import StudentTrackingByMonth from "./studentTrackingbyMonth"
import MembershipStatsByColor from "./memberShipStatsTable"
import MembershipStats from "./membershipStatsBySort"
import ComperByProgramTable from "./comperByProgramTable"

import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"



class ActiveStudent extends React.Component {
    render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Statistics"
          breadCrumbParent="Home"
          breadCrumbActive="After School"
        />
        <TopPragrams />
            <Row>
            <Col lg="3" md="12">
                    <LittleTiger/>
                </Col>
             
            
                <Col lg="3" md="12">
                    <Taekwondo/>
                </Col>
             
            
                <Col lg="3" md="12">
                    <TeanAndAdult />
                </Col>
             
            
                <Col lg="3" md="12">
                    <Kickboxing />
                </Col>
            </Row>
            <Row>
            <Col lg="3" md="12">
                   <StudentTracking/>
                </Col>
             
            
                <Col lg="3" md="12">
                   <StudentTrackingByMonth/>
                </Col>
             
            
                <Col lg="3" md="12">
                    <MembershipStatsByColor/>
                </Col>
             
            
                <Col lg="3" md="12">
                   <MembershipStats/>
                </Col>
                <Col lg="3" md="12">
                   <ComperByProgramTable/>
                </Col>
            </Row>
                
             
            
        </React.Fragment>
    )
  }
}
export default ActiveStudent

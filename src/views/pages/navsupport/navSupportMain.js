import React from "react"
import {Row,Col
} from "reactstrap"
import TopPragrams from "./topPrograms"
import PillsJustified from "./PillsJustified"
import TicketsupportForm from "./supportTab1/ticketsupportForm"
import EditorControlled from "./supportTab1/EditorControlled"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"




class Navsupport extends React.Component {
    render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Support"
          breadCrumbParent="Home"
          breadCrumbActive="Support"
        />
        <Row>
           <Col lg="10" sm="12">
                <TopPragrams />
                <PillsJustified/>
                <supportTab1/>
          </Col>
        </Row>
            {/* <Row>
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
            </Row> */}
            {/* <Row>
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
            </Row> */}
                
             
            
        </React.Fragment>
    )
  }
}
export default Navsupport

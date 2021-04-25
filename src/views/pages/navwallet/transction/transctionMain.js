import React from "react"
import {Row,Col
} from "reactstrap"
import TopPragrams from "./topPrograms"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import PillActiveBorder from "./PillActiveBorder"




class Navsupport extends React.Component {
    render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Wallet"
          breadCrumbParent="Home"
          breadCrumbActive="Transaction History"
        />
        <Row>
           <Col lg="12" sm="12">
                <TopPragrams />
                <PillActiveBorder/>
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

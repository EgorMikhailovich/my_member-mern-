import React from "react"
import {Row,Col
} from "reactstrap"
import WithdrawForm from "./withdrawForm"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"




class Navsupport extends React.Component {
    render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="wallet"
          breadCrumbParent="Home"
          breadCrumbActive="Withdraw Funds"
        />
        <Row>
           
            <Col lg="6" sm="12" className="cen_card">
               <WithdrawForm/>
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

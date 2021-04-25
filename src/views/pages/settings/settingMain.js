import React from "react"
import {
    Card,
    CardBody,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from "reactstrap"
import classnames from "classnames"
import "../../../assets/scss/pages/users.scss"
import img from "../../../assets/img/portrait/small/avatar-s-11.jpg"
import Schedule from "./schedule/Calendar"
import UserTable from "./users/usersTable"
import StripTable from "./strip/stripTable"
import ProgramTable from "./Program/programeTable"
// import Generalform from "./general/generalTable"
import CategoryTable from "./Program/category/categoryTable"
import Generalform from "./general/generalTable"
import OthersTable from "./others/othersTable"
import GatewayapiTable from "./gatewayapi/gatewayapiTable"
import GatewayapiForm from "./gatewayapi/gatewayapiForm"
import Gatewayapi1Form from "./gatewayapi/gatewayapi1Form"
import Gatewayapi2Form from "./gatewayapi/gatewayapi2Form"
import Billing1Table from "./billing/billing1Table"
import CreateStudentBilling from "./settingbillingModal/createStudentBilling"
// import generalForm from "./general/generalForm"
import General1Form from "./general1/general1Form"
import AddLocation from "./location/generalForm"




class UserEdit extends React.Component {
    state = {
        activeTab: "1"
    }

    toggle = tab => {
        this.setState({
            activeTab: tab
        })
    }
    render() {
        return (
            <div>
                <Row>
                    {/* <Topheader/> */}
                </Row>
                
                {/* <AccountInfo/> */}
              
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody className="pt-2">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "1"
                                            })}
                                            onClick={() => {
                                                this.toggle("1")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">General</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "2"
                                            })}
                                            onClick={() => {
                                                this.toggle("2")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Users</span>
                                        </NavLink>
                                    </NavItem>
                                 
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "3"
                                            })}
                                            onClick={() => {
                                                this.toggle("3")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Schedule</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "4"
                                            })}
                                            onClick={() => {
                                                this.toggle("4")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Programs</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "5"
                                            })}
                                            onClick={() => {
                                                this.toggle("5")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Stripe</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "6"
                                            })}
                                            onClick={() => {
                                                this.toggle("6")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Billing</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "7"
                                            })}
                                            onClick={() => {
                                                this.toggle("7")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Others</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "8"
                                            })}
                                            onClick={() => {
                                                this.toggle("8")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Gateway API</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: this.state.activeTab === "9"
                                            })}
                                            onClick={() => {
                                                this.toggle("9")
                                            }}
                                        >
                                            {/* <User size={16} /> */}
                                            <span className="align-middle ml-50">Location</span>
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                       <General1Form/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <UserTable />
                                        {/* <StudentBilling /> */}
                                        
                                    </TabPane>
                                    <TabPane tabId="3">
                                    <Schedule /> 
                                    </TabPane>
                                    <TabPane tabId="4">
                                      <ProgramTable />
                                      <CategoryTable/>
                                    </TabPane>
                                    <TabPane tabId="5">
                                      <StripTable />
                                    </TabPane>
                                    <TabPane tabId="6">
                                      <Billing1Table/>
                                    </TabPane>
                                    <TabPane tabId="7">
                                      <OthersTable/>
                                    </TabPane>
                                    <TabPane tabId="8">
                                      <GatewayapiForm/>
                                      <Gatewayapi1Form/>
                                      <Gatewayapi2Form/>
                                    </TabPane>
                                    <TabPane tabId="9">
                                      <AddLocation />
                                    </TabPane>
                                </TabContent>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default UserEdit

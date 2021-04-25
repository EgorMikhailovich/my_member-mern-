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
    TabPane,
    CardHeader,
    Button
} from "reactstrap"
import classnames from "classnames"
import "../../../../assets/scss/pages/users.scss"
import BirthdayAppointment from "./BirthdayAppointment"
import MissYouCallAppointment from "./MissYouCallAppointment"
import SchoolAppointment from "./SchoolAppointment"
import RenewalAppointment from "./RenewalAppointment"


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
                    <Col sm="12">
                        <Card>
                            <CardHeader className="headingtext"> My Tasks
                            <a href="/app/appointment">
                            <Button  className="mb-1 btn-r-view" color="success" size="sm" >
                                View All
                            </Button>{" "}
                            </a>
                            
                             </CardHeader>
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
                                            <span className="align-middle ml-50">Birthday</span>
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
                                            <span className="align-middle ml-50">MissYou Call</span>
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
                                            <span className="align-middle ml-50">Appointments</span>
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
                                            <span className="align-middle ml-50">Renewals</span>
                                        </NavLink>
                                    </NavItem>
                                 
                                   
                               </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                       <BirthdayAppointment/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <MissYouCallAppointment/> 
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <SchoolAppointment/>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <RenewalAppointment/>
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

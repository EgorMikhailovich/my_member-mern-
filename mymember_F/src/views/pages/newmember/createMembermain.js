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
} from "reactstrap"
import classnames from "classnames"
import DetailsTab from "./createMember"
import StudentBilling from './createStudentBilling'
import "../../../assets/scss/pages/users.scss"
import Membership from './MembershipInfoMain'
import Activity from './createStudentActivity'
import Ranks from './createStudentRank'
import Invoice from './createInvoice'
import MyFamily from './myFamily'
import MyGroup from './myGroup'
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
                                            <span className="align-middle ml-50">Details</span>
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
                                            <span className="align-middle ml-50">Billing</span>
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
                                            <span className="align-middle ml-50">Membership</span>
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
                                            <span className="align-middle ml-50">Ranks</span>
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
                                            <span className="align-middle ml-50">Activity</span>
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
                                            <span className="align-middle ml-50">Invoice</span>
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
                                            <span className="align-middle ml-50">MY Family</span>
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
                                            <span className="align-middle ml-50">Group</span>
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <DetailsTab />
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <StudentBilling />
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Membership/>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Ranks />
                                    </TabPane>
                                    <TabPane tabId="5">
                                        <Activity/>
                                    </TabPane>
                                    <TabPane tabId="6">
                                        <Invoice/>
                                    </TabPane>
                                    <TabPane tabId="7">
                                        <MyFamily/>
                                    </TabPane>
                                    <TabPane tabId="8">
                                        <MyGroup/>
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

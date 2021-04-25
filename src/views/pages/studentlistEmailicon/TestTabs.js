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
    Button,
    CardFooter,
    Media,Input
} from "reactstrap"
import classnames from "classnames"
// import "../../../assets/scss/pages/users.scss"
import "../../../assets/scss/pages/users.scss"
// import TestRegisterTable from "./TestRegisterTable"
// import RecommendedTable from "./RecommendedTable"

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
                                            <span className="align-middle ml-50">Email Name	</span>
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
                                            <span className="align-middle ml-50">Schedule Type</span>
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
                                            <span className="align-middle ml-50">Last Edited</span>
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
                                            <span className="align-middle ml-50">Active</span>
                                        </NavLink>
                                    </NavItem>
                                   </Nav>
                               
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                      {/* <RecommendedTable /> */}
                                    </TabPane>
                                    <TabPane tabId="2">
                                    {/* <TestRegisterTable/> */}
                                    </TabPane>
                                    <TabPane tabId="3">
                                    {/* <TestRegisterTable/> */}
                                    </TabPane>
                                    <TabPane tabId="4">
                                    {/* <TestRegisterTable/> */}
                                    </TabPane>
                                    
                                </TabContent>
                           
                    </Col>
                </Row>
            </div>

        )
    }
}
export default UserEdit

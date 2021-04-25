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
import "../../../../assets/scss/pages/users.scss"
import Expired from "./Expired"
import ExpiredThisMonth from "./Expired"


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
                            <CardHeader className="headingtext"> Membership
                            <a href="/app/renewals">
                            <Button.Ripple className="mb-1 btn-r-view" color="success" size="sm">
                                View All
                            </Button.Ripple>{" "}
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
                                            <span className="align-middle ml-50">Expired</span>
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
                                            <span className="align-middle ml-50">Expiring This Month</span>
                                        </NavLink>
                                    </NavItem>
                                 
                                   
                               </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                       <Expired/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <ExpiredThisMonth/> 
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

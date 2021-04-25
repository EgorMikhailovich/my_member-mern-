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
import AllTable from "./AllTable"
import LtTable from "./LtTable"
// import TkdTable from "./TkdTable"
// import BoxingTable from "./BoxingTable"
// import TasmaTable from "./TasmaTable"
// import TeenTable from "./TeenTable"

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
                            <CardHeader className="headingtext"> Candidates
                            <Button.Ripple className="mb-1 btn-r-view" color="success" size="sm">
                                View All
                            </Button.Ripple>{" "}
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
                                            <span className="align-middle ml-50">BBC</span>
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
                                            <span className="align-middle ml-50">LC</span>
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
                                            <span className="align-middle ml-50">IC</span>
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
                                            <span className="align-middle ml-50">MC</span>
                                        </NavLink>
                                    </NavItem>
                                 
                                   
                               </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                       <AllTable/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <LtTable/> 
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <LtTable/> 
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <LtTable/> 
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
